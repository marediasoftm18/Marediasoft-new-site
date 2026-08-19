import React from 'react';
import DOMPurify from "isomorphic-dompurify";


export default function ServiceStickCards(props) {
  return (
    <>
        <div className={`wrap-card ${props.bg_color}`}>
            <div className="container">
                <div className="row">

                <div className="col-lg-8 my-auto">
                   
                        <h2 className="fw-bold fs-1">{props.card1_heading}</h2>
                       <p
                        className="mt-4"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.card1_para) }}
                        />
                </div>

                <div className="col-lg-4 mt-lg-0 mt-4">
                    <div className=''>
                        <img src={props.image_url} alt="" className="img-fluid" />
                    </div>
                </div>

                </div>
            </div>
        </div>

    </>
  )
}
