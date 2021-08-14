import VerificationContext from "../../layout/Sections/Sections/PinVerfication";
import Section from "../../components";
import { useParams } from "react-router";

const Index = () => {
  const { method } = useParams<{ method: string }>();
  return (
    <Section>
      <VerificationContext verificationMethod={method} />
    </Section>
  );
};

export default Index;
