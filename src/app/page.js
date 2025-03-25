import ExpertiseSection from "./component/ExpertiseSection";
import FormSection from "./component/FormSection";
import Herosection from "./component/Herosection";
import MyJourney from "./component/MyJourney";
import MyworkSection from "./component/MyworkSection";
import SkillsSection from "./component/SkillsSections";


export default function Home() {
  return (
    <>
      <Herosection />
      <ExpertiseSection />
      <MyworkSection />
      <SkillsSection />
      <MyJourney />
      <FormSection />

    </>
  );
}
