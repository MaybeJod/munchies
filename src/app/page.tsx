import Chip from "./components/Chip";
import Logo from "./components/Logo";

export default function Home() {
  return (
    <div>
      <Chip text="open" isOpen={true} dot={true} />
      <main className="grid grid-cols-4 gap-4 md:grid md:grid-cols-12 md:grid-rows-6">
        <div className="flex flex-col gap-6">
          <Logo fill="#000" width="200" height="24" />
          <div className="border grid grid-cols-subgrid">filter</div>
          <div className="border grid grid-cols-subgrid">card</div>
          <div className="border grid grid-cols-subgrid">resturants</div>
        </div>
      </main>
    </div>
  );
}
