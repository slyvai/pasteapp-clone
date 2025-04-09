import { useRef , useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../style/Section3.css";
import {  Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  const section3ContainerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      section3ContainerRef.current,{
        transform: "perspective(700px) rotateX(20deg)",
      }, {
        scrollTrigger: {
          trigger: ".section3-container",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
        },
        transform: "perspective(1000px) rotateX(0deg)",
        duration: 1,
        ease: "power2.out",
      }
    )
  }, [])
  return (
    <div className="section3-container">
      <div className="section3-title">
      <h1>Resizable Window <br />
      <span>Your Space, Your Rules</span></h1>
      <p>Whether you want more items or need larger previews, Paste adapts <br /> to your needs. It’s not just about flexibility, it’s about crafting <br /> a workspace that elevates productivity.</p>
      </div>
      <div className="section3-image-container">
      <div className="section3-image" ref={section3ContainerRef}>
      <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide><img src="https://framerusercontent.com/images/RCV6jPA5hRYTe1mMyfXXNwCrR1Y.jpg" alt="" /> <p>The large size delivers more space for detailed previews</p></SwiperSlide>
      <SwiperSlide><img src="https://framerusercontent.com/images/QHMMUthDIUxBk5MfYGY9NGPoQ.jpg" alt="" /><p>The large size delivers more space for detailed previews</p></SwiperSlide>
      <SwiperSlide><img src="https://framerusercontent.com/images/G0IleaYmabk3tuvTeB6K7PdckFc.jpg" alt="" /><p>The large size delivers more space for detailed previews</p></SwiperSlide>
    </Swiper>
      </div>
      </div>
    </div>
  );
}

export default Section3;