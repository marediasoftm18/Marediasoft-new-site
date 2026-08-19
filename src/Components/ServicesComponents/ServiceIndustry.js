import React from 'react'

export default function ServiceIndustry(props) {
  return (
    <>
        
                <section className="padding">
                    <div className="container">
                        <div className='d-flex justify-content-between align-items-center'>
                        <div className=''>
                            <div className='invert-item'>
                                <div className="h2-1-anim">{props.heading1}</div>
                            </div>
                            <div className='invert-item'>
                                <div className="h2-2-anim">{props.heading2}</div>
                            </div>
                        </div>    
        
                        <div className='d-md-block d-none'>
                            <a href='' className='btn-header'>                                                                                                        
                                <span className='btn-text '>Consult an expert</span>
                                <div className='bp_icon-wrap mx-2'>
                                    <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10}></img>
                                    <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10}></img>
                                </div>
                                <div className="bg-header-black">
        
                                </div>
                            </a>
                        </div>
                    </div>
        
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className='service-img-parent'>
                                <img src="../static/images/services/ind-1.webp" alt="" className="img-fluid" />
                                <div className="service-img-child">
                                    <h4 className='text-white'>{props.text_h_1}</h4>
                                    <p className="mt-2">
                                        {props.text_p_1}
                                    </p>
                                </div>
                            </div>
        
                             <div className='mt-3'>
                                <div className='service-img-parent'>
                                <img src="../static/images/services/ind-4.webp" alt="" className="img-fluid" />
                                <div className="service-img-child">
                                    <h4 className='text-white'>{props.text_h_2}</h4>
                                    <p className="mt-2">
                                        {props.text_p_2}
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-3">
                            <div className='service-img-parent'>
                                <img src="../static/images/services/ind-2.webp" alt="" className="img-fluid" />
                                <div className="service-img-child">
                                    <h4 className='text-white'>{props.text_h_3}</h4>
                                    <p className="mt-2">
                                        {props.text_p_3}
                                    </p>
                                </div>
                            </div>
        
                             <div className='mt-3'>
                                <div className='service-img-parent'>
                                <img src="../static/images/services/ind-6.webp" alt="" className="img-fluid" />
                                <div className="service-img-child">
                                    <h4 className='text-white'>{props.text_h_4}</h4>
                                    <p className="mt-2">
                                        {props.text_p_4}
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-3">
                            <div className='service-img-parent'>
                                <img src="../static/images/services/ind-3.webp" alt="" className="img-fluid" />
                                <div className="service-img-child">
                                    <h4 className='text-white'>{props.text_h_5}</h4>
                                    <p className="mt-2">
                                        {props.text_p_5}
                                    </p>
                                </div>
                            </div>
        
                            <div className='mt-3'>
                                <div className='service-img-parent'>
                                <img src="../static/images/services/ind-5.webp" alt="" className="img-fluid" />
                                <div className="service-img-child">
                                    <h4 className='text-white'>{props.text_h_6}</h4>
                                    <p className="mt-2">
                                        {props.text_p_5}
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
        
                         
        
                    </div>
                    
                    </div>
                </section> 
    </>
  )
}
