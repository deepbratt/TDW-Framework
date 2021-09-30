import VerificationContext from "../../layout/Sections/Sections/PinVerfication";
import Section from "../../components";
import { useParams } from "react-router";
import MetaTags from "../../components/MetaTags";
import PageMeta from "../../Utils/constants/language/en/pageData";

const Index = () => {
  const { method } = useParams<{ method: string }>();
  return (
    <Section>
      <MetaTags
        title={PageMeta.forgotPassword.title}
        description={PageMeta.forgotPassword.description}
        canonical={PageMeta.forgotPassword.canonical}
        keywords={PageMeta.forgotPassword.keywords}
      />
      <VerificationContext verificationMethod={method} />
    </Section>
  );
};

export default Index;
