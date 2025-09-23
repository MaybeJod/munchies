import BodyText from "./components/typography/BodyText";
import DisplayText from "./components/typography/DisplayText";
import H1Text from "./components/typography/H1Text";
import SubtitleText from "./components/typography/SubtitleText";
import TitleText from "./components/typography/TitleText";

export default function Home() {
  return (
    <main>
      <p>Typography</p>

      <DisplayText text="display component" />

      <H1Text text="h1 component" />

      <TitleText text="title component" />

      <SubtitleText text="subtitle component" />

      <BodyText text="body component" />

      <p>colors</p>
      <div className="w-15 h-15 border bg-white">white</div>
      <div className="w-15 h-15 bg-stroke border-stroke">stroke</div>
      <div className="w-15 h-15 border bg-off-white">off-white</div>
      <div className="w-15 h-15 bg-black text-white">black</div>
      <div className="w-15 h-15 bg-green">green</div>
    </main>
  );
}
