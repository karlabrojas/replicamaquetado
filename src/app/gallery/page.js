import Image from "next/image";
import Nav from "../components/nav"
import Footer from "../components/footer";
export default function Gallery() {
  return (
    <div>
      <Nav />
      <main>
        <div className="flex flex-col w-[85%] mx-[7.5%] mt-8 ">
          <h1 className="text-6xl font-thin text-gray-300 my-2">Photo</h1>
          <h1 className="text-5xl my-2"><strong>Gallery</strong></h1>
          <hr className="border-gray-200"></hr>
        </div>
        <div className="flex flex-col w-[85%] mx-[7.5%] ">
          <div className="flex flex-row justify-between mt-8">
            <Image src="/assets/gallery1.png" width={210} height={260} />
            <Image src="/assets/gallery2.png" width={210} height={260} />
            <Image src="/assets/gallery3.png" width={210} height={260} />
            <Image src="/assets/gallery4.png" width={210} height={260} />
            <Image src="/assets/gallery5.png" width={210} height={260} />
          </div>
          <div className="flex flex-row justify-between mt-8">
            <Image src="/assets/gallery6.png" width={210} height={260} />
            <Image src="/assets/gallery7.png" width={210} height={260} />
            <Image src="/assets/gallery8.png" width={210} height={260} />
            <Image src="/assets/gallery9.png" width={210} height={260} />
            <Image src="/assets/gallery10.png" width={210} height={260} />
          </div>
        </div>
        <div className="flex flex-row w-[85%] mx-[7.5%]">
          <div className=" flex flex-row justify-between w-[150px] my-12">
            <h3 className="text-lg text-black my-2"> 01 </h3>
            <h3 className="text-lg text-gray-300 my-2"> / </h3>
            <h3 className="text-lg text-gray-300 my-2"> 05 </h3>
          </div>
          <div className="flex flex-row justify-between mx-5 w-[100px] my-12">
            <button className="border p-2 border-gray-300"><Image src="/assets/flechai.png" width={20} height={20} /></button>
            <button className="border p-2 bg-gray-50 border-gray-300"><Image src="/assets/flechad.png" width={20} height={20} /></button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}