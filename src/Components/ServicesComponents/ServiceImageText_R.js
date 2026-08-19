import React from 'react'

export default function ServiceImageText(props) {
  return (
    <>
      <section className="padding pt-0">
            <div className="container">
                <div className="row gx-5">
                    <div className={props.left? 'order-lg-2 order-1 col-lg-6' : 'col-lg-6'} >
                          <div className='text-center'>
                            <img src={props.img_url}
                            alt="" className="img-fluid" />
                        </div>
                    </div>                
                     <div className={props.left? 'order-lg-1 order-2 col-lg-6 mt-lg-auto mb-auto mt-3 px-4' : 'col-lg-6 mt-lg-auto mb-auto mt-3 px-4'}>
                    <div>
                        <h2 className="fs-1">{props.heading}</h2>
                        <p className="my-3 fs-5">
                            {props.subheading}
                        </p>
                    </div>
                    <div className=''>
                        <div className='que-parent'>

                            <div className="question justify-content-between pb-2">
                                <h5 className="fw-medium text-center">
                                    <span className="text-secondary me-3">01.</span> 
                                    {props.t_1}
                                </h5>
                                    <div className='faq-icon'>
                                        <img src="/static/images/logos/b-arrow.webp" alt="" width={15} className="img-fluid" />
                                    </div>
                            </div>
                            <div className="answer">
                                <p>
                                  {props.p_1}
                                </p>
                            </div>
                        </div>
                       

                         <div className='que-parent'>

                                <div className="question justify-content-between pb-2">
                                    <h5 className="fw-medium text-center">
                                       <span className="text-secondary me-3">02.</span> {props.t_2}
                                    </h5>
                                    <div className='faq-icon'>
                                        <img src="/static/images/logos/b-arrow.webp" alt="" width={15} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="answer">
                                    <p>
                                      {props.p_2}
                                    </p>
                                </div>
                         
                        </div>

                         <div className='que-parent'>

                                <div className="question justify-content-between pb-2">
                                    <h5 className="fw-medium text-center">
                                       <span className="text-secondary me-3">03.</span> {props.t_3}
                                    </h5>
                                    <div className='faq-icon'>
                                        <img src="/static/images/logos/b-arrow.webp" alt="" width={15} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="answer">
                                    <p>
                                       {props.p_3}
                                    </p>
                                </div>
                         
                        </div>

                        <div className='que-parent'>

                                <div className="question justify-content-between pb-2">
                                    <h5 className="fw-medium text-center">
                                       <span className="text-secondary me-3">04.</span> {props.t_4}
                                    </h5>
                                    <div className='faq-icon'>
                                        <img src="/static/images/logos/b-arrow.webp" alt="" width={15} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="answer">
                                    <p>
                                      {props.p_4}
                                    </p>
                                </div>
                         
                        </div>

                        
                        <div className='que-parent'>

                                <div className="question justify-content-between pb-2">
                                    <h5 className="fw-medium text-center">
                                       <span className="text-secondary me-3">05.</span> {props.t_5}
                                    </h5>
                                    <div className='faq-icon'>
                                        <img src="/static/images/logos/b-arrow.webp" alt="" width={15} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="answer">
                                    <p>
                                    {props.p_5}
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
