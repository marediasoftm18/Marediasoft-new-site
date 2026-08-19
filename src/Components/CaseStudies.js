"use client";  

import React,{useRef} from 'react'
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contactform from './Contactform';
import Blacksection from './Blacksection';
import SubscriptionServices from './SubscriptionServices';

export default function CaseStudies() {
  
    
  return (
    <>
        <Portfolio/>
        <Blacksection/>
        <Testimonials/>
        <SubscriptionServices/>
        <Contactform/>
    </>
  )
}
