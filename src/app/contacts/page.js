import Nav from "../components/nav"
import Footer from "../components/footer";

export default function Contacts() {
  return (
    <div>
      <Nav />
      <main>
        <div className="flex flex-row w-[85%] mx-[7.5%] mt-8 ">
          <div className="flex flex-col w-1/2">
            <div className="flex flex-col">
              <h1 className="text-6xl font-thin text-gray-300 my-2">Contact</h1>
              <h1 className="text-5xl my-2"><strong>Information</strong></h1>
            </div>
            <div className="flex flex-col">
              <h1><strong>Company Name</strong></h1>
              <p>1234 Sample Street Austin Texas 76401</p>
              <h1 className="my-8"><strong>512.333.2222</strong></h1>
              <p>sampleemail@gmail.com</p>
            </div>
            <div>
              <button className="flex flex-row w-[250px] bg-black h-[70px] justify-center items-center mt-18"><h3 className="mx-4 text-white text-center">CONTACT US</h3></button>
            </div>
          </div>
          <div className="w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123456.123456789!2d-123.1234567!3d45.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12345678!2sPlace%20Name!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}