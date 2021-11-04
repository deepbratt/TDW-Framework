import { useEffect } from 'react';
import { useLocation } from 'react-router';
interface IProps {
  children: React.ReactNode;
}
const ScrollToTop = (props: IProps) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return <>{props.children}</>;
};

export default ScrollToTop;
