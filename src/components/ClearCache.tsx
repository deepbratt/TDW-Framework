import React, { useState, useEffect } from 'react';
import packageJson from '../../package.json';
import moment from 'moment';

const buildDateGreaterThan = (latestDate: any, currentDate: any) => {
  const momLatestDateTime = moment(latestDate);
  const momCurrentDateTime = moment(currentDate);

  if (momLatestDateTime.isAfter(momCurrentDateTime)) {
    return true;
  } else {
    return false;
  }
};

interface WithClearCacheProps {
  ChildComponent: React.ComponentType;
}

const WithClearCache: React.FC<WithClearCacheProps> = ({
  ChildComponent,
  ...props
}) => {
  const [isLatestBuildDate, setIsLatestBuildDate] = useState(false);

  const refreshCacheAndReload = () => {
    if (caches) {
      // Service worker cache should be cleared with caches.delete()
      caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name);
        }
      });
    }
    // delete browser cache and hard reload
    window.location.reload();
  };

  useEffect(() => {
    let devEnv = true;
    if (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname === '' ||
      process.env.NODE_ENV === "development"
    ) {
      devEnv = true;
      setIsLatestBuildDate(true)
    } else {
      devEnv = false;
    }
    if (!devEnv) {
      fetch('/meta.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return false;
          }
        })
        .then((meta) => {
          if (!meta) {
            setIsLatestBuildDate(true);
          } else {
            const latestVersionDate = meta.buildDate;
            const currentVersionDate = packageJson.buildDate;

            const shouldForceRefresh = buildDateGreaterThan(
              latestVersionDate,
              currentVersionDate
            );
            if (shouldForceRefresh) {
              console.log('New Version Found.');
              console.log('Fetching New Version...');
              console.log('Refreshing...');
              setIsLatestBuildDate(false);
              refreshCacheAndReload();
            } else {
              console.log('Displaying latest Version');
              setIsLatestBuildDate(true);
            }
          }
        });
    }
  }, []);

  return <>{isLatestBuildDate ? <ChildComponent {...props} /> : null}</>;
};

export default WithClearCache;
