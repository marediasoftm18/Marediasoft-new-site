"use client";
import React from 'react'
import TrustedBy from './TrustedBy'
import GlassAnimText from './GlassAnimText';
import Testimonials from './Testimonials';
import Servicebanner from './ServicesComponents/Servicebanner';
import ServiceImageText from './ServicesComponents/ServiceImageText_R';
import ServiceIndustry from './ServicesComponents/ServiceIndustry';
import ServiceDesign from './ServicesComponents/ServiceDesign';
import ServiceStickCards from './ServiceStickCards';

export default function Services() {
  return (
    <>
        <Servicebanner heading1="UI/UX design services" heading2="Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey." qoutes_text="“Every $1 invested in UX can return up to $100 in value”" btn_1_text="Book a free call" btn_2_text="View Services" side_img_url="../static/images/services/1st.png" />
        <section className="py-5">
            <div className="container">
                <TrustedBy/>
            </div>
        </section>

        <ServiceImageText img_url="../static/images/services/2nd.webp" 
        heading="Why Wavespace? We care like co-founders."
        subheading="We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose."
        t_1="User-First, Business-Aligned" p_1="Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose."
        t_2="Strategy meets speed" p_2="We move quickly, but never in the dark. Our approach combines Lean UX techniques and rapid deployment to allow you to test, learn, and scale without sacrificing time and quality."
        t_3="Designed for development, not just looks" p_3="We don't design to impress, we design to convert. That means more signups, stronger retention, and an interface that your users love to use and come back for more."
        t_4="Scalable from day one" p_4="We build scalable systems, reusable components, and adaptable layouts that keep up with your product as it develops, alongside your product's evolution, and your audience grows."
        t_5="Clear design, clear decisions" p_5="Our design process informs clarity between your whole team, from product to engineering. By having simple flows and visual reasoning, everyone is certain of what is being constructed and why."
        left={false}
        />

         <ServiceImageText img_url="../static/images/services/ser2.webp" 
        heading="Why Wavespace? We care like co-founders."
        subheading="We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose."
        t_1="User-First, Business-Aligned" p_1="Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose."
        t_2="Strategy meets speed" p_2="We move quickly, but never in the dark. Our approach combines Lean UX techniques and rapid deployment to allow you to test, learn, and scale without sacrificing time and quality."
        t_3="Designed for development, not just looks" p_3="We don't design to impress, we design to convert. That means more signups, stronger retention, and an interface that your users love to use and come back for more."
        t_4="Scalable from day one" p_4="We build scalable systems, reusable components, and adaptable layouts that keep up with your product as it develops, alongside your product's evolution, and your audience grows."
        t_5="Clear design, clear decisions" p_5="Our design process informs clarity between your whole team, from product to engineering. By having simple flows and visual reasoning, everyone is certain of what is being constructed and why."
        left={true}
        />

         <ServiceImageText img_url="../static/images/services/ser3.webp" 
        heading="Why Wavespace? We care like co-founders."
        subheading="We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose."
        t_1="User-First, Business-Aligned" p_1="Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose."
        t_2="Strategy meets speed" p_2="We move quickly, but never in the dark. Our approach combines Lean UX techniques and rapid deployment to allow you to test, learn, and scale without sacrificing time and quality."
        t_3="Designed for development, not just looks" p_3="We don't design to impress, we design to convert. That means more signups, stronger retention, and an interface that your users love to use and come back for more."
        t_4="Scalable from day one" p_4="We build scalable systems, reusable components, and adaptable layouts that keep up with your product as it develops, alongside your product's evolution, and your audience grows."
        t_5="Clear design, clear decisions" p_5="Our design process informs clarity between your whole team, from product to engineering. By having simple flows and visual reasoning, everyone is certain of what is being constructed and why."
        left={false}
        />

        <ServiceImageText img_url="../static/images/services/ser4.webp" 
        heading="Why Wavespace? We care like co-founders."
        subheading="We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose."
        t_1="User-First, Business-Aligned" p_1="Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose."
        t_2="Strategy meets speed" p_2="We move quickly, but never in the dark. Our approach combines Lean UX techniques and rapid deployment to allow you to test, learn, and scale without sacrificing time and quality."
        t_3="Designed for development, not just looks" p_3="We don't design to impress, we design to convert. That means more signups, stronger retention, and an interface that your users love to use and come back for more."
        t_4="Scalable from day one" p_4="We build scalable systems, reusable components, and adaptable layouts that keep up with your product as it develops, alongside your product's evolution, and your audience grows."
        t_5="Clear design, clear decisions" p_5="Our design process informs clarity between your whole team, from product to engineering. By having simple flows and visual reasoning, everyone is certain of what is being constructed and why."
        left={true}
        />
         <ServiceImageText img_url="../static/images/services/ser5.webp" 
        heading="Why Wavespace? We care like co-founders."
        subheading="We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose."
        t_1="User-First, Business-Aligned" p_1="Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose."
        t_2="Strategy meets speed" p_2="We move quickly, but never in the dark. Our approach combines Lean UX techniques and rapid deployment to allow you to test, learn, and scale without sacrificing time and quality."
        t_3="Designed for development, not just looks" p_3="We don't design to impress, we design to convert. That means more signups, stronger retention, and an interface that your users love to use and come back for more."
        t_4="Scalable from day one" p_4="We build scalable systems, reusable components, and adaptable layouts that keep up with your product as it develops, alongside your product's evolution, and your audience grows."
        t_5="Clear design, clear decisions" p_5="Our design process informs clarity between your whole team, from product to engineering. By having simple flows and visual reasoning, everyone is certain of what is being constructed and why."
        left={false}
        />

        <section className="service-card">
            <ServiceStickCards card1_heading="Branding Identity" card1_para="Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand&apos;s visibility, credibility,<br /> and connection with customers both online<br /> and offline." image_url="../static/images/1.webp" bg_color="card-blue" />

            <ServiceStickCards card1_heading="Branding Identity" card1_para="Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline." image_url="../static/images/1.webp" bg_color="bg-white" />

            <ServiceStickCards card1_heading="Branding Identity" card1_para="Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline." image_url="../static/images/1.webp" bg_color="bg-darkyellow" />

            <ServiceStickCards card1_heading="Branding Identity" card1_para="Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline." image_url="../static/images/1.webp" bg_color="card-orange" />

            <ServiceStickCards card1_heading="Branding Identity" card1_para="Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline." image_url="../static/images/1.webp" bg_color="card-purple" />

            <ServiceStickCards card1_heading="Branding Identity" card1_para="Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline." image_url="../static/images/1.webp" bg_color="card-black" />
            <ServiceStickCards card1_heading="Branding Identity" card1_para="Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline." image_url="../static/images/1.webp" bg_color="card-green" />
        </section> 

        <ServiceIndustry heading1="Industry expertise" heading2="across globally" 
        text_h_1="Finance & Fintech" text_p_1="We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust."
        
        text_h_2="E-Commerce & DTC" text_p_2="Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty."
        
        text_h_3="SaaS & B2B Platforms" text_p_3="Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing."
        
        text_h_4="Web3, AI & Emerging Tech" text_p_4="We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it."

        text_h_5="EdTech & HealthTech" text_p_5="We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave."

        text_h_6="Hospitality & Legal Services" text_p_6="Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer."
        
        />
        <ServiceDesign/>
        
        <GlassAnimText/>
        <Testimonials/>

        
        <section className="padding">
            <div className="container">
                <div className="blue-img text-white ">
                    <div className="pill-about py-1 mb-4">
                        <img src="/static/images/fire.webp" alt="" width={20} /> <span className='mx-3 fs-14'>Only 4 seats per month</span>
                    </div>
                    <h1 className='fw-normal fs-60'>Try our UI/UX design service that is built<br></br> for you — just $500 for one week.</h1>
                    <p>... and get the answers on:</p>
                    <div className='d-flex flex-md-nowrap flex-wrap'>
                        <div className="pill-about me-4 mb-md-0 mb-3">
                            <img src="/static/images/wite-tick.webp" alt="" /> <span className='mx-3'>See how we plan, design and build</span>
                        </div>

                         <div className="pill-about mb-md-0 mb-3">
                            <img src="/static/images/wite-tick.webp" alt="" /> <span className='mx-3'>Get a full view of our UX process, made for you</span>
                        </div>
                    </div>
                     <div className='d-flex flex-md-nowrap flex-wrap mt-2 mb-4'>
                        <div className="pill-about me-4 mb-md-0 mb-3">
                            <img src="/static/images/wite-tick.webp" alt="" /> <span className='mx-3'>See how we plan, design and build</span>
                        </div>

                         <div className="pill-about mb-md-0 mb-3">
                            <img src="/static/images/wite-tick.webp" alt="" /> <span className='mx-3'>Get a full view of our UX process, made for you</span>
                        </div>
                    </div>
                    <div>
                        <a href='' className='btn-header bg-yellow-btn'>
                            <span className='btn-text'>Book an intro call</span>
                            <div className='bp_icon-wrap mx-2'>
                                <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                            </div>
                            <div className="bg-header-black bg-white">

                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
