import Image from "next/image";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <div className="flex flex-row mt-12 w-[85%] mx-[7.5%] ">
          <div className="w-1/3 pl-12 flex justify-end flex-col h-[650px]">
            <h1 className="text-6xl font-thin text-gray-400 my-2">PROJECT</h1>
            <h1 className="text-5xl my-2"><strong>Lorum</strong></h1>
            <div className="flex flex-row justify-between w-[100px] my-12">
              <button className="border p-2 border-gray-300"><Image src="/assets/flechai.png" alt="flecha izquierda" width={20} height={20} /></button>
              <button className="border p-2 bg-gray-50 border-gray-300"><Image src="/assets/flechad.png"  alt="flecha derecha"  width={20} height={20} /></button>
            </div>
            <div className="flex flex-row w-[120px] justify-between">
              <h3 className="text-lg text-gray-300 my-4"> 01 </h3>
              <h3 className="text-lg text-gray-300 my-4"> / </h3>
              <h3 className="text-lg text-gray-300 my-4"> 02 </h3>
            </div>
          </div>
          <div className="w-[70%] ml-40 bg-gray-200">
            <Image src="/assets/image1.png" alt="image1" width={770} height={829} />
            <button className="flex flex-row w-[250px] bg-white h-[70px] items-center mt-18 absolute top-190"><h3 className="mx-4">VIEW PROJECT</h3> <Image src="/assets/flechad.png" width={20} height={20} /></button>
          </div>
        </div>
        <div className="bg-gray-50 m-12 w-[85%] flex flex-row mx-[7.5%]">
          <div className="flex flex-col w-[35%]  pl-20 pr-8 pt-8">
            <Image src="/assets/image2.png" alt="image2"  width={270} height={265} />
            <Image className="absolute top-300" src="/assets/image3.png"  alt="image3"  width={270} height={140} />
          </div>
          <div className="  flex mr-8 justify-center py-12 w-[25%]">
            <Image src="/assets/image4.png"  alt="image4"  width={270} height={345} />
          </div>
          <div className="w-1/3 py-8">
            <h1 className="text-5xl text-gray-300">About</h1>
            <p className="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className="flex flex-row w-[250px] bg-white h-[70px] items-center mt-18"><h3 className="mx-4">READ MORE</h3> <Image src="/assets/flechad.png" width={20} height={20} /></button>
          </div>
        </div>
        <div className="flex flex-col w-[85%] mx-[7.5%] mt-24">
          <h1 className="text-5xl text-gray-300">Main Focus/Mission Statement</h1>
          <div className="flex flex-row  mt-8 w-full justify-between">
            <div className="flex flex-row w-[30%] mt-2">
              <h1 className="text-9xl text-gray-200 mr-8"><strong>1</strong></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
            </div>
            <div className="flex flex-row w-[50%] mt-2">
              <h1 className="text-9xl text-gray-200 mr-8"><strong>2</strong></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[85%] mx-[7.5%] mt-12">
          <h1 className="text-5xl text-gray-300">Our Projects</h1>
          <div className="flex flex-row justify-between mt-8">
            <div className="relative">
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-8">
                <h1 className="text-white text-6xl"><strong>Sample</strong></h1>
                <h1 className="text-white text-6xl"><strong>Project</strong></h1>
                <Link className="flex flex-row items-center mt-4 text-white text-[15px]" href="/sample-project">  VIEW MORE
                  <Image className="ml-2"  alt="flecha derecha blanca"  src="/assets/flechadb.png" width={25} height={25} />
                </Link>
              </div>
              <Image src="/assets/img5.png"  alt="img 5"  width={570} height={225} />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-8">
                <h1 className="text-white text-6xl"><strong>Sample</strong></h1>
                <h1 className="text-white text-6xl"><strong>Project</strong></h1>
                <Link className="flex flex-row items-center mt-4 text-white text-[15px]" href="/sample-project">  VIEW MORE
                  <Image className="ml-2"  alt="flecha derecha blanca" src="/assets/flechadb.png" width={25} height={25} />
                </Link>
              </div>
              <Image src="/assets/img1.png"   alt="img1"  width={570} height={225} />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-8">
            <div className="relative">
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-8">
                <h1 className="text-white text-6xl"><strong>Sample</strong></h1>
                <h1 className="text-white text-6xl"><strong>Project</strong></h1>
                <Link className="flex flex-row items-center mt-4 text-white text-[15px]" href="/sample-project">  VIEW MORE
                  <Image className="ml-2" src="/assets/flechadb.png" width={25} height={25} />
                </Link>
              </div>
              <Image src='/assets/img4.png'  alt="image4" width={270} height={225} />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-8">
                <h1 className="text-white text-6xl"><strong>Sample</strong></h1>
                <h1 className="text-white text-6xl"><strong>Project</strong></h1>
                <Link className="flex flex-row items-center mt-4 text-white text-[15px]" href="/sample-project">  VIEW MORE
                  <Image className="ml-2" src="/assets/flechadb.png" width={25} height={25} />
                </Link>
              </div>
              <Image src='/assets/img3.png' alt="img3"  width={470} height={225} />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-8">
                <h1 className="text-white text-6xl"><strong>Sample</strong></h1>
                <h1 className="text-white text-6xl"><strong>Project</strong></h1>
                <Link className="flex flex-row items-center mt-4 text-white text-[15px]" href="/sample-project">  VIEW MORE
                  <Image className="ml-2" src="/assets/flechadb.png" alt="flecha blanca 1" width={25} height={25} />
                </Link>
              </div>
              <Image src='/assets/img2.png'  alt="image2"  width={370} height={225} />
            </div>
          </div>
          <div className="flex justify-end">
            <Link href="/projectss"><button className="flex flex-row w-[250px] bg-black h-[70px] items-center mt-18"><h3 className="mx-4 text-white">ALL PROJECTS</h3> <Image src="/assets/flechadb.png" width={50} height={20} /></button></Link>
          </div>
        </div>
        <div className="flex flex-col w-[85%] m-[7.5%] ">
          <h1 className="text-5xl text-gray-300">Contact Us</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-[38%]">
              <input className=" bg-gray-200 p-2 my-3" type="text" placeholder="Name" />
              <input className=" bg-gray-200 p-2 my-3" type="text" placeholder="Phone Number *" />
              <input className=" bg-gray-200 p-2 my-3" type="text" placeholder="E-mail *" />
              <input className=" bg-gray-200 p-2 my-3" type="text" placeholder="Interested In" />
              <div className="h-[105px] bg-gray-200 p-2 my-2">
                <input
                  type="text"
                  placeholder="Message *"
                />
              </div>
            </div>
            <div >
              <Image src='/assets/img6.png'  alt="img6"  width={749} height={369} />
            </div>
          </div>
          <div>
            <button className="flex flex-row w-[250px] bg-black h-[70px] items-center mt-18"><h3 className="mx-4 text-white">SEND EMAIL</h3> <Image src="/assets/flechadb.png" width={50} height={20} /></button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
