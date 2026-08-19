'use client';

import AnimatedText from "./AnimatedText";
import TrustedBy from "./TrustedBy";
import StickyCards from "./StickyCards";
import React, {useEffect, useState} from 'react'
import Slider from 'react-slick';
import SubscriptionServices from "./SubscriptionServices";
import GlassAnimText from "./GlassAnimText";
import Testimonials from "./Testimonials";
import OurTeam from './OurTeam';
import ProjectInMind from "./ProjectInMind";
import FAQs from "./FAQs";
import Contactform from "./Contactform";


export default function Pricing() {

    const [packages, setPackages] = useState('quarter');
    
    const changePackage = (id) => {
        setPackages(id);
    };

  

    const settings_two = {
        rtl: false, 
        centerMode:true,
        dots: false,
        centerPadding: '20px',
        infinite: true,
        vertical: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,   // pause duration in ms
        speed:2500,
        arrows: false,
        cssEase: 'linear',
        pauseOnHover: false,
        responsive: [
            {
            breakpoint: 1200, // For screens smaller than 1200px
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 992, // For screens smaller than 992px
            settings: {
                slidesToShow: 3,
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


        const settings_three = {
        rtl: true,    
        centerMode:true,
        dots: false,
        infinite: true,
        centerPadding: '20px',
        vertical: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,   // pause duration in ms
        speed:2500,
        arrows: false,
        cssEase: 'linear',
        pauseOnHover: false,
        responsive: [
            {
            breakpoint: 1200, // For screens smaller than 1200px
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 992, // For screens smaller than 992px
            settings: {
                slidesToShow: 3,
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
        <section className="banner-padding bg-black">
            <div className="container ">
                <div className='clutch-rating mx-auto'>
                    <img src="/static/images/clutch-rating.webp" alt="" className='img-fluid me-1' /> <span className='text-white'>5.0</span>
                </div>
                <h1 className='text-center mt-4 h1 text-white'>
                    Your on-demand design team on call,<br></br> for one flat monthly price
                </h1>
                <p className="mt-2 text-center fs-5 text-white">
                    All-in-one product design plan. No hourly rates, no hidden fees, just fast,<br /> expert work and unlimited requests for one fixed monthly price.
                </p>

                <div className="">
                    
                    <div className="d-flex justify-content-center">
                        <div className='price-filter-buttons'>
                            <div>
                                <button className={`price-btn-1 ${packages === 'monthly' ? 'active-filter' : ''}`} onClick={() => changePackage('monthly')}>
                                    Monthly
                                </button>
                            </div>
                       
                           <div>
                                <button className={`price-btn-1 ${packages === 'quarter' ? 'active-filter' : ''}`} onClick={() => changePackage('quarter')}>
                                    Quarterly <span className='bg-secondary fs-10 price-badge mx-1'>-10%</span>
                                </button>
                            </div>
                        

                            <div>
                                <button className={`price-btn-1 ${packages === 'yearly' ? 'active-filter' : ''}`} onClick={() => changePackage('yearly')}> 
                                    Yearly <span className='bg-secondary fs-10 price-badge mx-1'>2 Months Free</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="mx-2 mt-3 mb-5">
                        <div className='d-flex justify-content-center align-items-center'>
                            <button className="button-switch">
                                <span className='dollar active-cur'><i className="fa-solid fa-dollar-sign me-1"></i> USD</span> <span className='euro'><i className="fa-solid fa-euro-sign me-1"></i> Euro</span>
                            </button>
                        </div>
                    </div> */}
                </div>
                
                {/* Monthly packages/////////////////////////////////////////  */}
                <div className={`row mt-5 ${packages === 'monthly' ? 'display-on' : 'display-off'}`} id="monthly" >

                    <div className="col-lg-4 mb-lg-0 mb-3">
                        <div className="package">
                            <h4>Standard</h4>

                            <h3 className='fs-2 mb-1 mt-4'>$5,940/quarter</h3>
                            <div className="fs-14 text-gray">Billed every 3 months — cancel anytime</div>

                            <div>

                                 <div className="mt-4 mx-auto">
                                    <a href='' className='btn-header bg-white-btn mx-auto w-100'>
                                        <span className='btn-text'>Get Started today</span>
                                        <div className='bp_icon-wrap mx-2'>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                                        </div>
                                        <div className="bg-header-black bg-yellow">

                                        </div>
                                    </a>
                                </div>
                                <div className='text-center mt-2'>
                                    <a href="" className='book-link'>Book A Call</a>
                                </div>

                            </div>

                            <p className='mt-5'>What’s included</p>

                            <ul className="list-unstyled price-info">
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>40 hours of per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Dedicated design team</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>All design services included
view all</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>2 meetings per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Daily communication Slack + Loom</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Weekly updates and monthly reports</span></li>

                                <div className='border-t my-5'></div>

                                <p className='text-center'><span className='yellow'>3 Openings available </span>
  left this quarter
</p>
                            </ul>
                            
                        </div>

                        
                    </div>

                    <div className="col-lg-4 mb-lg-0 mb-3 ">
                        <div className='highlight position-relative'>
                            <div className="package ">
                                <div className='d-flex justify-content-between'>
                                    <h4>Pro</h4>
                                    <div className="">
                                        <span className='feature-badge'>
                                            Popular
                                        </span>
                                    </div>
                                </div>

                                <h3 className='fs-2 mb-1 mt-4'>$5,940/quarter</h3>
                                <div className="fs-14 text-gray">Billed every 3 months — cancel anytime</div>

                                <div>

                                    <div className="mt-4 mx-auto">
                                        <a href='' className='btn-header bg-yellow-btn w-100' >
                                            <span className='btn-text'>Get Started Today</span>
                                            <div className='bp_icon-wrap mx-2'>
                                                <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                                <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                                            </div>
                                            <div className="bg-header-black bg-white">

                                            </div>
                                        </a>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <a href="" className='book-link'>Book A Call</a>
                                    </div>

                                </div>

                                <p className='mt-5'>What’s included</p>

                                <ul className="list-unstyled price-info">
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>40 hours of per month</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Dedicated design team</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>All design services included
    view all</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>2 meetings per month</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Daily communication Slack + Loom</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Weekly updates and monthly reports</span></li>

                                    <div className='border-t my-5'></div>

                                    <p className='text-center'><span className='yellow'>3 Openings available </span>
    left this quarter
    </p>
                                </ul>
                                
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-4">
                        <div className="package">
                            <div className='d-flex justify-content-between'>
                                <h4>Custom</h4>
                                <div className="">
                                    <span className='feature-badge'>
                                        Unlimited Talent
                                    </span>
                                </div>
                            </div>

                            <h3 className='fs-2 mb-1 mt-4'>$5,940/quarter</h3>
                            <div className="fs-14 text-gray">Billed every 3 months — cancel anytime</div>

                            <div>

                                 <div className="mt-4 mx-auto">
                                    <a href='' className='btn-header bg-white-btn mx-auto w-100'>
                                        <span className='btn-text'>Contact us</span>
                                        <div className='bp_icon-wrap mx-2'>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                                        </div>
                                        <div className="bg-header-black bg-yellow">

                                        </div>
                                    </a>
                                </div>
                                <div className='text-center mt-2'>
                                    <a href="" className='book-link'>Book A Call</a>
                                </div>

                            </div>

                            <p className='mt-5'>What’s included</p>

                            <ul className="list-unstyled price-info">
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>40 hours of per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Dedicated design team</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>All design services included
view all</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>2 meetings per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Daily communication Slack + Loom</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Weekly updates and monthly reports</span></li>

                                <div className='border-t my-5'></div>

                                <p className='text-center'><span className='yellow'>3 Openings available </span>
  left this quarter
</p>
                            </ul>
                            
                        </div>

                        
                    </div>

                </div>

                {/* Quarter packages/////////////////////////////////////////  */}
                <div className={`row ${packages === 'quarter' ? 'display-on' : 'display-off'}`} id="quarter" >

                    <div className="col-lg-4 mb-lg-0 mb-3">
                        <div className="package">
                            <h4>Standard1</h4>

                            <h3 className='fs-2 mb-1 mt-4'>$5,940/quarter</h3>
                            <div className="fs-14 text-gray">Billed every 3 months — cancel anytime</div>

                            <div>

                                 <div className="mt-4 mx-auto">
                                    <a href='' className='btn-header bg-white-btn mx-auto w-100'>
                                        <span className='btn-text'>Get Started today</span>
                                        <div className='bp_icon-wrap mx-2'>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                                        </div>
                                        <div className="bg-header-black bg-yellow">

                                        </div>
                                    </a>
                                </div>
                                <div className='text-center mt-2'>
                                    <a href="" className='book-link'>Book A Call</a>
                                </div>

                            </div>

                            <p className='mt-5'>What’s included</p>

                            <ul className="list-unstyled price-info">
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>40 hours of per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Dedicated design team</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>All design services included
view all</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>2 meetings per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Daily communication Slack + Loom</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Weekly updates and monthly reports</span></li>

                                <div className='border-t my-5'></div>

                                <p className='text-center'><span className='yellow'>3 Openings available </span>
  left this quarter
</p>
                            </ul>
                            
                        </div>

                        
                    </div>

                    <div className="col-lg-4 mb-lg-0 mb-3 ">
                        <div className='highlight position-relative'>
                            <div className="package ">
                                <div className='d-flex justify-content-between'>
                                    <h4>Pro1</h4>
                                    <div className="">
                                        <span className='feature-badge'>
                                            Popular
                                        </span>
                                    </div>
                                </div>

                                <h3 className='fs-2 mb-1 mt-4'>$5,940/quarter</h3>
                                <div className="fs-14 text-gray">Billed every 3 months — cancel anytime</div>

                                <div>

                                    <div className="mt-4 mx-auto">
                                        <a href='' className='btn-header bg-yellow-btn w-100' >
                                            <span className='btn-text'>Get Started Today</span>
                                            <div className='bp_icon-wrap mx-2'>
                                                <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                                <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                                            </div>
                                            <div className="bg-header-black bg-white">

                                            </div>
                                        </a>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <a href="" className='book-link'>Book A Call</a>
                                    </div>

                                </div>

                                <p className='mt-5'>What’s included</p>

                                <ul className="list-unstyled price-info">
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>40 hours of per month</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Dedicated design team</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>All design services included
    view all</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>2 meetings per month</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Daily communication Slack + Loom</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Weekly updates and monthly reports</span></li>

                                    <div className='border-t my-5'></div>

                                    <p className='text-center'><span className='yellow'>3 Openings available </span>
    left this quarter
    </p>
                                </ul>
                                
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-4">
                        <div className="package">
                            <div className='d-flex justify-content-between'>
                                <h4>Custom1</h4>
                                <div className="">
                                    <span className='feature-badge'>
                                        Unlimited Talent
                                    </span>
                                </div>
                            </div>

                            <h3 className='fs-2 mb-1 mt-4'>$5,940/quarter</h3>
                            <div className="fs-14 text-gray">Billed every 3 months — cancel anytime</div>

                            <div>

                                 <div className="mt-4 mx-auto">
                                    <a href='' className='btn-header bg-white-btn mx-auto w-100'>
                                        <span className='btn-text'>Contact us</span>
                                        <div className='bp_icon-wrap mx-2'>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                                        </div>
                                        <div className="bg-header-black bg-yellow">

                                        </div>
                                    </a>
                                </div>
                                <div className='text-center mt-2'>
                                    <a href="" className='book-link'>Book A Call</a>
                                </div>

                            </div>

                            <p className='mt-5'>What’s included</p>

                            <ul className="list-unstyled price-info">
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>40 hours of per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Dedicated design team</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>All design services included
view all</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>2 meetings per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Daily communication Slack + Loom</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Weekly updates and monthly reports</span></li>

                                <div className='border-t my-5'></div>

                                <p className='text-center'><span className='yellow'>3 Openings available </span>
  left this quarter
</p>
                            </ul>
                            
                        </div>

                        
                    </div>

                </div>


                {/* yearly packages/////////////////////////////////////////  */}
                <div className={`row ${packages === 'yearly' ? 'display-on' : 'display-off'}`} id="yearly" >

                    <div className="col-lg-4 mb-lg-0 mb-3">
                        <div className="package">
                            <h4>Standard2</h4>

                            <h3 className='fs-2 mb-1 mt-4'>$5,940/quarter</h3>
                            <div className="fs-14 text-gray">Billed every 3 months — cancel anytime</div>

                            <div>

                                 <div className="mt-4 mx-auto">
                                    <a href='' className='btn-header bg-white-btn mx-auto w-100'>
                                        <span className='btn-text'>Get Started today</span>
                                        <div className='bp_icon-wrap mx-2'>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                                        </div>
                                        <div className="bg-header-black bg-yellow">

                                        </div>
                                    </a>
                                </div>
                                <div className='text-center mt-2'>
                                    <a href="" className='book-link'>Book A Call</a>
                                </div>

                            </div>

                            <p className='mt-5'>What’s included</p>

                            <ul className="list-unstyled price-info">
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>40 hours of per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Dedicated design team</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>All design services included
view all</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>2 meetings per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Daily communication Slack + Loom</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Weekly updates and monthly reports</span></li>

                                <div className='border-t my-5'></div>

                                <p className='text-center'><span className='yellow'>3 Openings available </span>
  left this quarter
</p>
                            </ul>
                            
                        </div>

                        
                    </div>

                    <div className="col-lg-4 mb-lg-0 mb-3 ">
                        <div className='highlight position-relative'>
                            <div className="package ">
                                <div className='d-flex justify-content-between'>
                                    <h4>Pro2</h4>
                                    <div className="">
                                        <span className='feature-badge'>
                                            Popular
                                        </span>
                                    </div>
                                </div>

                                <h3 className='fs-2 mb-1 mt-4'>$5,940/quarter</h3>
                                <div className="fs-14 text-gray">Billed every 3 months — cancel anytime</div>

                                <div>

                                    <div className="mt-4 mx-auto">
                                        <a href='' className='btn-header bg-yellow-btn w-100' >
                                            <span className='btn-text'>Get Started Today</span>
                                            <div className='bp_icon-wrap mx-2'>
                                                <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                                <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                                            </div>
                                            <div className="bg-header-black bg-white">

                                            </div>
                                        </a>
                                    </div>
                                    <div className='text-center mt-2'>
                                        <a href="" className='book-link'>Book A Call</a>
                                    </div>

                                </div>

                                <p className='mt-5'>What’s included</p>

                                <ul className="list-unstyled price-info">
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>40 hours of per month</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Dedicated design team</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>All design services included
    view all</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>2 meetings per month</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Daily communication Slack + Loom</span></li>
                                    <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Weekly updates and monthly reports</span></li>

                                    <div className='border-t my-5'></div>

                                    <p className='text-center'><span className='yellow'>3 Openings available </span>
    left this quarter
    </p>
                                </ul>
                                
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-4">
                        <div className="package">
                            <div className='d-flex justify-content-between'>
                                <h4>Custom2</h4>
                                <div className="">
                                    <span className='feature-badge'>
                                        Unlimited Talent
                                    </span>
                                </div>
                            </div>

                            <h3 className='fs-2 mb-1 mt-4'>$5,940/quarter</h3>
                            <div className="fs-14 text-gray">Billed every 3 months — cancel anytime</div>

                            <div>

                                 <div className="mt-4 mx-auto">
                                    <a href='' className='btn-header bg-white-btn mx-auto w-100'>
                                        <span className='btn-text'>Contact us</span>
                                        <div className='bp_icon-wrap mx-2'>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                            <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                                        </div>
                                        <div className="bg-header-black bg-yellow">

                                        </div>
                                    </a>
                                </div>
                                <div className='text-center mt-2'>
                                    <a href="" className='book-link'>Book A Call</a>
                                </div>

                            </div>

                            <p className='mt-5'>What’s included</p>

                            <ul className="list-unstyled price-info">
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>40 hours of per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Dedicated design team</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>All design services included
view all</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>2 meetings per month</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Daily communication Slack + Loom</span></li>
                                <li> <img src="/static/images/white-tick.webp" alt="" className='me-2'/> <span className='my-auto'>Weekly updates and monthly reports</span></li>

                                <div className='border-t my-5'></div>

                                <p className='text-center'><span className='yellow'>3 Openings available </span>
  left this quarter
</p>
                            </ul>
                            
                        </div>

                        
                    </div>

                </div>

                <div className="package-bottom">
                    <h3 className="text-white mb-4">Included in all package</h3>
                    <div className="flex-lg-nowrap flex-wrap include-buttons">
                        <button className="include">
                            <i className="fa fa-check me-3" aria-hidden="true"></i>
                            <span>Hours rollover</span>
                        </button>

                        <button className="include">
                            <i className="fa fa-check me-3" aria-hidden="true"></i>
                            <span>Unlimited requests</span>
                        </button>

                         <button className="include">
                            <i className="fa fa-check me-3" aria-hidden="true"></i>
                            <span>Same-day response time</span>
                        </button>

                         <button className="include">
                            <i className="fa fa-check me-3" aria-hidden="true"></i>
                            <span>DVLFSHub
                            </span>
                        </button>

                         <button className="include">
                            <i className="fa fa-check me-3" aria-hidden="true"></i>
                            <span>1 Active request per team member
                            </span>
                        </button>

                    </div>
                </div>

            </div>
        </section> 


        <section className="padding">
            <div className="container">
                <TrustedBy/>
                <AnimatedText text1="Our comprehensive services for" text2="Global businesses" />
            </div>
        </section>
        
        <StickyCards/>

        <section className="padding bg-light2">
            <div className="container">
                <div className="row gx-2 gy-2">

                    <div className="col-md-3">
                        <div className="member-card">
                            <h4>Flat monthly fee</h4>
                            <p className="mb-0">
                                Our pricing remains same each month — no guesswork,
                                no surprises.
                            </p>
                            <video className="video-80" autoPlay muted loop playsInline>
                                <source src="/static/images/videos/video1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="col-md-6 mx-auto">
                       <div className="row member-card align-items-center mx-auto">
                            <div className="col-md-6">
                                <video className="video-80" autoPlay muted loop playsInline>
                                    <source src="/static/images/videos/video2.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-md-6">
                                <h4>Fast turnaround</h4>
                                <p>Our team creates stunning designs tailored to your needs, ready in just a few days.</p>
                            </div>
                       </div>
                    </div>


                    <div className="col-md-3">
                        <div className="member-card">
                            <h4>Flat monthly fee</h4>
                            <p className="mb-0">
                                Our pricing remains same each month — no guesswork,
                                no surprises.
                            </p>
                            <video className="video-80" autoPlay muted loop playsInline>
                                <source src="/static/images/videos/video3.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="col-md-6">
                       <div className="row member-card align-items-center mx-auto">
                            <div className="col-md-6">
                                <video className="video-80" autoPlay muted loop playsInline>
                                    <source src="/static/images/videos/video4.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-md-6">
                                <h4>Full design service</h4>
                                <p>We offer full-service design, covering every aspect to meet all your needs.</p>
                            </div>
                       </div>
                    </div>
                    <div className="col-md-6">
                       <div className="row member-card align-items-center mx-auto">
                            <div className="col-md-6">
                                <h4>No contracts,  no headaches</h4>
                                <p>Top-notch designs without any tricky rules or paperwork.  It simple and straightforward.</p>
                            </div>
                            <div className="col-md-6">
                                <video className="video-80" autoPlay muted loop playsInline>
                                    <source src="/static/images/videos/video5.mp4" type="video/mp4" />
                                </video>
                            </div>
                       </div>
                    </div>

                    <div className="member-card">
                        <div className="text-center mb-5">
                            <img src="/static/images/videos/quotes.webp" alt="" className="img-fluid text-center qoutes" />
                        </div>
                        <h1 className="text-center mb-5">"Transforming visions into top-notch <br></br>digital experiences solutions"</h1>
                        <div className="mx-auto d-flex justify-content-center align-content-center">
                            <div className="me-2">
                                <img src="/static/images/videos/ceo.webp" width={60} alt="" className="img-fluid" />
                            </div>
                            <div className="my-auto">
                                <h6 className="mb-0">Ishraq Khan</h6>
                                <p className="mb-0 fs-14">Founder & CEO @Kodezi</p>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </section>

        <section className="padding">
            <div className="overflow-x-hidden">
                 <Slider {...settings_two}>
                        <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/1.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/2.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/3.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/4.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/5.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/6.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/7.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/8.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/9.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/10.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/11.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/12.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/13.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/14.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/15.webp" alt="" className="img-fluid"></img>
                        </div>
                        
                     
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/19.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/20.webp" alt="" className="img-fluid"></img>
                        </div>
                    
              </Slider>
             </div>

              <div className="overflow-x-hidden">
                 <Slider {...settings_three}>
                        <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/1.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/2.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/3.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/4.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/5.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/6.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/7.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/8.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/9.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/10.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/11.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/12.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/13.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/14.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/15.webp" alt="" className="img-fluid"></img>
                        </div>
                        
                     
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/19.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/20.webp" alt="" className="img-fluid"></img>
                        </div>
                    
              </Slider>
             </div>

             <div className="overflow-x-hidden">
                 <Slider {...settings_two}>
                        <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/1.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/2.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/3.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/4.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/5.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/6.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/7.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/8.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/9.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/10.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/11.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/12.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/13.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/14.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/15.webp" alt="" className="img-fluid"></img>
                        </div>
                        
                     
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/19.webp" alt="" className="img-fluid"></img>
                        </div>
                         <div className='my-auto price-slide'>
                            <img src="/static/images/pricingslider/20.webp" alt="" className="img-fluid"></img>
                        </div>
                    
              </Slider>
             </div>
        </section>


        <SubscriptionServices/>
        
        <GlassAnimText/>
        <Testimonials/>
        <OurTeam heading_text={true}/>
        <FAQs/>
        <ProjectInMind/>
        <Contactform/>
    </>
  )
}
