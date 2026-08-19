import React from 'react'

export default function Contactform() {
    return (
        <>
            <section className="padding bg-light2">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <h2 className="h1">
                                    Have a Project?
                                </h2>
                                <h2 className='h1 text-secondary'>
                                    Let’s talk!
                                </h2>
                            </div>

                            <div className='mt-4 mb-4'>
                                <div className='d-flex'>
                                    <div>
                                        <img src="/static/images/tick.webp" width={20} alt="" className="img-fluid" />
                                    </div>
                                    <div className='mx-2'>
                                        <p className='fw-normal'>NDA? Absolutely just ask.</p>
                                    </div>
                                </div>

                                <div className='d-flex mt-3'>
                                    <div>
                                        <img src="/static/images/tick.webp" width={20} alt="" className="img-fluid" />
                                    </div>
                                    <div className='mx-2'>
                                        <p className='fw-normal'>We’ll respond in 24 hours  fast & focused.</p>
                                    </div>
                                </div>

                                <div className='d-flex mt-3'>
                                    <div>
                                        <img src="/static/images/tick.webp" width={20} alt="" className="img-fluid" />
                                    </div>
                                    <div className='mx-2'>
                                        <p className='fw-normal'>Work with senior UX experts, not juniors.</p>
                                    </div>
                                </div>


                                <div className="mt-4 pt-5">
                                    <p className="fw-bold fs-5">Schedule a call:</p>
                                    <div className="contact-card mt-3">
                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <img src="/static/images/ceo.webp" alt="" width={80} className="img-fluid" />
                                            </div>
                                            <div className='mx-2'>
                                                <h4>Shahid Miah</h4>
                                                <h6 className="fw-normal text-2 mt-2">CEO & Founder</h6>
                                            </div>
                                        </div>
                                        <a href='' className='calendar'>
                                            <img src="/static/images/calendar.webp" alt="" className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-3 mb-5">
                            <div className='form'>
                                <form action="">
                                    <div className="row">
                                        <div className="col-lg-6 mt-lg-0 mt-3">
                                            <div className='input'>
                                                <label htmlFor="" className='label'>E-mail</label>
                                                <input type="email" className='' placeholder='Email' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-lg-0 mt-3">
                                            <div className='input'>
                                                <label htmlFor="" className='label'>Full Name</label>
                                                <input type="text" placeholder='Full Name' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-lg-0 mt-3">
                                            <div className='input'>
                                                <select name="" id="">
                                                    <option value="">Project budget</option>
                                                    <option value="">$2000 - $5000 USD</option>
                                                    <option value="">$5000 - $10,000 USD</option>
                                                    <option value="">$10,000 - $20,000 USD</option>
                                                    <option value="">$20,000 - $50,000 USD</option>
                                                    <option value="">$50,000+ USD</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mt-lg-0 mt-3">
                                            <div className='input'>
                                                <select name="" id="">
                                                    <option value="">How did you hear about us?</option>
                                                    <option value="">Clutch.co</option>
                                                    <option value="">ChatGPT</option>
                                                    <option value="">Google</option>
                                                    <option value="">LinkedIn</option>
                                                    <option value="">Instagram</option>
                                                    <option value="">Youtube</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className="input">
                                                <div className="input">
                                                    <label htmlFor="" className='label'>Tell us about your project?</label>
                                                    <textarea name="" id="" cols="30" rows="3" placeholder='Tell us about your product and goals.'></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        <h5>How can we help you?</h5>

                                        <div className="mt-4 checkboxes">
                                            <div>
                                                <input className="form-check-input" type="checkbox" hidden value="" id="uidesign" />
                                                <label className="label-btn" htmlFor="uidesign">
                                                    UI/UX Design
                                                </label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" hidden value="" id="saasdesign" />
                                                <label className="label-btn" htmlFor="saasdesign">
                                                    SaaS Design
                                                </label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" hidden value="" id="branding" />
                                                <label className="label-btn" htmlFor="branding">
                                                    Branding
                                                </label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" hidden value="" id="CRO" />
                                                <label className="label-btn" htmlFor="CRO">
                                                    CRO
                                                </label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" hidden value="" id="mobileapp" />
                                                <label className="label-btn" htmlFor="mobileapp">
                                                    Mobile app
                                                </label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" hidden value="" id="development" />
                                                <label className="label-btn" htmlFor="development">
                                                    Development
                                                </label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" hidden value="" id="MVP" />
                                                <label className="label-btn" htmlFor="MVP">
                                                    MVP Development
                                                </label>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" hidden value="" id="webdesign" />
                                                <label className="label-btn" htmlFor="webdesign">
                                                    Web Design
                                                </label>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className='col-md-6'>
                                                <button type='submit' className='btn-header'>
                                                    <span className='btn-text'>Send Message</span>

                                                    <div className="bg-header-black">

                                                    </div>
                                                </button>
                                            </div>

                                            <div className='col-md-6 mt-md-0 mt-3'>
                                                <p className="fw-bold fs-14 text-2 text-md-end text-start">
                                                    Prefer email?
                                                </p>
                                                <p className="fw-bold text-md-end text-start">hello@wavespace.agency</p>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
