import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import '../CSS/Modal.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
export default function CarouselImg() {
  return (
<div id='carousel-div' className='my-5 bg-body-tertiary carousel-div' >
<Swiper modules={[Autoplay, Pagination]} className="mySwiper my-5" slidesPerView={1}
        spaceBetween={30} autoplay={{delay:2000, disableOnInteraction:false}} pagination={{clickable: true,}}
      
        
        >
           <SwiperSlide> <img className='bg-body-tertiary' style={{objectFit:"contain"}} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-restaurant-discount-offer-facebook-shop-design-template-270fd323d116c0f750b302484d1c4eaf_screen.jpg?ts=1591100702" alt="" /> </SwiperSlide>
           <SwiperSlide> <img className='bg-body-tertiary' style={{objectFit:"contain"}} src="https://blog.saginfotech.com/wp-content/uploads/2017/08/buy-one-get-one-stop.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img className='bg-body-tertiary' style={{objectFit:"contain"}} src="https://dash.railrestro.com/images/RR_banner_1612440144.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img className='bg-body-tertiary' style={{objectFit:"contain"}} src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide><img className='bg-body-tertiary' style={{objectFit:"contain"}} src="https://www.dineout.co.in/blog/wp-content/uploads/2018/10/WhatsApp-Image-2018-10-18-at-8.06.23-PM.jpeg" alt="" /> </SwiperSlide>
        
        <SwiperSlide> <img className='bg-body-tertiary' style={{objectFit:"contain"}} src="https://i0.wp.com/ecomeye.com/wp-content/uploads/2021/08/freshmenu.jpg?fit=512%2C265&ssl=1" alt="" /> </SwiperSlide>
       
        
      </Swiper>
</div>
    
  )
}
