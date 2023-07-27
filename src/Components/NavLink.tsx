const NavLink = () => {
  return (
    <ul className="uppercase flex flex-row  text-slate-500 gap-5">
      <li className="hover:bg-[#ff6800] hover:text-white transition-all duration-200 hover:shadow-lg px-6 py-3">
        <a href="#beranda">beranda</a>
      </li>
      <li className="hover:bg-[#ff6800] hover:text-white transition-all duration-200 hover:shadow-lg px-6 py-3">
        <a href="#">about us</a>
      </li>
      <li className="hover:bg-[#ff6800] hover:text-white transition-all duration-200 hover:shadow-lg px-6 py-3">
        <a href="#">kelas</a>
      </li>
      <li className="hover:bg-[#ff6800] hover:text-white transition-all duration-200 hover:shadow-lg px-6 py-3">
        <a href="#">kontak</a>
      </li>
      <li className="hover:bg-white bg-[#ff6800] hover:text-slate-500 text-white transition-all duration-200 hover:shadow-lg px-6 py-3">
        <a href="#">hiring</a>
      </li>
    </ul>
  );
};

export default NavLink;
