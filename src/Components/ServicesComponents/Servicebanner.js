import React from 'react'

export default function Servicebanner(props) {
  return (
    <>
    <section className="banner-blue padding">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-6">
                                 <div className="pill-about py-2 mb-4">
                                  <img src="/static/images/clutch-rating.webp" alt="" width={100} /> <span className='text-white mx-2 my-auto'> 5.0</span>
                                 </div>
                                 <h1 className='fw-normal fs-60 text-white fw-bold'>{props.heading1}</h1>
                                 <p className='text-white fs-20 mt-4 fw-semibold'>{props.heading2}</p>
                                 <p className='mt-4 text-white fst-italic'>
                                     {props.qoutes_text}
                                 </p>
                                 <div className='mt-5 d-flex flex-sm-nowrap flex-wrap'>
                                         <div className='me-3'>
                                         <a href='' className='btn-header bg-yellow-btn'>
                                             <span className='btn-text'>{props.btn_1_text}</span>
                                             <div className='bp_icon-wrap mx-2'>
                                                 <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow' width={12}></img>
                                                 <img src="/static/images/logos/b-arrow.webp" alt="" className='arrow2' width={12}></img>
                                             </div>
                                             <div className="bg-header-black bg-white">
     
                                             </div>
                                         </a>
                                         </div>
     
                                         <div className='mt-sm-0 mt-3'>
                                         <a href='' className='btn-header bg-white-btn d-inline-flex'>
                                             <span className='btn-text'>{props.btn_2_text}</span>
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
                         <div className="col-lg-6 m-auto mt-lg-0 mt-4">
                             <div className='text-center'>
                                 <img src={props.side_img_url} height={300}
                                 alt="" className="img-fluid" />
                             </div>
                         </div>
                     </div>
                 </div>
    </section> 
    </>
  )
}
