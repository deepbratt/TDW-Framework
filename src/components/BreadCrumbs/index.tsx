import { Route } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { HOME } from '../../Utils/constants/language/en/buttonLabels';

interface ILink {
  label: string;
  path: string;
}
export interface BreadCrumbsProps {
  links?: Array<ILink>;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ links }) => {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split('/').filter((x) => x);
        return (
          <Breadcrumbs
            style={{ margin: '10px 0' }}
            aria-label="Breadcrumb"
            separator={<NavigateNextIcon fontSize="small" />}
          >
            <Link color="inherit" href="/">
              <Typography color="secondary" variant="body1">
                {HOME}
              </Typography>
            </Link>
            {links
              ? links.map((link: ILink, index) => {
                  const last = index === links.length - 1;
                  return last ? (
                    <Typography
                      style={{ textTransform: 'capitalize' }}
                      variant="body1"
                    >
                      {link.label}
                    </Typography>
                  ) : (
                    <Link
                      key={index + 'breadcrumbs'}
                      color="inherit"
                      href={link.path}
                    >
                      <Typography
                        style={{ textTransform: 'capitalize' }}
                        color="secondary"
                        variant="body1"
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  );
                })
              : pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                  return last ? (
                    <Typography
                      style={{ textTransform: 'capitalize' }}
                      key={index + 'breadcrumbs'}
                      variant="body1"
                    >
                      {value}
                    </Typography>
                  ) : (
                    <Link key={index + 'breadcrumbs'} color="inherit" href={to}>
                      <Typography
                        style={{ textTransform: 'capitalize' }}
                        color="secondary"
                        variant="body1"
                      >
                        {value}
                      </Typography>
                    </Link>
                  );
                })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
};

export default BreadCrumbs;
