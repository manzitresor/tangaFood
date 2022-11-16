// import './home.css'
import {Link} from "react-router-dom"

const Home = () => {
    return ( 
        <>
{/* 
               <div className="relative home" id="home">
               
                <div className="contanier">
                    <div className="row">
                        <h1>Wast Less,Feed More</h1>
                        <p>Tanga's technology allows businesses to safely donate their excess food, 
                            access enhanced tax deductions, and receive powerful data to inform food purchasing decisions.</p>
                            <div className="btn hover:bg-gray-200">
                            <Link to="/login"><button className="p-btn ">Donate</button></Link> 
                            </div>
                    </div>
                </div>
                </div>  */}

                <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[32rem] relative ">
                    <div className="headings text-white flex flex-col items-start justify-center h-[100%] ">
                        <span className="text-[3rem]">
                       <b>Wast Less,Feed More</b>  
                        </span>
                        <span className="text-[17px] text-[#525D6E] w-96 py-2"> 
                            Tanga's technology allows businesses to safely donate their excess food, 
                            access enhanced tax deductions, and receive powerful data to inform food purchasing decisions.  
                        </span>
                        <div className="bg-yellow-500 text-[32px] px-4 my-6 rounded-lg cursor-pointer hover:bg-green-700 h-">
                            <Link to="/login"><button className="p-btn ">Donate</button></Link> 
                            </div>
                    </div>
                    <div className="images relative w-[50%]">
                    <img src="./images/istockphoto-1227498840-170667a.jpg" alt=""></img>
                    </div>
                </div>
                     
        </>
     );
}
 
export default Home;