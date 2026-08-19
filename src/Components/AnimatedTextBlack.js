import React, {forwardRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedTextBlack = forwardRef((props, ref) => {
    
    const { scrollYProgress: scrollYProgress1} = useScroll({
        target: ref,
        offset: ["start end", "end start"] // Adjust trigger points
    });
    const scaleX = useTransform(scrollYProgress1, [0, 0.8], [1, 0]);
    
    
    return (


    <>
    <div className='' ref={ref}>
        <div className='invert-item'>
            <div className="h2-1-anim-black">{props.text1}</div>
            <motion.div className="anim-layer-black" style={{ scaleX, transformOrigin: "right"}}></motion.div>
        </div>
        <div className='invert-item'>
            <div className="h2-2-anim-black">{props.text2}</div>
            <motion.div className="anim-layer2-black" style={{ scaleX, transformOrigin: "right" }}></motion.div>
        </div>
    </div> 
    </>
  );
});

export default AnimatedTextBlack;