import {useEffect, useRef} from "react";
import "../style/Header.css"
import gsap from "gsap";

function Header () {
  const header1 = useRef(null);
  const header2 = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null)


  useEffect(() => {
    const text = [header1.current, header2.current, image1.current, image2.current, image3.current];
    const tl = gsap.timeline();

    tl.set(text, {y: 50, opacity: 0})
    tl.to(header1.current, {y: -40, opacity: 1, duration: 1,  ease: "back.inOut"})
    tl.to(header1.current, {y:  -80, opacity: 0, duration: 0.8,  ease: "back.out"})
    tl.to(header2.current, {y: -40, opacity: 1, duration: 1, ease: "back.inOut"})
    tl.to(header2.current, {y:  -80, opacity: 0, duration: 0.8,  ease: "back.out"})

    tl.set(image1.current, {y: 0, opacity: 1}) 
    tl.to(image1.current, {scale: 1, ease: "power1"})
    tl.to(image1.current, {scale: 0.2})
    tl.to(image1.current, {scale: 0.3})
    tl.to(image1.current, {opacity: 0, duration:0.4})


    tl.set(image2.current, { scale: 5.5, y: 0, x: 0, opacity: 1, });
    tl.to(image2.current, {scale: 0.4, y: 0, y: 0, opacity:1, duration: 2 })
    tl.set(image3.current, {scale : 1.5, opacity:1})

    
  }, [])

  return (
    <>
    <div className="header-container" style={{position: "relative"}}>
      <div className="header-1" ref={header1} style={{position: "absolute"}}>
        <b>Capek banget</b>
      </div>
      <div className="header-2" ref={header2} style={{position: "absolute"}}>
        <b>AAAAAAAAAAAAAA</b>
      </div>
      <div className="header-image-1" ref={image1} style={{position: "absolute"}}>
      <img src="https://framerusercontent.com/modules/c8mJrTPIqkx5l0MUgmyY/ezXUcutlEwTxfTpyBQxd/assets/JGv9jLVFG8n8Q8LmB1PFIpzbZo.png" alt="" />
      </div>

      <div className="header-image-2" ref={image2} style={{position: "absolute"}}>
        <img src="https://framerusercontent.com/modules/c8mJrTPIqkx5l0MUgmyY/ezXUcutlEwTxfTpyBQxd/assets/512/9aV5yKF0n3MKIlDKf0iVHhuaHc.png" alt="" />
      </div>

      <div className="header-image-3" ref={image3}>
        <img src="https://framerusercontent.com/images/DhDsfyks1iwAWu29uci5zpO8.jpg" alt="" />
      </div>
    </div>
    </>
  )
}

export default Header