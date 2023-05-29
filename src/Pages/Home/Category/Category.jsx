import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <div>
                <SectionTitle
                heading={"ORDER ONLINE"}
                subHeading={"---From 11:00am to 10:00pm---"}
                >

                </SectionTitle>
            </div>
            <div className="mt-12 max-w-screen-lg mx-auto mb-20 ">
             <Swiper
             
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >


        <SwiperSlide>
            <img src={img1} alt="" />
            <h1 className="uppercase text-white text-center text-3xl  -mt-20">Salads</h1>


       <h1 className="mt-24">
       
       </h1>
       

        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h1 className="uppercase text-white text-center text-3xl  -mt-20">Pizzas</h1>
            </SwiperSlide>

        <SwiperSlide>
        <img src={img3} alt="" />
        <h1 className="uppercase text-white text-center text-3xl  -mt-20">Soups</h1>
        </SwiperSlide>

        <SwiperSlide>
        <img src={img4} alt="" />
        <h1 className="uppercase text-white text-center text-3xl  -mt-20">Desserts</h1>
            </SwiperSlide>
            
        <SwiperSlide>
        <img src={img5} alt="" />
        <h1 className="uppercase text-white text-center text-3xl  -mt-20">Salads</h1>
            </SwiperSlide>
      
      </Swiper> 
        </div>
        </section>
    );
};

export default Category;