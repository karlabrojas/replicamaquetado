import Image from "next/image";
import Nav from "../components/nav"
import Footer from "../components/footer";
import Link from "next/link";
export default function Projects() {
  return (
    <div>
      <Nav />
      <main>
        <div className="flex flex-col w-[85%] mx-[7.5%] mt-8 ">
          <h1 className="text-6xl font-thin text-gray-300 my-2">Our</h1>
          <h1 className="text-5xl my-2"><strong>Projects</strong></h1>
          <hr className="border-gray-200"></hr>
        </div>
        <div className="w-[85%] mx-[7.5%] mt-8" >
          <div className=" flex flex-row bg-gray-50 mt-8">
            <Image src="/assets/project1.png" width={670} height={435} />
            <div className="w-[40%] flex flex-col p-12">
              <h1 className="text-5xl text-gray-300">Sample Project</h1>
              <p className="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="flex flex-row w-[250px] bg-white h-[70px] items-center mt-18"><Link href="/sample-project" className="mx-4">VIEW MORE</Link> <Image src="/assets/right-arrow.png" width={20} height={20} /></button>
            </div>
          </div>
          <div className=" flex flex-row bg-gray-50 mt-8">
            <Image src="/assets/project2.png" width={670} height={435} />
            <div className="w-[40%] flex flex-col p-12">
              <h1 className="text-5xl text-gray-300">Sample Project 2</h1>
              <p className="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="flex flex-row w-[250px] bg-white h-[70px] items-center mt-18"><Link href="/sample-project" className="mx-4">VIEW MORE</Link> <Image src="/assets/right-arrow.png" width={20} height={20} /></button>
            </div>
          </div>
          <div className=" flex flex-row bg-gray-50 mt-8">
            <Image src="/assets/project3.png" width={670} height={435} />
            <div className="w-[40%] flex flex-col p-12">
              <h1 className="text-5xl text-gray-300">Sample Project 3</h1>
              <p className="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <button className="flex flex-row w-[250px] bg-white h-[70px] items-center mt-18"><Link href="/sample-project" className="mx-4">VIEW MORE</Link> <Image src="/assets/right-arrow.png" width={20} height={20} /></button>
            </div>
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
      </main >
      <Footer />
    </div >
  )
}