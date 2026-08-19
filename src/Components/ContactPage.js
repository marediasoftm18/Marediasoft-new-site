"use client";
import React, {useRef} from 'react'
import Contactform from './Contactform'
import TrustedBy from './TrustedBy'
import Blacksection from './Blacksection';


export default function ContactPage() {

  const animatedTextRef = useRef(null);
    

  return (
    <>
        <Contactform/>
        <section className='padding'>
            <div className="container">
                <TrustedBy/>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div>
                            <h2 className='fs-1 mb-0'><b>What to expect. Fourth </b><br></br> base on a <span className="text-gray">first date?</span></h2>
                        </div>
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
        <Blacksection/>
        <section className="padding">
            <div className="container">
                <div className='row'>
                    <div className="col-md-8">
                        <h2 className='fs-1'>
                            Got a project in mind? <br />
                            Let’s talk.
                        </h2>
                    </div>
                    <div className="col-md-4 my-auto">
                        <div className='text-end'>
                             <a href='' className='btn-header d-inline-flex'>
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
                </div>


                <div className="row mt-5">
                    <div className="col-md-4">
                        <h4>Bangladesh</h4>
                        <div>
                            <div className='mt-2'>
                                <a href="">
                                    <img src="static/images/email-2.webp" alt="" width={20} className="img-fluid" />
                                    <span className='my-auto'> hello@wavespace.agency</span>
                                </a>
                            </div>
                            <div className='mt-2'>
                                <a href="">
                                    <img src="static/images/wp-2.webp" alt="" width={20} className="img-fluid" />
                                    <span className='my-auto'> +880 1785 0871 48</span>
                                </a>
                            </div>
                            <div className='mt-5'>
                                <p className="mb-0">Oriental Gofur Tower, <br />
                                88/KA, Mohammadpur, <br />Dhaka,Bangladesh.</p>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-4">
                        <h4>Indonesia</h4>
                        <div>
                            <div className='mt-2'>
                                <a href="">
                                    <img src="static/images/email-2.webp" alt="" width={20} className="img-fluid" />
                                    <span className='my-auto'> hello@wavespace.agency</span>
                                </a>
                            </div>
                            <div className='mt-2'>
                                <a href="">
                                    <img src="static/images/wp-2.webp" alt="" width={20} className="img-fluid" />
                                    <span className='my-auto'> +880 1785 0871 48</span>
                                </a>
                            </div>
                            <div className='mt-5'>
                                <p className="mb-0">Oriental Gofur Tower, <br />
                                88/KA, Mohammadpur, <br />Dhaka,Bangladesh.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                          <h4>USA</h4>
                        <div>
                            <div className='mt-2'>
                                <a href="">
                                    <img src="static/images/email-2.webp" alt="" width={20} className="img-fluid" />
                                    <span className='my-auto'> hello@wavespace.agency</span>
                                </a>
                            </div>
                            <div className='mt-2'>
                                <a href="">
                                    <img src="static/images/wp-2.webp" alt="" width={20} className="img-fluid" />
                                    <span className='my-auto'> +880 1785 0871 48</span>
                                </a>
                            </div>
                            <div className='mt-5'>
                                <p className="mb-0">Oriental Gofur Tower, <br />
                                88/KA, Mohammadpur, <br />Dhaka,Bangladesh.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
