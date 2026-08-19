// components/Navbar.jsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar(props) {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const closeServices = () => {
        setIsServicesOpen(false);
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light ${props.sec_class}`}>
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <img src="/static/images/logo.png" alt="Marediasoft Official Logo" width={120} height={80} style={{ objectFit: 'contain' }} />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto d-lg-inline-flex d-none">
                        <li className="nav-item anim-link">
                            <Link className="nav-link" href="/case-studies">Case Studies</Link>
                        </li>
                        <li className="nav-item anim-link">
                            <Link className="nav-link" href="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item droplink">
                            <Link
                                className="nav-link anim-link"
                                href="/services"
                                onClick={(e) => e.preventDefault()}
                            >
                                Services
                                {props.sec_logo ? (
                                    <span className='mx-1'>
                                        <img src="/static/images/white-arrow.webp" alt="" className='arrow-drop' width={14} />
                                    </span>
                                ) : (
                                    <span className='mx-1'>
                                        <img src="/static/images/arrow.webp" alt="" className='arrow-drop' width={14} />
                                    </span>
                                )}
                            </Link>
                            <ul className="drop-menu">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <Link href="/services/ui-ux-design" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-1.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>UI UX Design</span>
                                            </Link>
                                            <Link href="/services/web-design" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-2.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>Web Design</span>
                                            </Link>
                                            <Link href="/services/product-design" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-3.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>Product Design</span>
                                            </Link>
                                            <Link href="/services/saas-design" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-4.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>SaaS Design</span>
                                            </Link>
                                            <Link href="/services/branding" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-11.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>Branding</span>
                                            </Link>
                                            <Link href="/services/ux-audit" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-6.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>UX Audit</span>
                                            </Link>
                                        </div>

                                        <div className="col-md-4">
                                            <Link href="/services/mobile-app" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-7.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>Mobile App</span>
                                            </Link>
                                            <Link href="/services/design-system" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-8.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>Design System</span>
                                            </Link>
                                            <Link href="/services/webflow" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-9.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>Webflow</span>
                                            </Link>
                                            <Link href="/services/build-product" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-10.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>Build Product (MVP)</span>
                                            </Link>
                                            <Link href="/services/conversion-rate" className='d-flex align-items-center drop-item'>
                                                <div className="drop-icon">
                                                    <img src="/static/images/d-5.webp" alt="" width={30} />
                                                </div>
                                                <span className='mx-2 anim-link'>Conversion Rate (CRO)</span>
                                            </Link>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="bg-grade text-start">
                                                <div>
                                                    <div className='mb-3'>
                                                        <img src="/static/images/w.svg" alt="" width={35} className="img-fluid" />
                                                    </div>
                                                    <b>Subscription Services</b> <br />
                                                    <small style={{ fontSize: '12px' }}>
                                                        One subscription, unlimited design requests for your business.
                                                    </small>
                                                </div>
                                                <div>
                                                    <Link href='/contact' className='btn-header btn-header-sm'>
                                                        <span className='btn-text'>Contact us</span>
                                                        <div className='bp_icon-wrap mx-2'>
                                                            <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10} />
                                                            <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10} />
                                                        </div>
                                                        <div className="bg-header-black"></div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item anim-link">
                            <Link className="nav-link" href="/about">About us</Link>
                        </li>
                        <li className="nav-item anim-link">
                            <Link className="nav-link" href="/blog">Blog</Link>
                        </li>
                    </ul>

                    <div className='d-lg-flex d-none'>
                        <Link href='/contact' className='btn-header'>
                            <span className='btn-text'>Contact us</span>
                            <div className='bp_icon-wrap mx-2'>
                                <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10} />
                                <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10} />
                            </div>
                            <div className="bg-header-black"></div>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <div
                        className='pill-bar d-lg-none d-flex align-items-center'
                        onClick={() => document.querySelector('.mob-menu').classList.toggle('active')}
                    >
                        <img src="/static/images/bars.webp" alt="" width={25} className="img-fluid" />
                        <h6 className="fw-normal mx-1 text-white mb-0">Menu</h6>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Panel */}
            <nav className="mob-menu d-lg-none d-block">
                <div className=''>
                    <div className="d-flex justify-content-between align-items-center menu-topbar px-4 py-3">
                        <div>
                            <img src="/static/images/logo-dark.svg" width={160} height={48} alt="Marediasoft Logo" style={{ objectFit: 'contain' }} />
                        </div>
                        <div
                            className='close-bar d-flex align-items-center cursor-pointer'
                            onClick={() => document.querySelector('.mob-menu').classList.remove('active')}
                        >
                            <img src="/static/images/close.webp" alt="" width={20} className="img-fluid" />
                            <h6 className="fw-normal mx-1 mb-0">Close</h6>
                        </div>
                    </div>

                    {/* Main Mobile Menu */}
                    {!isServicesOpen && (
                        <ul className="px-4 pt-3 pb-5">
                            <li className="mb-3">
                                <Link className="text-decoration-none text-dark" href="/case-studies">Case Studies</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-decoration-none text-dark" href="/pricing">Pricing</Link>
                            </li>
                            <li className="mb-3">
                                <a
                                    className="text-decoration-none text-dark d-flex align-items-center"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleServices();
                                    }}
                                >
                                    Services
                                    <span className='mx-1'>
                                        <img src="/static/images/arrow.webp" alt="Submenu" className='arrow-drop' width={14} />
                                    </span>
                                </a>
                            </li>
                            <li className="mb-3">
                                <Link className="text-decoration-none text-dark" href="/about">About us</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-decoration-none text-dark" href="/blog">Blog</Link>
                            </li>

                            <div className='mt-5'>
                                <Link href='/contact' className='btn-header w-75 mx-auto'>
                                    <span className='btn-text fs-20'>Contact us</span>
                                    <div className='bp_icon-wrap mx-2'>
                                        <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10}></img>
                                        <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10}></img>
                                    </div>
                                    <div className="bg-header-black">

                                    </div>
                                </Link>
                            </div>
                        </ul>
                    )}

                    {/* Services Submenu - Sliding Panel */}
                    {isServicesOpen && (
                        <div className="services-submenu-panel">
                            <div className="d-flex align-items-center px-4 py-3 border-bottom">
                                <button
                                    className="btn btn-link p-0 me-3"
                                    onClick={closeServices}
                                    style={{ color: '#000', textDecoration: 'none', fontWeight: '500' }}
                                >
                                    ← Back
                                </button>
                                <h5 className="mb-0">Services</h5>
                            </div>

                            <div className="container pt-4 pb-5">
                                {/* Main Services Grid */}
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <Link href="/services/ui-ux-design" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-1.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>UI UX Design</span>
                                        </Link>
                                        <Link href="/services/web-design" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-2.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>Web Design</span>
                                        </Link>
                                        <Link href="/services/product-design" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-3.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>Product Design</span>
                                        </Link>
                                        <Link href="/services/saas-design" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-4.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>SaaS Design</span>
                                        </Link>
                                        <Link href="/services/branding" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-11.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>Branding</span>
                                        </Link>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <Link href="/services/mobile-app" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-7.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>Mobile App</span>
                                        </Link>
                                        <Link href="/services/design-system" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-8.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>Design System</span>
                                        </Link>
                                        <Link href="/services/webflow" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-9.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>Webflow</span>
                                        </Link>
                                        <Link href="/services/build-product" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-10.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>Build Product (MVP)</span>
                                        </Link>
                                        <Link href="/services/conversion-rate" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-5.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>Conversion Rate (CRO)</span>
                                        </Link>
                                        <a href="/services/ux-audit" className='d-flex align-items-center drop-item mb-3'>
                                            <div className="drop-icon me-3">
                                                <img src="/static/images/d-6.webp" alt="" width={30} />
                                            </div>
                                            <span className='anim-link'>UX Audit</span>
                                        </a>
                                    </div>
                                </div>

                                {/* UX Audit - Outside Panel (Like Screenshot) */}
                                <div className="mt-4 pt-3 border-top">

                                </div>

                                {/* Subscription Card */}
                                <div className="mt-4 bg-grade p-4 rounded">
                                    <div className='mb-3'>
                                        <img src="/static/images/w.svg" alt="" width={35} className="img-fluid" />
                                    </div>
                                    <b>Subscription Services</b> <br />
                                    <small style={{ fontSize: '12px' }}>
                                        One subscription, unlimited design requests for your business.
                                    </small>
                                    <div className="mt-3">
                                        <a href='/contact' className='btn-header btn-header-sm w-100'>
                                            <span className='btn-text'>Contact us</span>
                                            <div className='bp_icon-wrap mx-2'>
                                                <img src="/static/images/ic-1.webp" alt="" className='arrow' width={10} />
                                                <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={10} />
                                            </div>
                                            <div className="bg-header-black"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

        </>
    );
}