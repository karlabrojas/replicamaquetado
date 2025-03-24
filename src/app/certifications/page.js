import Image from "next/image";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Certifications() {
  return (
    <div>
      <Nav />
      <main>
        <div className="flex flex-col w-[85%] mx-[7.5%] mt-8 ">
          <h1 className="text-6xl font-thin text-gray-300 my-2">COMPANY</h1>
          <h1 className="text-5xl my-2"><strong>Certifications</strong></h1>
          <hr className="border-gray-200"></hr>
        </div>
        <div className="h-14">

        </div>
        </main>
      <Footer/>
    </div>
  );
}