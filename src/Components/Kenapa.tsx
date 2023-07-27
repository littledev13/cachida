import Image from "next/image";

const Kenapa = () => {
  return (
    <div className="mt-32 flex flex-col sm:gap-0 gap-5 sm:flex-row justify-between items-center h-[65vh] sm:h-[50vh]  text-slate-600 text-xl px-5">
      <div className="kiri w-[47vw] overflow-hidden hover:shadow-lg">
        <Image
          alt="Kenapa Cachida"
          src="/image/Kenapa belajar AI.png"
          width={750}
          height={100}
          className="object-cover transform transition-transform hover:scale-125"
        />
      </div>
      <div className="kanan w-[47vw] flex flex-col gap-8 h-full">
        <p className="text-4xl text-black font-bold">KENAPA SIH BELAJAR AI?</p>
        <p>
          MISSION: Our mission lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Kenapa;
