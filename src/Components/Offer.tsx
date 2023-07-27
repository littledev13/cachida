import IconHeart from "./svg/IconHeart";
import IconLeaf from "./svg/IconLeaf";
import IconTarget from "./svg/IconTarget";
import IconTool from "./svg/IconTool";
import Power from "./svg/Power";

const Offer = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <p className="text-4xl text-black font-bold">MENGAPA CACHIDA?...</p>
      <p className="text-2xl text-slate-500 mt-5">What we offer</p>
      <div className="grid grid-cols-3 gap-4 place-content-evenly place-items-center w-full mt-7">
        <div className="flex flex-col items-center gap-3">
          <Power
            width="100px"
            height="100px"
            className="text-[#ff6800] hover:text-orange-400 hover:cursor-pointer"
          />
          <h4 className="text-2xl font-bold text-center">
            Teknologi AI yang Canggih
          </h4>
          <p className="text-center text-slate-500 text-lg">
            Solusi pemasaran canggih dengan AI terkini.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <IconHeart
            width="100px"
            height="100px"
            className="text-[#ff6800] hover:text-orange-400 hover:cursor-pointer"
          />
          <h4 className="text-2xl font-bold text-center">Pendekatan Humanis</h4>
          <p className="text-center text-slate-500 text-lg">
            Menciptakan strategi pemasaran efektif dengan kecerdasan buatan dan
            pendekatan manusiawi.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <IconLeaf
            width="100px"
            height="100px"
            className="text-[#ff6800] hover:text-orange-400 hover:cursor-pointer"
          />
          <h4 className="text-2xl font-bold text-center">
            Mentor Ahli yang Berpengalaman
          </h4>
          <p className="text-center text-slate-500 text-lg">
            Dukungan yang responsif dan tim ahli berpengalaman untuk
            mengoptimalkan potensi pemasaran digital.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <IconTarget
            width="100px"
            height="100px"
            className="text-[#ff6800] hover:text-orange-400 hover:cursor-pointer"
          />
          <h4 className="text-2xl font-bold text-center">
            Strategi Pemasaran yang Tepat Sasaran
          </h4>
        </div>
        <div className="flex flex-col items-center gap-3">
          <IconTarget
            width="100px"
            height="100px"
            className="text-[#ff6800] hover:text-orange-400 hover:cursor-pointer"
          />
          <h4 className="text-2xl font-bold text-center">CERTIFIED</h4>
        </div>
        <div className="flex flex-col items-center gap-3">
          <IconTool
            width="100px"
            height="100px"
            className="text-[#ff6800] hover:text-orange-400 hover:cursor-pointer"
          />
          <h4 className="text-2xl font-bold text-center">
            Pelatihan dan Konsultasi yang Personal
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Offer;
