'use client';
import React, {use, useRef} from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import MovingCursor from './MovingCursor';
import AnimatedTextBlack from './AnimatedTextBlack';


export default function Testimonials() {
  
  const animatedTextRef = useRef(null);
    

  return (
    <>
       <section className="padding bg-light2">
            <div className="container">
                <AnimatedTextBlack text1="Find your best design into us." text2="We guarantee next success is yours!" ref={animatedTextRef} /> 
            </div>
            <div id='SwiperSlider'>
                <MovingCursor title="View Next" Id="SwiperSlider" ballId="SwiperBall" />

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,    
                    }}  
                    modules={[Autoplay, Pagination]}
                    breakpoints={{
                       640: {
                        slidesPerView: 1, // 1 slide per view on small screens
                        },
                       768: {
                        slidesPerView: 2, // 2 slides per view on medium screens
                        },
                        1024: {
                        slidesPerView: 3, // 3 slides per view on large screens
                        },
                        1200: {
                         slidesPerView: 4,  // 4 slides per view on very large screens   
                        },
                    }}
                    className="mySwiper "
                    
                    >
                        <SwiperSlide>
                            <div className="testimonial-slide border-right-1">
                            
                            <div className='d-flex flex-column align-items-center'>
                                    <h1 className="h1 text-2">
                                        4.9
                                    </h1>
                                    <div className=''>
                                        <img src="/static/images/star.webp" width={30} alt="" />
                                        <img src="/static/images/star.webp" width={30} alt="" />
                                        <img src="/static/images/star.webp" width={30} alt="" />
                                        <img src="/static/images/star.webp" width={30} alt="" />
                                        <img src="/static/images/star.webp" width={30} alt="" />
                                    </div>
                                    <h6 className='mt-3 text-2'>
                                        200+ reviews
                                    </h6>
                            </div>

                            <div className=''>
                                    <img src="/static/images/fiverr.webp"  className='img-fluid mx-2' width={80} alt="" />
                                    <img src="/static/images/upwork.webp"  className='img-fluid mx-2' width={80} alt="" />
                                    <img src="/static/images/clutch.webp"  className='img-fluid mx-2' width={80} alt="" />
                            </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-slide-review border-right-1">
                                <h4 className="fw-normal text-2">
                                    kodezi
                                </h4>

                                <p className='fs-3 fw-bold text-2'>
                                    “Wavespace very 
                                    <span className='fw-bold text-black'> reliable </span>
                                    at all times and we have enjoyed working & designs are <span className="fw-bold text-black">
                                        truly impressive
                                    </span>"
                                </p>

                                <div className='d-flex'>
                                    <div>
                                        <img src="/static/images/c-1.webp" alt="" width={60} className="img-fluid rounded-circle" />
                                    </div>
                                    <div className='mx-2'>
                                        <h4>Israqh Khan</h4>
                                        <p className='text-2'>CEO</p>
                                    </div>  
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-slide-review border-right-1">
                                <h4 className="fw-normal text-2">
                                    kodezi
                                </h4>

                                <p className='fs-3 fw-bold text-2'>
                                    “Wavespace very 
                                    <span className='fw-bold text-black'> reliable </span>
                                    at all times and we have enjoyed working & designs are <span className="fw-bold text-black">
                                        truly impressive
                                    </span>"
                                </p>

                                <div className='d-flex'>
                                    <div>
                                        <img src="/static/images/c-1.webp" alt="" width={60} className="img-fluid rounded-circle" />
                                    </div>
                                    <div className='mx-2'>
                                        <h4>Israqh Khan</h4>
                                        <p className='text-2'>CEO</p>
                                    </div>  
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-slide-review border-right-1">
                                <h4 className="fw-normal text-2">
                                    kodezi
                                </h4>

                                <p className='fs-3 fw-bold text-2'>
                                    “Wavespace very 
                                    <span className='fw-bold text-black'> reliable </span>
                                    at all times and we have enjoyed working & designs are <span className="fw-bold text-black">
                                        truly impressive
                                    </span>"
                                </p>

                                <div className='d-flex'>
                                    <div>
                                        <img src="/static/images/c-1.webp" alt="" width={60} className="img-fluid rounded-circle" />
                                    </div>
                                    <div className='mx-2'>
                                        <h4>Israqh Khan</h4>
                                        <p className='text-2'>CEO</p>
                                    </div>  
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-slide-review border-right-1">
                                <h4 className="fw-normal text-2">
                                    kodezi
                                </h4>

                                <p className='fs-3 fw-bold text-2'>
                                    “Wavespace very 
                                    <span className='fw-bold text-black'> reliable </span>
                                    at all times and we have enjoyed working & designs are <span className="fw-bold text-black">
                                        truly impressive
                                    </span>"
                                </p>

                                <div className='d-flex'>
                                    <div>
                                        <img src="/static/images/c-1.webp" alt="" width={60} className="img-fluid rounded-circle" />
                                    </div>
                                    <div className='mx-2'>
                                        <h4>Israqh Khan</h4>
                                        <p className='text-2'>CEO</p>
                                    </div>  
                                </div>

                            </div>
                        </SwiperSlide>
                    
                    
                </Swiper>
                </div>

        </section>
    </>
  )
}
