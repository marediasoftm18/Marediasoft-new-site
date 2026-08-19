import React, {useRef} from 'react'
import AnimatedTextDark from './AnimatedTextDark';

export default function Blacksection() {

    const animatedTextRef = useRef(null);

    
  return (
    <>
         <section className="padding bg-black">
            <div className="container">
                <AnimatedTextDark text1="We deliver on time, in days and weeks" text2="— not months." ref={animatedTextRef} />    

               
                <div className="row gx-5 mt-5 mb-5">
                    <div className="col-md-8">
                        <div className='dark-box mt-4 border-b-w'>
                            <div className='d-flex align-items-center'>
                                 <span className="fs-5 text-dd">01</span><h3 className="fs-4 text-white fw-normal mx-3 mt-2">Onboard in 1 day</h3>
                            </div>
                            <div>
                                <img src="/static/images/ic-2.webp" alt="" width={16} />
                            </div>
                        </div>
                         <div className='dark-box border-b-w'>
                            <div className='d-flex align-items-center'>
                                 <span className="fs-5 text-dd">02</span><h3 className="fs-4 text-white fw-normal mx-3 mt-2">Understand Scope & Strategy</h3>
                            </div>
                            <div>
                                <img src="/static/images/ic-2.webp" alt="" width={16} />
                            </div>
                        </div>
                         <div className='dark-box'>
                            <div className='d-flex align-items-center'>
                                 <span className="fs-5 text-dd">03</span><h3 className="fs-4 text-white fw-normal mx-3 mt-2">First designs in 4-5 days</h3>
                            </div>
                            <div>
                                <img src="/static/images/ic-2.webp" alt="" width={16} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-auto mt-md-auto mt-5">
                        <p className='text-white black-quote'>
                            “Wavespace is a fantastic design team, with a <br/> healthy blend of UI and UX skills. Highly<br/> recommended”
                        </p>
                        <div className="mt-2 d-flex justify-content-start align-items-center">
                            <div>
                                <img src="/static/images/c-3.webp" alt="" className='img-fluid' width={50} />
                            </div>
                            <div className='mx-2 mt-3'>
                               <p className='fs-14 text-white my-auto black-quote-author'>
                                <b>/ Matt Kabus</b><br/>
                                CEO & Founder @LifeTales
                               </p>
                            </div>
                        </div>

                        <div className="mt-5">
                            <a href='' className='btn-header bg-yellow-btn'>
                                <span className='btn-text'>Book a call</span>
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
                <div className="my-5">
                    <AnimatedTextDark text1="From startup to enterprise, grow your business" text2="with fast and creative designs!" ref={animatedTextRef} />    
                </div>
            </div>
        </section>
 
    </>
  )
}
