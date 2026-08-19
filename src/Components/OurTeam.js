import React, {useState, useRef} from 'react'
import AnimatedText from './AnimatedText'
import Slider from 'react-slick'


export default function OurTeam(props) {
  
    const animatedTextRef = useRef(null);

    

     const settings_two = {
            dots: false,
            infinite: true,
            vertical: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,   // pause duration in ms
            speed:5000,
            arrows: false,
            cssEase: 'linear',
            pauseOnHover: false,
            responsive: [
                {
                breakpoint: 1200, // For screens smaller than 1200px
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 992, // For screens smaller than 992px
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 576, // For screens smaller than 576px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 400, // For very small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        };
  
return (
    <>
         <section className="padding">
             {props.heading_text && (<div className="container">
                 <div className='d-flex align-items-end justify-content-between flex-wrap'>
                    <AnimatedText text1="From Bangladesh - USA, your vision meets" text2="our creative team's innovation!" ref={animatedTextRef} />    

                    <div className='d-sm-flex d-none'>
                    <a href='' className='btn-header'>
                        <span className='btn-text'>Meet Our Team</span>
                        <div className='bp_icon-wrap mx-2'>
                            <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10}></img>
                            <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10}></img>
                        </div>
                        <div className="bg-header-black">

                        </div>
                    </a>
                   </div>
                </div>
                
              

            </div>)
            }

             <div className="mt-5 pt-5">
                 <Slider {...settings_two}>
                        <div className='my-auto team-slide'>
                            <img src="/static/images/t1.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t2.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t3.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t4.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t5.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t6.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t7.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t8.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t9.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t10.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t11.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t12.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t13.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t14.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto team-slide'>
                            <img src="/static/images/t15.webp" alt="" className="img-fluid"></img>
                        </div>
                    
              </Slider>
             </div>
        </section> 
    </>
  )
}
