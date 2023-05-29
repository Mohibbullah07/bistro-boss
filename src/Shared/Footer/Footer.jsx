import moment from "moment/moment";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
         <div className="grid sm:grid-cols-1 md:grid-cols-2 text-white text-center">
            <div className="bg-[#1F2937] p-20">
            <h1 className="pb-6">CONTRACT US</h1>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+8801580701563</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
            </div>

            <div className="bg-[#111827] p-20">
            <h1 className="pb-6">Follow US</h1>
            <p className="pb-8">Join us on social media</p>
            <div className="flex justify-center gap-5">
            <a className="" href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
            <a href="https://www.youtube.com/@ProgrammingHero"><FaYoutube></FaYoutube></a>
            <a><FaLinkedin></FaLinkedin></a>
            </div>
          
            </div>
           
       

         </div>
         <div className="w-full bg-[#151515] text-white text-center">
             <p> Copyright © <span> {moment().format('YYYY')}</span> - All right reserved by BISTRO BOSS Ltd .</p>
             <p>
           
        
             </p>
        </div>
        </footer>
    );
};

export default Footer;