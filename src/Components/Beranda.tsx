import Image from "next/image";
import React from "react";
import CloudDownload from "./svg/CloudDownload";

const Beranda = () => {
  return (
    <div
      id="beranda"
      className="flex flex-col sm:gap-0 gap-5 sm:flex-row justify-evenly items-center h-[65vh] sm:h-[50vh]  text-slate-600 text-xl"
    >
      <div className="kiri sm:w-3/5">
        <p className="title text-3xl font-bold text-black pb-5">Cachida</p>
        <p>
          Cachida adalah tempat buat belajar dan konsultasi AI dalam Digital
          Marketing yang simpel, praktis, dan pastinya menyenangkan. Nggak cuma
          buat mahasiswa, tapi juga buat karyawan dan pemilik bisnis. Di sini,
          kita akan belajar dengan cara yang seru banget buat bikin konten dan
          optimalkan strategi pemasaran kita.
        </p>
        <button className="flex flex-row px-4 gap-2 py-2 justify-evenly items-center bg-[#ff6800] rounded-lg mt-10 border-2 border-slate-50 text-white hover:bg-orange-400 hover:shadow-lg">
          <CloudDownload className="scale-150" />
          <p>Profile Perusahaan</p>
        </button>
      </div>
      <div className="kanan ">
        <Image
          alt="cachida"
          src="/image/Cachida.png"
          height={300}
          width={300}
          className="shadow-lg rounded-lg"
        />
      </div>
    </div>
  );
};

export default Beranda;
