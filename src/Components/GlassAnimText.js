'use client';
import React, {useState, useEffect} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);
  return matches;
}

export default function GlassAnimText() {



 const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"] // Animation starts when section enters view, ends when it exits
    });

    // // Map scroll progress to motion values
    // const leftTextX = useTransform(scrollYProgress, [0, 0.5], [-300, -100]); // Starts left, reaches center at scroll midpoint
    // const rightTextX = useTransform(scrollYProgress, [0, 0.5], [300, 100]); // Starts right, reaches center at scroll midpoint

    const isMobile = useMediaQuery("(max-width: 575px)");

    // Option A: pick explicit numbers
    const start = isMobile ? 150 : 300;  // was 300 / -300 → 150 / -150 on mobile
    const mid   = isMobile ? 50  : 100;  // keep midpoint proportional
    const leftTextX  = useTransform(scrollYProgress, [0, 0.5], [-start, -mid]);
    const rightTextX = useTransform(scrollYProgress, [0, 0.5], [ start,  mid]);

  return (
    <>
         <section ref={sectionRef} className="padding bg-glass-img">
            <div className="container">
                <motion.h2 style={{ x: leftTextX }} className='h1_big_text h1_big_text1 mb-1'>our award &</motion.h2>
                
                <motion.h2 style={{ x: rightTextX}} className='h1_big_text h1_big_text2'>achievements</motion.h2>

                <div className="row gx-0 mt-10">
                    <div className="col-lg-3 mt-lg-0 mt-3 border-right-1">
                        <div className="glass-cardd">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h4 className='text-dd2'>
                                        01
                                    </h4>
                                </div>
                                <div className='ball-blue'>
                                    <img src="/static/images/ic-1.webp" alt="" width={15} className="img-fluid" />
                                </div>
                            </div>
                            <div>
                                <h2>
                                500+ Happy
                                clients
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-lg-0 mt-3 border-right-1">
                        <div className="glass-cardd">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h4 className='text-dd2'>
                                        02
                                    </h4>
                                </div>
                                <div className='ball-blue'>
                                    <img src="/static/images/ic-1.webp" alt="" width={15} className="img-fluid" />
                                </div>
                            </div>
                            <div>
                                <h2>
                                10+ Design
                                awards
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-lg-0 mt-3 border-right-1">
                        <div className="glass-cardd">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h4 className='text-dd2'>
                                        03
                                    </h4>
                                </div>
                                <div className='ball-blue'>
                                    <img src="/static/images/ic-1.webp" alt="" width={15} className="img-fluid" />
                                </div>
                            </div>
                            <div>
                                <h2>
                                $600 M+
                                funding
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-lg-0 mt-3">
                        <div className="glass-cardd">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h4 className='text-dd2'>
                                        04
                                    </h4>
                                </div>
                                <div className='ball-blue'>
                                    <img src="/static/images/ic-1.webp" alt="" width={15} className="img-fluid" />
                                </div>
                            </div>
                            <div>
                                <h2>
                                x5 Growth of
                                brand       
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section> 


    
    </>
  )
}
