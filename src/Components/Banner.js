"use client";

import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import TextSlider from './Textslider';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import AnimatedTextBlack from './AnimatedTextBlack';
import AnimatedTextDark from './AnimatedTextDark';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contactform from './Contactform';
import Blacksection from './Blacksection';
import AnimatedText from './AnimatedText';
import MovingCursor from './MovingCursor';
import MovingCursorSmall from './MovingCursorSmall';
import TrustedBy from './TrustedBy';
import StickyCards from './StickyCards';
import GlassAnimText from './GlassAnimText';
import FAQs from './FAQs';
import ProjectInMind from './ProjectInMind';
import OurTeam from './OurTeam';

export default function Banner() {




    const animatedTextRef = useRef(null);



    const lines = [
        { text: 'future unicorns.', className: 'g-1' },
        { text: 'AL/ML solutions.', className: 'g-2' },
        { text: 'SaaS companies.', className: 'g-3' },
        { text: 'startups.', className: 'g-4' },
    ];



    return (



        <>
            <section className='banner-padding'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className='mt-3 mb-3 mt-lg-0 mb-lg-0'>
                                <h1 className='h1'>
                                    Global UI UX design agency digital partner
                                    for <span className='text-slider'>
                                        <TextSlider items={lines} speed={2000} />
                                    </span>

                                </h1>
                            </div>
                            <div className='d-flex mt-3 mb-3 mt-lg-5 mb-lg-0 flex-wrap d-md-flex d-none'>
                                <a href='' className='btn-header'>
                                    <span className='btn-text fs-20'>Book a startegy call</span>
                                    <div className='bp_icon-wrap mx-2'>
                                        <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10}></img>
                                        <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10}></img>
                                    </div>
                                    <div className="bg-header-black">

                                    </div>
                                </a>
                                <a href='' className='btn-header btn-trans mx-2'>
                                    <span className='btn-text fs-20'>Get a custom quote</span>
                                    <div className="bg-header-black">

                                    </div>
                                </a>
                            </div>
                            <div className='d-md-none d-block mt-5'>
                                <a href='' className='btn-header w-sm-50 w-75'>
                                    <span className='btn-text'>Contact us</span>
                                    <div className='bp_icon-wrap mx-2'>
                                        <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10}></img>
                                        <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10}></img>
                                    </div>
                                    <div className="bg-header-black">

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 my-auto mt-lg-auto mt-3 mb-3 mb-lg-0">
                            <h5>
                                We deliver globally UI, UX & web design <br></br> smoothly, without delay, saving your time <br />and money with an efficient process.
                            </h5>
                            <div className="row mt-4">
                                <div className="col-md-6 ">
                                    <div className='d-flex align-items-center'>
                                        <div className='client-imgs d-flex'>
                                            <div className="client-parent">
                                                <img src="/static/images/c-1.webp" alt="" className="img-fluid" />
                                                <div className="c-profile">
                                                    <div className='d-flex justify-content-between align-items-start'>
                                                        <div className=''>
                                                            <h6 className='fw-bold fs-14'>Matt Kabus</h6>
                                                            <p className="mb-0 fs-14">
                                                                CEO & Founder @LifeTales
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <a href="">
                                                                <i className="fa-brands fa-linkedin fs-14"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <span className='short-triangle'>

                                                    </span>
                                                </div>
                                            </div>
                                            <div className="client-parent2">
                                                <img src="/static/images/c-2.webp" alt="" className="img-fluid" />
                                                <div className="c-profile">
                                                    <div className='d-flex justify-content-between align-items-start'>
                                                        <div className=''>
                                                            <h6 className='fw-bold fs-14'>Matt Kabus</h6>
                                                            <p className="mb-0 fs-14">
                                                                CEO & Founder @LifeTales
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <a href="">
                                                                <i className="fa-brands fa-linkedin fs-14"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <span className='short-triangle'>

                                                    </span>
                                                </div>
                                            </div>
                                            <div className="client-parent2">
                                                <img src="/static/images/c-3.webp" alt="" className="img-fluid" />
                                                <div className="c-profile">
                                                    <div className='d-flex justify-content-between align-items-start'>
                                                        <div className=''>
                                                            <h6 className='fw-bold fs-14'>Matt Kabus</h6>
                                                            <p className="mb-0 fs-14">
                                                                CEO & Founder @LifeTales
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <a href="">
                                                                <i className="fa-brands fa-linkedin fs-14"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <span className='short-triangle'>

                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className='fs-9 mb-0 mx-2'>
                                            Loved by 500+<br></br>
                                            Founders
                                        </span>
                                    </div>

                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-3 mb-3">
                    <TrustedBy />
                    <div className="video-section" id="video-sec">
                        <MovingCursor title="Play" Id="video-sec" ballId="movingBall" />
                        <video className="banner-video" autoPlay muted loop playsInline>
                            <source src="/static/images/video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

            </section>



            
            <Portfolio />

            <Blacksection />

            <StickyCards />

<section className='padding'>
                <div className="container">
                    <AnimatedText text1="500+ Founders trusted us. Get return on" text2="Your Investment, multiplied" ref={animatedTextRef} />

                    <div className="row mt-4 mb-5">
                        <div className="col-xl-4">
                            <div className='team-div-md'>
                                <img src="/static/images/cb1.webp" alt="" className="img-fluid" />
                                <div className='mt-3'>
                                    <h5 className='mb-1'>/ Matt Kabus</h5>
                                    <p className="fs-12">
                                        CEO & Founder @LifeTales
                                    </p>
                                    <p className="mt-4">
                                        “Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended”
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 mt-xl-0 mt-4 mx-xl-0 mx-auto">
                            <img src="/static/images/cb2.webp" alt="" className="img-fluid centre-img" />
                            <div className='mt-3'>
                                <h5 className='mb-1'>/ Matt Kabus</h5>
                                <p className="fs-12">
                                    CEO & Founder @LifeTales
                                </p>
                                <p className="mt-4">
                                    “Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended”
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 mt-xl-0 mt-4 mx-xl-0 mx-auto">
                            <div className='team-div-md' style={{ marginLeft: 'auto' }}>
                                <img src="/static/images/cb3.webp" alt="" className="img-fluid" />
                                <div className='mt-3'>
                                    <h5 className='mb-1'>/ Matt Kabus</h5>
                                    <p className="fs-12">
                                        CEO & Founder @LifeTales
                                    </p>
                                    <p className="mt-4">
                                        “Wavespace is a fantastic design team, with a healthy blend of UI and UX skills. Highly recommended”
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <GlassAnimText />



            <Testimonials />

            <OurTeam heading_text={true} />



            <FAQs />

            <ProjectInMind />

            <Contactform />


        </>
    )
}
