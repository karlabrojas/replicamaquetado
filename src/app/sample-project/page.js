import Image from "next/image";
import Nav from "../components/nav"
import Footer from "../components/footer";

export default function SampleProjects() {
    return (
        <div>
            <Nav />
            <main>
                <div className="flex flex-col w-[85%] mx-[7.5%] mt-8 ">
                    <h1 className="text-6xl font-thin text-gray-300 my-2">Sample</h1>
                    <h1 className="text-5xl my-2"><strong>Project 1</strong></h1>
                    <hr className="border-gray-200"></hr>
                </div>
                <div className="flex flex-col w-[85%] mx-[7.5%] mt-8">
                    <div>
                        <Image src="/assets/sample1.png" width={1270} height={435} />
                    </div>
                    <div className="mt-8 flex flex-row">
                        <Image src="/assets/sample2.png" width={419} height={428} />
                        <div className="ml-12">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Image src="/assets/sample3.png" width={1270} height={435} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}