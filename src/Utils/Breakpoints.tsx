import Sizes from "./theme.constants";

const Breakpoints = () => {
  const { desktop, tablet, mobile } = Sizes();

  if (desktop) return "large";
  if (tablet) return "medium";
  if (mobile) return "small";
};

export default Breakpoints;
