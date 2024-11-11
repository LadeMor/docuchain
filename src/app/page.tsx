import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <nav className="w-28 bg-white h-screen sticky flex flex-col items-center pt-7 pb-7 pl-9 pr-9 gap-12">
        <img src="./icons/Logo.png" />
        <div className="flex flex-col items-center gap-7">
          <img src="./icons/alternate-file.svg" className="nav-icon-style" />
          <img src="./icons/user.svg" className="nav-icon-style" />
          <img src="./icons/work-bag.svg" className="nav-icon-style" />
        </div>
      </nav>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
