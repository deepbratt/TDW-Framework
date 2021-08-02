import Sizes from "./theme.constants";

const Size = () => {
  const { desktop, tablet, mobile } = Sizes();

  if (desktop) return "1.9rem";
  if (tablet) return "1.875rem";
  if (mobile) return "1.625rem";
};

export default Size;


