import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bottom-0 absolute py-[2rem] bg-slate ">
      <div className="flex flex-row items-center justify-center text-black">
      <p>Copyright ⓒ {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
