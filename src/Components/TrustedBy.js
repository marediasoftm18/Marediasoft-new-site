'use client';


import React from 'react'
import Slider from 'react-slick';

import {useEffect, useState} from 'react'

import TextSlider from './Textslider';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function TrustedBy() {



  const settings = {
        dots: false,
        infinite: true,
        vertical: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,   // pause duration in ms
        speed:3000,
        arrows: false,
        cssEase: 'linear',
        pauseOnHover: false,
        centerMode: false,
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
                <h3 className='text-center'>Trusted by 500+ global companies</h3>
                <div className='mt-5'>
                    <Slider {...settings}>
                        <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/1.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/2.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/3.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/4.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/5.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/6.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/7.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/8.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/9.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/10.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/11.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/12.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/13.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/14.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/15.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/16.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto logo-slide'>
                            <img src="/static/images/logos/17.webp" alt="" className="img-fluid"></img>
                        </div>
                    </Slider>

                </div>
    </>
  )
}
