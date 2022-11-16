import {FaPhoneAlt,FaMapMarkerAlt} from "react-icons/fa";
import { FaDribbbleSquare,FaFacebookF,FaInstagramSquare,FaTwitter } from "react-icons/fa";
import { BiChat } from "react-icons/bi";
const Contact = () => {
    return ( 
        <>
        <div className="flex w-full min-h-screen  justify-center items-center">
            <div className= "flex flex-col space-y-6 md:flex-row md:space-x-6 space-y-0 bg-cyan-700  w-full max-w-4xl p-8  rounded-xl shadwo-lg text-white">
             <div className="flex flex-col space-y-8 justify-between">
                <div className="">
                <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                <p className="pt-2 text-cyan-100">For media enquiries, please contact our Media Office using the contact details below.</p>
                </div>
                {/* contact icons */}
                <div className="inline-flex space-x-2 items-center">
                <FaPhoneAlt className="text-teal-300 text-xl"/>
                <span >+250 788 363 207</span>
                </div>

                <div className="inline-flex space-x-2 items-center">
                <BiChat className="text-teal-300 text-xl"/> 
                <span>tangaFood@info.org</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                <FaMapMarkerAlt className="text-teal-300 text-xl"/>
                <span>KK 19 Ave </span>
                </div> 
                <div className="flex">
             <FaDribbbleSquare size={20} className=""/>
             <FaFacebookF size={20} className=""/>
             <FaInstagramSquare size={20} className=""/>
             <FaTwitter size={20} className=""/>
             </div>
             </div>    
             <div>
                <div className="bg-white  rounded-xl  shadow-lg p-8 md:w-80">
                    <form className="flex flex-col  space-y-4">
                        <div>
                        <label className="text-sm text-gray-600">Name</label>
                        <input type="text" placeholder="Enter your name" className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 focus:text-black"/>  
                        </div>
                        <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input type="email" placeholder="Enter your Email" className="ring-1 mt-2 ring-gray-300  w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 focus:text-black"/>  
                        <label className="text-sm text-gray-600">Message</label>
                        <textarea placeholder="Message......" row="4" className="ring-1 mt-2
                         ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 focus:text-black"/>
                        </div>
                        <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase">Send Your Message</button>
                    </form>
                </div>
             </div>
            </div>
        </div>
        </>
     );
}
 
export default Contact;