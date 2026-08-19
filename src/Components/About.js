"use client";
import React, {useRef} from 'react'
import TrustedBy from './TrustedBy'
import AnimatedTextBlack from './AnimatedTextBlack';
import AnimatedText from './AnimatedText';
import StickyCards from './StickyCards';
import OurTeam from './OurTeam';
import Testimonials from './Testimonials';
import { motion, useScroll, useTransform } from 'framer-motion';
import FAQs from './FAQs';
import Contactform from './Contactform';

export default function About() {

    const animatedTextRef = useRef(null);
    const animatedslidecards = useRef(null);
    const { scrollYProgress } = useScroll({
        target: animatedslidecards,
        offset: ["start end", "end start"] // Animation starts when section enters view, ends when it exits
    });
    const leftSlide = useTransform(scrollYProgress, [0.4, 0.6], [0, -310])

  return (
    <>
     <section className="padding pb-0">
        <div className="container">
            <h1 className='h1 fw-bold'>
                Designed for billions, and we are the team behind <span className='g-1'>future unicorns</span>.
            </h1>
            <h2 className='mt-5'>
                We’re not just a design agency. We’re the product-thinking team behind 100M+<br></br>users, $2B+ funding, & 250+ VC-backed success stories.
            </h2>
                <div className='about-img'>
                    <img src="/static/images/s2.webp" alt="" className="img-fluid" />
                </div>

        </div>
      </section> 


    <section className="padding bg-light2 about-2">
        <div className="container">
            <TrustedBy/>
            
            <div className='py-5'>
                <AnimatedTextBlack text1="Bold design, billion-dollar proof. We measure" text2="impact, not just ship pixels." ref={animatedTextRef} />    
                <div className="row">
                        <div className="col-md-4 mt-4">
                            <div className="about-white-card">
                                <div>
                                    <p className='mb-0 fs-5'>01/</p>
                                </div>

                                <div>
                                    <h4 className='fs-1'>$2B+</h4>
                                    <p className="mb-0 fs-5">
                                        raised through <br />
                                        UX-led launches
                                    </p>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-4 mt-4">
                        <div className="about-white-card">
                            <div>
                                <p className='mb-0 fs-5'>02/</p>
                            </div>

                            <div>
                                <h4 className='fs-1'>400%</h4>
                                <p className="mb-0 fs-5">
                                    uplift in conversions <br />
                                    (avg. 300%)
                                </p>
                            </div>
                        </div>
                        </div>

                    <div className="col-md-4 mt-4">
                        <div className="about-white-card">
                            <div>
                                <p className='mb-0 fs-5'>03/</p>
                            </div>

                            <div>
                                <h4 className='fs-1'>100M+</h4>
                                <p className="mb-0 fs-5">
                                    users reached through <br />
                                    our SaaS and AI platforms
                                </p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 mt-4">
                        <div className="about-white-card">
                            <div>
                                <p className='mb-0 fs-5'>04/</p>
                            </div>

                            <div>
                                <h4 className='fs-1'>140+</h4>
                                <p className="mb-0 fs-5">
                                    Awards recognised by <br />
                                    Awwwards, CSSDA, Behance
                                </p>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-6 mt-4">
                        <div className="about-white-card">
                            <div>
                                <p className='mb-0 fs-5'>05/</p>
                            </div>

                            <div>
                                <h4 className='fs-1'>250+ Testimonials </h4>
                                <p className="mb-0 fs-5">
                                    trusted by YC-backed, VC-funded, a16z, Sequoia,<br />
                                    500+ global
                                </p>
                            </div>
                        </div>
                        </div>
                </div>
            </div>


            <div className="my-5">
                <AnimatedTextBlack text1="From one laptop to 22+ countries, we help" text2="bold visions become intuitive brands." ref={animatedTextRef} />    

                <div className="row mt-5 gx-5">
                    <div className="col-md-6 mb-md-0 mb-3">
                        <img src="/static/images/team.webp" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 ">
                        <div className="px-sm-3 px-0">

                        <p className="fs-4">
                            Wavespace didn’t start in a co-working space or some glossy VC-funded setup. It started in a small bedroom, just one laptop, a noisy fan, and a founder who couldn’t stop thinking about why so many good ideas fail.
                        <br />
                        <br />
                        So we helped early teams fix broken onboarding, redesign confusing UX, and turn messy ideas into real products. One founder at a time.
                        <br />
                        <br />
                        But now? Wavespace works with 500+ startups, helps teams launch faster MVPs, improve conversion, and build systems that scale. Our design now powers 100M+ users across 22 countries, from early-stage AI tools to Series B SaaS giants.
                        <br />
                        <br />
                        But honestly? We still build like it’s day one, fast, honest, human. Behind every screen is someone betting it all on an idea.
                        
                        </p>
                        <div className="mt-4">
                            <a href='' className='btn-header d-inline-flex mx-auto'>
                                <span className='btn-text '>Shape your vision</span>
                                <div className='bp_icon-wrap mx-2'>
                                    <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10}></img>
                                    <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10}></img>
                                </div>
                                <div className="bg-header-black">

                                </div>
                            </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </section>



    <section className="padding">
        <div className="container">
            <div className="row gx-5">
                <div className="col-md-6">
                    <div>
                        <img src="/static/images/team2.webp" alt="" className="img-fluid" />
                    </div>  
                </div>

                <div className="col-md-6 mt-md-0 mt-3 px-4">
                    <div>
                        <h2 className="fs-1">Why Wavespace? We care like co-founders.</h2>
                        <p className="my-3 fs-5">
                            Not another agency. We are your team that gives a damn. Because we treat your product like it's ours.
                        </p>
                    </div>
                    <div className=''>
                        <div className='que-parent'>

                            <div className="question justify-content-between pb-2">
                                <h5 className="fw-medium text-center">
                                    <span className="text-secondary me-3">01.</span> Startup-Speed Process
                                </h5>
                                    <div className='faq-icon'>
                                    <img src="/static/images/logos/b-arrow.webp" alt="" width={15} className="img-fluid" />
                                    </div>
                            </div>
                            <div className="answer">
                                <p>
                                    We work as a startup, not as an agency, with fast sprints, async feedback, and designs that go live in weeks, not quarters.
                                </p>
                            </div>
                        </div>
                       

                         <div className='que-parent'>

                                <div className="question justify-content-between pb-2">
                                    <h5 className="fw-medium text-center">
                                       <span className="text-secondary me-3">02.</span> SaaS, AI & Web3 Experts
                                    </h5>
                                    <div className='faq-icon'>
                                        <img src="/static/images/logos/b-arrow.webp" alt="" width={15} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="answer">
                                    <p>
                                       We think of platform complexity as a second language. From onboarding friction to system design, we solve it without slowing you down.
                                    </p>
                                </div>
                         
                        </div>

                         <div className='que-parent'>

                                <div className="question justify-content-between pb-2">
                                    <h5 className="fw-medium text-center">
                                       <span className="text-secondary me-3">03.</span> Work with Experts, Not Layers
                                    </h5>
                                    <div className='faq-icon'>
                                        <img src="/static/images/logos/b-arrow.webp" alt="" width={15} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="answer">
                                    <p>
                                       No account managers or long handoffs. You can talk to senior designers and strategists who will not only speak but will also build.
                                    </p>
                                </div>
                         
                        </div>

                        <div className='que-parent'>

                                <div className="question justify-content-between pb-2">
                                    <h5 className="fw-medium text-center">
                                       <span className="text-secondary me-3">04.</span> Design That Performs
                                    </h5>
                                    <div className='faq-icon'>
                                        <img src="/static/images/logos/b-arrow.webp" alt="" width={15} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="answer">
                                    <p>
                                      We don’t chase pretty. We chase impact, faster onboarding, better conversions, clearer UX, and fewer dev revisions.
                                    </p>
                                </div>
                         
                        </div>

                        
                        <div className='que-parent'>

                                <div className="question justify-content-between pb-2">
                                    <h5 className="fw-medium text-center">
                                       <span className="text-secondary me-3">05.</span> Flexible Engagement Models
                                    </h5>
                                    <div className='faq-icon'>
                                        <img src="/static/images/logos/b-arrow.webp" alt="" width={15} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="answer">
                                    <p>
                                     Need a sprint team? Ongoing design partner? MVP help? We plug in wherever you need, with flexible, no-BS engagement models.
                                    </p>
                                </div>
                         
                        </div>


                    </div>
             </div>
            </div>

                <div className="pt-5 d-flex justify-content-between align-items-center">
                    <div>
                        <AnimatedText text1="From vision to velocity, we are" text2="all in one place." ref={animatedTextRef} />
                    </div>
                    <div className="mt-4">
                        <a href='' className='btn-header d-inline-flex mx-auto'>
                            <span className='btn-text '>View services</span>
                            <div className='bp_icon-wrap mx-2'>
                                <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10}></img>
                                <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10}></img>
                            </div>
                            <div className="bg-header-black">

                            </div>
                        </a>
                    </div>
               

                </div>

            </div>
    </section>




        <StickyCards/>


        <section className="padding">
            <div className="container">


                    <div className="row mt-5 gx-5">
                    <div className="col-md-6 mb-md-0 mb-3">
                        <img src="/static/images/team3.webp" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="px-md-3 px-0">
                        <h3 className="fs-1">We don’t just design. We <br /> believe, then deliver.</h3>
                        <p className="fs-5 fw-medium mt-4">
                           We’ve seen great ideas fail just because the UX didn’t work. That’s why we design to solve, not just to impress. When you care about users like a founder does, design becomes direction, not decoration. And that mindset has changed everything for our clients:
                        </p>

                        <ul className="about-ul mt-4">
                            <li>35% faster product launches through scalable systems</li>
                            <li>480+ dev hours saved per project</li>
                            <li>Up to 67% shorter onboarding time</li>
                            <li>92% client satisfaction across 250+ global brands</li>
                            <li>40% drop in user drop-off through better UX</li>
                        </ul>

                        <div className="mt-5">
                            <a href='' className='btn-header d-inline-flex mx-auto'>
                                <span className='btn-text '>Shape your vision</span>
                                <div className='bp_icon-wrap mx-2'>
                                    <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10}></img>
                                    <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10}></img>
                                </div>
                                <div className="bg-header-black">

                                </div>
                            </a>
                            </div>
                        </div>

                    </div>
                </div>
            
            </div>    
        </section>    
        

        <section className="padding bg-team">
            <div className="container">
                <h1 className="text-white">Founder’s</h1>
                <h1 className="text-white text-end">Led Journey</h1>
            </div>
        </section>

        <section className="bg-black ">
            <div className="container padding border-b-w">
                <div className='row d-flex justify-content-between align-items-start'>
                    <div className='col-md-4'>
                        <img src="/static/images/ceo22.webp" alt="" className="img-fluid about-ceo" />
                        <p className="text-white mt-3 mb-0">
                            Shahid Miah
                        </p>
                        <p className="text-gray fw-medium fs-14">2019, When I got my vision</p>
                    </div>

                    <div className='col-md-8'>
                        <div className="">
                            <p className="fs-3 mb-0 text-white">
                            <img src="/static/images/quotes.webp" width={30} className='img-fluid me-2' alt="" />
                                <span className='fs-3'> Back in 2014, I had just finished high school. No time to celebrate, I was already thinking, how do I help my family? </span>
                                 Like most kids from a middle-class home, I aimed for engineering. Design? Never crossed my mind. But when my uncle nudged me toward graphic arts, I followed, not out of passion, but because it was something. Somewhere that journey, I stumbled into UI/UX. No mentor, no roadmap. Just late nights, curiosity, and a deep urge to make things make sense. I kept wondering, how can design solve real problems?
                            </p>
                        </div>
                    </div>

                </div>

               
            </div>

            <div className="container padding pb-0">
                 <div className="row mt-4 gx-5">
                    <div className="col-md-8">
                        <div className="row gx-5">

                            <div className="col-md-6">
                                <p className='text-white'>
                                    That question lit a fire in me. One project led to another & before long, I was designing for bigger companies, across borders, and I finally wanted to work abroad by going. By then, the dream had changed. It wasn’t just about earning or designing for clients anymore.
                                </p>

                                <p className='text-white mt-5'>
                                    I wanted to understand,<br></br>
                                    Why do great founders fail, and why do strong products disappear? That one question led me across projects, borders, and eventually, toward something bigger.
                                </p>
                              
                            </div>

                             <div className="col-md-6">
                                <p className='text-white'>
                                   In 2019, I paused and dug deeper, not into tools, but into why products fail. And from that, Wavespace was born. I never planned to build an agency. I just wanted to solve problems.  That mission hasn’t changed. We don’t show up to impress.
                                </p>

                                <p className='text-white mt-5'>
                                  We show up to help founders who were once like me, full of vision, short on clarity. We design for outcomes. Because future Unicorns aren’t found, they’re designed. Now I’m here, ready to team up with venture capital, building what’s next, with clarity, speed, and heart.
                                </p>
                              
                            </div>
                            <div className="mt-5 text-center">
                                <img src="/static/images/quotes.webp" width={40} alt="" className="img-fluid" />
                                <h2 className='text-center mt-2 text-white fw-normal'>
                                    Wavespace started with design, now we’re building future unicorns. With VC partners and early-stage founders, we combine clarity, code, and capital to launch what’s next.
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <p className="text-white fs-6 mb-1">Shahid Miah</p>
                        <p className="fs-14 text-gray">2025, we growing fast with unicorn energy</p>                    
                        <img src="/static/images/ceo33.webp" alt="" className="img-fluid" />
                    </div>

                </div>
            </div>  

            <OurTeam headeing_text={false} />

        </section>


        <section className="padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-0">
                        <h3 className='fw-normal'>Meet Our Creatives</h3>
                    </div>
                    <div className="col-md-9">
                        <h3 className="fs-60 fw-bold mb-0">
                            We are your product geek, UX mind, UI lovers, & Webflow builders. Your creative team,<span className="text-2"> just a Slack away.</span>
                        </h3>
                    </div>
                </div>
                <div className="row mt-5 gx-2">
                    
                    <div className="col-md-4 mb-md-0 mb-3">
                        <div className="about-white-card awc-border">
                                <div>
                                    <p className='mb-0 fs-5'>01/</p>
                                </div>

                                <div>
                                    <h4 className='fs-1'>$2B+</h4>
                                    <p className="mb-0 fs-5">
                                        raised through <br />
                                        UX-led launches
                                    </p>
                                </div>
                            </div>
                    </div>

                    
                    <div className="col-md-4 mb-md-0 mb-3">
                        <div className="about-white-card awc-border">
                                <div>
                                    <p className='mb-0 fs-5'>02/</p>
                                </div>

                                <div>
                                    <h4 className='fs-1'>$2B+</h4>
                                    <p className="mb-0 fs-5">
                                        raised through <br />
                                        UX-led launches
                                    </p>
                                </div>
                            </div>
                    </div>

                    
                    <div className="col-md-4">
                        <div className="about-white-card awc-border">
                                <div>
                                    <p className='mb-0 fs-5'>03/</p>
                                </div>

                                <div>
                                    <h4 className='fs-1'>$2B+</h4>
                                    <p className="mb-0 fs-5">
                                        raised through <br />
                                        UX-led launches
                                    </p>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-md-0 mb-3">
                        <div>
                            <img src="/static/images/t-1.webp" alt="" className="img-fluid" />
                            <h4 className="my-1 fw-medium mt-3">Shahid Miah</h4>
                            <h5 className='mb-0 text-2 fw-normal'>Founder & CEO</h5>
                        </div>
                    </div>

                     <div className="col-md-3 mb-md-0 mb-3">
                        <div>
                            <img src="/static/images/t-2.webp" alt="" className="img-fluid" />
                            <h4 className="my-1 fw-medium mt-3">Shahid Miah</h4>
                            <h5 className='mb-0 text-2 fw-normal'>Founder & CEO</h5>
                        </div>
                    </div>

                     <div className="col-md-3 mb-md-0 mb-3">
                        <div>
                            <img src="/static/images/t-3.webp" alt="" className="img-fluid" />
                            <h4 className="my-1 fw-medium mt-3">Shahid Miah</h4>
                            <h5 className='mb-0 text-2 fw-normal'>Founder & CEO</h5>
                        </div>
                    </div>

                     <div className="col-md-3">
                        <div>
                            <img src="/static/images/t-4.webp" alt="" className="img-fluid" />
                              <h4 className="my-1 fw-medium mt-3">Shahid Miah</h4>
                            <h5 className='mb-0 text-2 fw-normal'>Founder & CEO</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="padding">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                            <h2 className="fs-60 mb-0">
                                The beliefs behind
                                <br></br><span className="text-2">the builds</span>
                            </h2>
                    </div>

                    <div className="col-md-6 mb-md-0 mt-5">
                        <div className='d-flex align-items-start'>
                            <div>
                                <h4 className='fw-normal text-2 mb-0 '>01</h4>
                            </div>
                            <div className='mx-3'>
                                <h4>Empathy</h4>
                                <h4 className='mt-2 fw-normal mb-0'>
                                    Before we create a design, put pen to paper, or build, we listen. Because the goods always come from understanding. We put ourselves in your users’ shoes so your product enters their lives smoothly.
                                </h4>
                            </div>
                        </div>

                         <div className='d-flex align-items-start mt-5'>
                            <div>
                                <h4 className='fw-normal text-2 mb-0 '>02</h4>
                            </div>
                            <div className='mx-3'>
                                <h4>Empathy</h4>
                                <h4 className='mt-2 fw-normal mb-0'>
                                    Before we create a design, put pen to paper, or build, we listen. Because the goods always come from understanding. We put ourselves in your users’ shoes so your product enters their lives smoothly.
                                </h4>
                            </div>
                        </div>

                         <div className='d-flex align-items-start mt-5'>
                            <div>
                                <h4 className='fw-normal text-2 mb-0 '>03</h4>
                            </div>
                            <div className='mx-3'>
                                <h4>Empathy</h4>
                                <h4 className='mt-2 fw-normal mb-0'>
                                    Before we create a design, put pen to paper, or build, we listen. Because the goods always come from understanding. We put ourselves in your users’ shoes so your product enters their lives smoothly.
                                </h4>
                            </div>
                        </div>

                         <div className='d-flex align-items-start mt-5'>
                            <div>
                                <h4 className='fw-normal text-2 mb-0 '>04</h4>
                            </div>
                            <div className='mx-3'>
                                <h4>Empathy</h4>
                                <h4 className='mt-2 fw-normal mb-0'>
                                    Before we create a design, put pen to paper, or build, we listen. Because the goods always come from understanding. We put ourselves in your users’ shoes so your product enters their lives smoothly.
                                </h4>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <Testimonials/>

        <section className="padding bg-light2 about-slider-parent" ref={animatedslidecards}>
            <div className="container">
                <h2 className="fs-60">
                    The process behind our <br />
                    <span className="text-2">design of your product</span>
                </h2>

                <motion.div  style={{x:leftSlide}} className='about-wrapper mt-5'>
                    <div className="row gx-5">
                        <div className="col-md-3 mb-md-0 mb-3">
                            <div className="about-slide-card">
                                <div>
                                    <h4 className='mb-0 text-2 fw-normal'>01</h4>
                                </div>

                               <div>
                                    <h4 className="fw-bold">
                                        Discovery & strategy
                                    </h4>
                                    <p className="text-2 fs-5">
                                        We align on business goals, audience needs, and product vision, setting a clear foundation for what we’re building and why.
                                    </p>

                                    <ul className='list-items'>
                                        <li>Business goals & product vision</li>
                                        <li>Mission & market positioning</li>
                                        <li>Target users & core audience</li>
                                        <li>Unique value proposition</li>
                                    </ul>
                               </div>
                            </div>
                        </div>
                          <div className="col-md-3 mb-md-0 mb-3">
                            <div className="about-slide-card">
                                <div>
                                    <h4 className='mb-0 text-2 fw-normal'>01</h4>
                                </div>

                               <div>
                                    <h4 className="fw-bold">
                                        Discovery & strategy
                                    </h4>
                                    <p className="text-2 fs-5">
                                        We align on business goals, audience needs, and product vision, setting a clear foundation for what we’re building and why.
                                    </p>

                                    <ul className='list-items'>
                                        <li>Business goals & product vision</li>
                                        <li>Mission & market positioning</li>
                                        <li>Target users & core audience</li>
                                        <li>Unique value proposition</li>
                                    </ul>
                               </div>
                            </div>
                        </div>

                          <div className="col-md-3 mb-md-0 mb-3">
                            <div className="about-slide-card">
                                <div>
                                    <h4 className='mb-0 text-2 fw-normal'>01</h4>
                                </div>

                               <div>
                                    <h4 className="fw-bold">
                                        Discovery & strategy
                                    </h4>
                                    <p className="text-2 fs-5">
                                        We align on business goals, audience needs, and product vision, setting a clear foundation for what we’re building and why.
                                    </p>

                                    <ul className='list-items'>
                                        <li>Business goals & product vision</li>
                                        <li>Mission & market positioning</li>
                                        <li>Target users & core audience</li>
                                        <li>Unique value proposition</li>
                                    </ul>
                               </div>
                            </div>
                        </div>

                          <div className="col-md-3 mb-md-0 mb-3">
                            <div className="about-slide-card">
                                <div>
                                    <h4 className='mb-0 text-2 fw-normal'>01</h4>
                                </div>

                               <div>
                                    <h4 className="fw-bold">
                                        Discovery & strategy
                                    </h4>
                                    <p className="text-2 fs-5">
                                        We align on business goals, audience needs, and product vision, setting a clear foundation for what we’re building and why.
                                    </p>

                                    <ul className='list-items'>
                                        <li>Business goals & product vision</li>
                                        <li>Mission & market positioning</li>
                                        <li>Target users & core audience</li>
                                        <li>Unique value proposition</li>
                                    </ul>
                               </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>



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

        <FAQs/>
        
        <Contactform/>

    </>
  )
}
