import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="landing flex flex-col sm:gap-0 gap-5 sm:flex-row justify-evenly items-center h-[85vh] sm:h-[94vh]  text-slate-600 text-2xl ">
      <div className="w-96">
        <p>
          Bantu kamu jago AI profesional sekali klik.
          <span className="text-4xl">🔥</span>
        </p>
        <p>
          Karena sepandai2nya AI, yang pandai pake AI bisa gantiin posisi Job
          mu!
        </p>
      </div>
      <div>
        <Image
          alt="Portofolio"
          src="/image/Cachida - Portofolio.png"
          width={500}
          height={500}
          className="scale-150"
        />
      </div>
    </div>
  );
};

export default LandingPage;
