import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4">
      <div className="flex flex-col gap-6">
        <Image
          src={"/assets/logoLight.svg"}
          width={200}
          height={200}
          alt="munchies logo"
          className="mb-6"
        />

        <div className="w-80 border col-span-1 grid grid-cols-subgrid">
          filter
        </div>
        <div className="w-80 border col-span-1 grid grid-cols-subgrid">
          card
        </div>
        <div className="w-80 border col-span-1 grid grid-cols-subgrid">
          resturants
        </div>
      </div>
    </main>
  );
}
