import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import TrustedBy from '@/Components/TrustedBy'
import GlassAnimText from '@/Components/GlassAnimText';
import Testimonials from '@/Components/Testimonials';
import Servicebanner from '@/Components/ServicesComponents/Servicebanner';
import ServiceImageText from '@/Components/ServicesComponents/ServiceImageText_R';
import ServiceIndustry from '@/Components/ServicesComponents/ServiceIndustry';
import ServiceDesign from '@/Components/ServicesComponents/ServiceDesign';
import ServiceStickCards from '@/Components/ServiceStickCards';
import Services from "@/Components/Services";


// Define the slugs to pre-render
export async function generateStaticParams() {
  return [
    { service: "ui-ux-design" },
    { service: "web-design" },
    { service: "product-design" },
    { service: "saas-design" },
    { service: "branding" },
    { service: "ux-audit" },
    { service: "mobile-app" },
    { service: "design-system" },
    { service: "webflow" },
    { service: "build-product" },
    { service: "conversion-rate" },
  ];
}

const serviceData = {
  "ui-ux-design": {
    // SEO
    title: "UI UX Design",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"UI/UX design services",                                                                                                                                                      banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",

    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",

    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"card-blue",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"card-blue",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-blue",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-blue",

    // serviceIndustry 
    heading1:"Industry expertise",
    heading2:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
  "web-design": {
    // SEO
    title: "Web Design",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"Web design services",                                                                                                                                                      banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",
    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",

    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity2", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"bg-white",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity3", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"bg-darkyellow",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity4", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-purple",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity5", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-black",

     // ServiceStickycards6
    card1_heading_6_val:"Branding Identity6", 
    card1_para_6_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_6_val:"/static/images/1.webp",
    bg_color_6_val:"card-green",

    // serviceIndustry 
    heading1_indus:"Industry expertise",
    heading2_indus:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
  "product-design": {
    // SEO
    title: "Product Design",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"Product design services",                                                                                                                                                      banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",
    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",


    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"bg-white",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"bg-darkyellow",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-purple",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-black",

     // ServiceStickycards6
    card1_heading_6_val:"Branding Identity", 
    card1_para_6_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_6_val:"/static/images/1.webp",
    bg_color_6_val:"card-green",

    // serviceIndustry 
    heading1:"Industry expertise",
    heading2:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
  "saas-design": {
    // SEO
    title: "SaaS Design",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"SaaS design services",                                                                                                                                                      banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",
    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",


    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"bg-white",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"bg-darkyellow",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-purple",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-black",

     // ServiceStickycards6
    card1_heading_6_val:"Branding Identity", 
    card1_para_6_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_6_val:"/static/images/1.webp",
    bg_color_6_val:"card-green",

    // serviceIndustry 
    heading1:"Industry expertise",
    heading2:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
  "branding": {
    // SEO
    title: "Branding",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"Branding",                                                                                                                                                     banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",
    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",

    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"bg-white",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"bg-darkyellow",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-purple",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-black",

     // ServiceStickycards6
    card1_heading_6_val:"Branding Identity", 
    card1_para_6_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_6_val:"/static/images/1.webp",
    bg_color_6_val:"card-green",

    // serviceIndustry 
    heading1:"Industry expertise",
    heading2:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
  "ux-audit": {
    // SEO
    title: "UX Audit",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"UX Audit",                                                                                                                                                     banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",
    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",


    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"bg-white",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"bg-darkyellow",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-purple",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-black",

     // ServiceStickycards6
    card1_heading_6_val:"Branding Identity", 
    card1_para_6_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_6_val:"/static/images/1.webp",
    bg_color_6_val:"card-green",

    // serviceIndustry 
    heading1:"Industry expertise",
    heading2:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
  "mobile-app": {
    // SEO
    title: "Mobile App",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"Mobile App",                                                                                                                                                     banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",
    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",


    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"bg-white",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"bg-darkyellow",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-purple",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-black",

     // ServiceStickycards6
    card1_heading_6_val:"Branding Identity", 
    card1_para_6_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_6_val:"/static/images/1.webp",
    bg_color_6_val:"card-green",

    // serviceIndustry 
    heading1:"Industry expertise",
    heading2:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
  "design-system": {
    // SEO
    title: "Design System",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"Design System",                                                                                                                                                     banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",
    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",


    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"bg-white",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"bg-darkyellow",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-purple",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-black",

     // ServiceStickycards6
    card1_heading_6_val:"Branding Identity", 
    card1_para_6_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_6_val:"/static/images/1.webp",
    bg_color_6_val:"card-green",

    // serviceIndustry 
    heading1:"Industry expertise",
    heading2:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
  "webflow": {
    // SEO
    title: "Webflow",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"Webflow",                                                                                                                                                     banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",
    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",


    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"bg-white",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"bg-darkyellow",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-purple",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-black",

     // ServiceStickycards6
    card1_heading_6_val:"Branding Identity", 
    card1_para_6_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_6_val:"/static/images/1.webp",
    bg_color_6_val:"card-green",

    // serviceIndustry 
    heading1:"Industry expertise",
    heading2:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
  "build-product": {
    // SEO
    title: "Build Product (MVP)",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"Build Product (MVP)",                                                                                                                                                     banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",
    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",


    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"bg-white",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"bg-darkyellow",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-purple",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-black",

     // ServiceStickycards6
    card1_heading_6_val:"Branding Identity", 
    card1_para_6_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_6_val:"/static/images/1.webp",
    bg_color_6_val:"card-green",

    // serviceIndustry 
    heading1:"Industry expertise",
    heading2:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
  "conversion-rate": {
    // SEO
    title: "Conversion Rate (CRO)",
    description: "Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey",
    // banner 
    banner_title:"Conversion Rate (CRO)",                                                                                                                                                     banner_description_1:"Launch faster. Convert better. Retain longer. Wavespace helps startups design products that users want to use. From MVP to scale, our UI/UX designs ensure a smooth user journey.",
    banner_sub_description:"Every $1 invested in UX can return up to $100 in value",
    btn_1_text:"Book a free call", 
    btn_2_text:"View Services",
    image_link: "/static/images/services/1st.png",
    // Imagewithtext 
    heading_2_val:"Why Wavespace? We care like co-founders.",
    subheading_2_val:"We care about what your users require and what your product requires to be, hence, you launch with confidence and grow with purpose.",
    t_1_val:"User-First, Business-Aligned",
    p_1_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_2_val:"User-First, Business-Aligned",
    p_2_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_3_val:"User-First, Business-Aligned",
    p_3_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_4_val:"User-First, Business-Aligned",
    p_4_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    t_5_val:"User-First, Business-Aligned",
    p_5_val:"Every screen we create has user behavior as a starting point and end goal, so that your business objectives are visible, so that your product is intuitive and achieves purpose.",
    left_val:false,
    img_url:"/static/images/services/2nd.webp",


    // ServiceStickycards
    card1_heading_val:"Branding Identity", 
    card1_para_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_val:"/static/images/1.webp",
    bg_color_val:"card-blue",

     // ServiceStickycards2
    card1_heading_2_val:"Branding Identity", 
    card1_para_2_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_2_val:"/static/images/1.webp",
    bg_color_2_val:"bg-white",

    // ServiceStickycards3
    card1_heading_3_val:"Branding Identity", 
    card1_para_3_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_3_val:"/static/images/1.webp",
    bg_color_3_val:"bg-darkyellow",

     // ServiceStickycards4
    card1_heading_4_val:"Branding Identity", 
    card1_para_4_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_4_val:"/static/images/1.webp",
    bg_color_4_val:"card-purple",

     // ServiceStickycards5
    card1_heading_5_val:"Branding Identity", 
    card1_para_5_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_5_val:"/static/images/1.webp",
    bg_color_5_val:"card-black",

     // ServiceStickycards6
    card1_heading_6_val:"Branding Identity", 
    card1_para_6_val:"Create a trusted, global brand with our<br /> expert designs and strategies. We help<br /> improve your brand's visibility, credibility,<br /> and connection with customers both online<br /> and offline.",
    image_url_6_val:"/static/images/1.webp",
    bg_color_6_val:"card-green",

    // serviceIndustry 
    heading1:"Industry expertise",
    heading2:"across globally" ,
    text_h_1:"Finance & Fintech",
    text_p_1:"We provide clear, safe user interfaces for making payments, transferring funds, and using accounts. Users can move through your platform with confidence and trust.",            
    text_h_2:"E-Commerce & DTC" ,
    text_p_2:"Your website needs to convert more than just appear attractive. Our layouts are built to load quickly and to focus customers on buying, without much difficulty.",
            
    text_h_3:"SaaS & B2B Platforms" ,
    text_p_3:"Onboarding, dashboards, and role-based flows, all mapped for clarity and growth. Your users get where they need to go without second-guessing.",
                
    text_h_4:"Web3, AI & Emerging Tech" ,
    text_p_4:"We create simple user experiences from confusing interfaces. Your product gets smarter even though it doesn’t overwhelm users who are new to it.",

    text_h_5:"EdTech & HealthTech" ,
    text_p_5:"We simplify navigation across multiple user roles, states, and learning paths. So your platform becomes easy to adopt and hard to leave.",

    text_h_6:"Hospitality & Legal Services",
    text_p_6:"Booking flows, portals, and data inputs, all made personal and human. We blend clarity with trust so users stay longer and feel safer.",
  },
};
 
export default function ServicePage({ params }) {
  const service = serviceData[params.service];

  if (!service) {
    return <h1>Service not found</h1>;
  }

  return (
    <>
  
          <>
                <Servicebanner heading1={service.banner_title} heading2={service.banner_description_1} qoutes_text={service.banner_sub_description} btn_1_text={service.btn_1_text} btn_2_text={service.btn_2_text} side_img_url={service.image_link} />    
                <section className="py-5">
                    <div className="container">
                        <TrustedBy/>
                    </div>
                </section>
        
                <ServiceImageText img_url={service.img_url} 
                heading={service.heading_2_val}
                subheading={service.subheading_2_val}
                t_1={service.t_1_val} p_1={service.p_1_val}
                t_2={service.t_2_val} p_2={service.p_2_val}
                t_3={service.t_3_val} p_3={service.p_3_val}
                t_4={service.t_4_val} p_4={service.p_4_val}
                t_5={service.t_5_val} p_5={service.p_5_val}
                left={service.left_val}
                />
        
        
                <section className="service-card">
                    <ServiceStickCards card1_heading={service.card1_heading_val} card1_para={service.card1_para_val} image_url={service.image_url_val} bg_color={service.bg_color_val} />
        
                    <ServiceStickCards card1_heading={service.card1_heading_2_val} card1_para={service.card1_para_2_val} image_url={service.image_url_2_val} bg_color={service.bg_color_2_val} />
        
                    <ServiceStickCards card1_heading={service.card1_heading_3_val} card1_para={service.card1_para_3_val} image_url={service.image_url_3_val} bg_color={service.bg_color_3_val} />
        
                    <ServiceStickCards card1_heading={service.card1_heading_4_val} card1_para={service.card1_para_4_val} image_url={service.image_url_4_val} bg_color={service.bg_color_4_val} />
        
                    <ServiceStickCards card1_heading={service.card1_heading_5_val} card1_para={service.card1_para_5_val} image_url={service.image_url_5_val} bg_color={service.bg_color_5_val} />
        
                    <ServiceStickCards card1_heading={service.card1_heading_6_val} card1_para={service.card1_para_6_val} image_url={service.image_url_6_val} bg_color={service.bg_color_6_val} />
                    
                </section> 
        
                <ServiceIndustry heading1={service.heading1_indus} heading2={service.heading2_indus} 
                text_h_1={service.text_h_1} text_p_1={service.text_p_1}
                
                text_h_2={service.text_h_2} text_p_2={service.text_p_2}
                
                text_h_3={service.text_h_3} text_p_3={service.text_p_3}
                
                text_h_4={service.text_h_4} text_p_4={service.text_p_4}
        
                text_h_5={service.text_h_5} text_p_5={service.text_p_5}
        
                text_h_6={service.text_h_6} text_p_6={service.text_p_6}
                
                />
                <ServiceDesign/>
                
                <GlassAnimText/>
                <Testimonials/>
        
                
                <section className="padding">
                    <div className="container">
                        <div className="blue-img text-white ">
                            <div className="pill-about py-1 mb-4">
                                <img src="/static/images/fire.webp" alt="" width={20} /> <span className='mx-3 fs-14'>Only 4 seats per month</span>
                            </div>
                            <h1 className='fw-normal fs-60'>Try our UI/UX design service that is built<br></br> for you — just $500 for one week.</h1>
                            <p>... and get the answers on:</p>
                            <div className='d-flex flex-md-nowrap flex-wrap'>
                                <div className="pill-about me-4 mb-md-0 mb-3">
                                    <img src="/static/images/wite-tick.webp" alt="" /> <span className='mx-3'>See how we plan, design and build</span>
                                </div>
        
                                 <div className="pill-about mb-md-0 mb-3">
                                    <img src="/static/images/wite-tick.webp" alt="" /> <span className='mx-3'>Get a full view of our UX process, made for you</span>
                                </div>
                            </div>
                             <div className='d-flex flex-md-nowrap flex-wrap mt-2 mb-4'>
                                <div className="pill-about me-4 mb-md-0 mb-3">
                                    <img src="/static/images/wite-tick.webp" alt="" /> <span className='mx-3'>See how we plan, design and build</span>
                                </div>
        
                                 <div className="pill-about mb-md-0 mb-3">
                                    <img src="/static/images/wite-tick.webp" alt="" /> <span className='mx-3'>Get a full view of our UX process, made for you</span>
                                </div>
                            </div>
                            <div>
                                <a href='' className='btn-header bg-yellow-btn'>
                                    <span className='btn-text'>Book an intro call</span>
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
                </section>
        
            </>

    </>
  );
}
