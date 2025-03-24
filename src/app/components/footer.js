import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <footer className="bg-black text-white flex flex-col mt-8">
                <div className="flex flex-row">
                <div className="w-[20%] px-12 mt-8">
                    <h1>LOGO</h1>
                </div>
                <div className="w-[25%] px-12 flex flex-col mt-8">
                    <h1 className="mb-8"><strong>Information</strong></h1>
                    <a className="my-3">Main</a>
                    <a className="my-3">Gallery</a>
                    <a className="my-3">Projects</a>
                    <a className="my-3">Certifications</a>
                    <a className="my-3">Contacts</a>
                </div>
                <div className="w-[25%] px-12 flex flex-col mt-8">
                    <h1><strong>Contacts</strong></h1>
                    <div className="flex flex-row my-8">
                        <Image className="h-[20px]" src="/assets/location.png" width={20} height={2} />
                        <p className="ml-2">1234 Sample Street
                            Austin Texas 78704</p>
                    </div>
                    <div className="flex flex-row my-8">
                        <Image className="h-[20px]" src="/assets/phone.png" width={20} height={4} />
                        <p className="ml-2">512.333.2222</p>
                    </div>
                    <div className="flex flex-row my-8">
                        <Image className="h-[18px]" src="/assets/email.png" width={20} height={4} />
                        <p className="ml-2">sampleemail@gmail.com</p>
                    </div>
                </div>
                <div className="w-[35%] px-12 flex flex-col mt-8">
                    <h1><strong>Information</strong></h1>
                    <div className="flex flex-row mt-8">
                        <Image className="mx-4" src="/assets/fb.png" width={10} height={10} />
                        <Image className="mx-4" src="/assets/tw.png" width={10} height={10} />
                        <Image className="mx-4" src="/assets/lk.png" width={10} height={10} />
                        <Image className="mx-4" src="/assets/pt.png" width={10} height={10} />
                    </div>
                </div>
                
                </div>
                <div className="h-12 justify-center items-center  flex-col">
                <hr className="border-gray-50 w-[90%] mx-[5%]"></hr>
                <h1 className="text-gray-50 text-center mt-2 font-thin">© 2021 All Rights Reserved</h1>
                </div>
            </footer>
        </div>
    )
}