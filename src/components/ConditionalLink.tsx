import { Link, LinkProps } from "react-router-dom";
interface ConditionalLinkProps {
    condition: boolean;
    to: string;
    children: React.ReactNode
}
const ConditionalLink: React.FC<ConditionalLinkProps&LinkProps> = ({ children, to, condition, ...props }) =>
  condition && to ? <Link to={to} {...props}>{children}</Link> : <>{children}</>;

export default ConditionalLink;
