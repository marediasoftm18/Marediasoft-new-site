import React, { useRef } from 'react'
import AnimatedText from './AnimatedText';
import MovingCursor from './MovingCursor';
import MovingCursorSmall from './MovingCursorSmall';

export default function Portfolio() {
 
  const animatedTextRef = useRef(null);
    

  return (
    <>
      
        <section className='padding'>
            <div className="container mb-3">
            <div className='d-flex justify-content-between align-items-center'>
                <AnimatedText text1="Turn your ideas into impactful" text2="solutions like them!" ref={animatedTextRef} />    

                <div className='d-md-block d-none'>
                    <a href='' className='btn-header'>                                                                                                        
                        <span className='btn-text '>Start Your Project</span>
                        <div className='bp_icon-wrap mx-2'>
                            <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10}></img>
                            <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10}></img>
                        </div>
                        <div className="bg-header-black">

                        </div>
                    </a>
                </div>
            </div>
            
            <div className="row mt-4 mb-5">
                <div className="col-md-6 col-lg-6">
                    <a href="">
                        <div className='moving-ball-parent' id='service1'>
                            <MovingCursorSmall title="See More" Id="service1" ballId="movingBall1" />
                            <img src="/static/images/s1.webp" alt="" className="img-fluid portfolio-card-img" />
                        </div>
                        <h5 className='mt-3 mb-1'>
                            Spacebook - Business Accounting dashboard design
                        </h5>
                        <p>
                            Web Design • Visual Identity • SaaS Dashboard
                        </p>
                    </a>
                </div>
                  <div className="col-md-6 col-lg-6 mt-lg-0 mt-4">
                    <a href="">
                      <div className='moving-ball-parent' id='service2'>
                            <MovingCursorSmall title="See More" Id="service2" ballId="movingBall2" />
                           
                            <img src="/static/images/s2.webp" alt="" className="img-fluid portfolio-card-img" />
                        </div>
                          <h5 className='mt-3 mb-1'>
                            Spacebook - Business Accounting dashboard design
                        </h5>
                        <p>
                            Web Design • Visual Identity • SaaS Dashboard
                        </p>
                    </a>
                </div>

                <div className="col-md-6 col-lg-6 mt-4" >
                    <a href="">
                        <div className='moving-ball-parent' id='service6'>
                            <MovingCursorSmall title="See More" Id="service6" ballId="movingBall6" />
                        
                            <img src="/static/images/s3.webp" alt="" className="img-fluid portfolio-card-img" />
                        </div>
                         <h5 className='mt-3 mb-1'>
                            Spacebook - Business Accounting dashboard design
                        </h5>
                        <p>
                            Web Design • Visual Identity • SaaS Dashboard
                        </p>
                    </a>
                </div>

                 <div className="col-md-6 col-lg-6 mt-4">
                    <a href="">
                        <div className='moving-ball-parent' id='service3'>
                            <MovingCursorSmall title="See More" Id="service3" ballId="movingBall3" />
                           
                            <img src="/static/images/s4.webp" alt="" className="img-fluid portfolio-card-img" />
                        </div>
                          <h5 className='mt-3 mb-1'>
                            Spacebook - Business Accounting dashboard design
                        </h5>
                        <p>
                            Web Design • Visual Identity • SaaS Dashboard
                        </p>
                    </a>
                </div>

                 <div className="col-md-6 col-lg-6 mt-4">
                    <a href="">
                       <div className='moving-ball-parent' id='service4'>
                            <MovingCursorSmall title="See More" Id="service4" ballId="movingBall4" />
                           
                            <img src="/static/images/s5.webp" alt="" className="img-fluid portfolio-card-img" />
                        </div>
                          <h5 className='mt-3 mb-1'>
                            Spacebook - Business Accounting dashboard design
                        </h5>
                        <p>
                            Web Design • Visual Identity • SaaS Dashboard
                        </p>
                    </a>
                </div>

                <div className="col-md-6 col-lg-6 mt-4">
                    <a href="">
                        <div className='moving-ball-parent' id='service5'>
                            <MovingCursorSmall title="See More" Id="service5" ballId="movingBall5" />
                           
                            <img src="/static/images/s6.webp" alt="" className="img-fluid portfolio-card-img" />
                        </div>
                          <h5 className='mt-3 mb-1'>
                            Spacebook - Business Accounting dashboard design
                        </h5>
                        <p>
                            Web Design • Visual Identity • SaaS Dashboard
                        </p>
                    </a>
                </div>
             
            </div>

           </div>
        </section>
         
    </>
  )
}
