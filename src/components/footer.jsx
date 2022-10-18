import { FaDribbbleSquare,FaFacebookF,FaInstagramSquare,FaTwitter } from "react-icons/fa";


const Footer = () => {
    return ( 
        <>
        <div className="bg- -900 text-white md:grid lg:grid-cols-3 gap-8 mx-auto md:items-center sm:px-12 px-4 bg-gray-900 py-7 ">
        <div className="">
            <h1 className="w-full text-3xl font-bold text-gray-500 ">Tanga Food</h1>
                    <p className="py-4">
                    to move your head down and then up, sometimes several times, especially to show agreement, approval,
                    or greeting, or to show something by doing this:
                    </p>
                    
                    </div>
                    <div className="justify-between md:w-[75%] my-6 px-20 ">
                        <span className="flex cursor-pointer py-2 "><FaDribbbleSquare size={25} className="mx-2 text-gray-500"/>Dribble</span>
                        <span className="flex cursor-pointer py-2 "><FaFacebookF size={25} className="mx-2 text-gray-500"/>FaceBook</span>
                        <span className="flex cursor-pointer py-2 "><FaInstagramSquare size={25} className="mx-2 text-gray-500"/>Instagram</span>
                        <span className="flex cursor-pointer py-2 "><FaTwitter size={25} className="mx-2 text-gray-500"/>Twitter</span>
                    </div>
        <div className="justify-between  px-36 text-gray-500 ">
            <ul className="font-medium ">
            <li className="py-2 hover:text-white "><a href="#home">Home</a></li>
            <li className="py-2 hover:text-white "><a href="#about">About</a></li>
            <li className="py-2 hover:text-white "><a href="#menu">The Table</a></li>
            <li className="py-2 hover:text-white "><a href="#awards">Donate</a></li>
            <li className="py-2 hover:text-white "><a href="#contact">Contact</a></li>
        </ul>
     </div>
        </div>
       
        </>
     );
}
 
export default Footer;