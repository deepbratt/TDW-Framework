import React, { useState, useEffect } from "react";
import packageJson from "../../package.json";
import moment from "moment";


const buildDateGreaterThan= (latestDate:string, currentDate:string) => {
  const momLatestDateTime = moment(latestDate);
  const momCurrentDateTime = moment(currentDate);

  if (momLatestDateTime.isAfter(momCurrentDateTime)) {
    return true;
  } else {
    return false;
  }
};

interface WithClearCacheProps {
  ChildComponent: React.ComponentType
}

const WithClearCache:React.FC <WithClearCacheProps> = ({ChildComponent, ...props})=> {
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
      fetch("/meta.json", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      }).then(response=>{
        console.log("meta", response)
        if(response.ok){
          return response.json()
        }else{
          return false
        }
      })
        .then((meta) => {
          console.log("meta2",meta)
          if(!meta){
            setIsLatestBuildDate(true);
          }else{
            const latestVersionDate = meta.buildDate;
            const currentVersionDate = packageJson.buildDate;
  
            const shouldForceRefresh = buildDateGreaterThan(
              latestVersionDate,
              currentVersionDate
            );
            if (shouldForceRefresh) {
              setIsLatestBuildDate(false);
              refreshCacheAndReload();
            } else {
              setIsLatestBuildDate(true);
            }
          }
        });
    }, []);
  
    return <>{isLatestBuildDate ? <ChildComponent {...props}/> : null}</>
  }

export default WithClearCache;