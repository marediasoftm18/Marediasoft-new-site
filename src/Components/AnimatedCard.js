import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function AnimatedCard() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale + Fade effects
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1]);      
  return (
    <>
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`wrap-card ${bgClass}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 my-auto">
            <div className="row">
              <div className="col-md-6">
                <h2 className="fw-bold fs-1">{title}</h2>
                <p className="mt-4">{description}</p>
                <div className="mt-4">
                  <a href='' className='btn-header bg-black-btn'>
                    <span className='btn-text'>{buttonText}</span>
                    <div className='bp_icon-wrap mx-2'>
                      <img src="/static/images/ic-1.webp" alt="" className='arrow' width={12} />
                      <img src="/static/images/ic-2.webp" alt="" className='arrow2' width={12} />
                    </div>
                    <div className="bg-header-black bg-blue"></div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 my-auto">
                <ul className='ul'>
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src={imageSrc} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}
