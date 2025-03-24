import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <header className="flex flex-row mt-8 w-[85%] mx-[7.5%]">
        <div className="w-1/3 px-20 ">
          <h1 className="text-fuchsia-700 text-xl"><strong>LOGO kbrr</strong></h1>
        </div>
        <div className="w-2/3 flex flex-row justify-around px-8">
          <Link className=" text-sm border-4 border-white hover:border-y-indigo-300" href="/">MAIN</Link>
          <Link className=" text-sm border-4 border-white hover:border-y-indigo-300" href="/gallery">GALLERY</Link>
          <Link className=" text-sm border-4 border-white hover:border-y-indigo-300" href="/projectss">PROJECTS</Link>
          <Link className=" text-sm border-4 border-white hover:border-y-indigo-300" href="/certifications">CERTIFICATIONS</Link>
          <Link className=" text-sm border-4 border-white hover:border-y-indigo-300" href="/contacts">CONTACTS</Link>
        </div>
      </header>
    </div>
  );
}
