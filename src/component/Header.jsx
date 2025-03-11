import {useEffect, useRef} from "react";
import "../style/Header.css"
import gsap from "gsap";

function Header () {
  const header1 = useRef(null);
  const header2 = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);


  useEffect(() => {
    const text = [header1.current, header2.current, image1.current, image2.current];
    const tl = gsap.timeline();
    tl.set(text, {y: 50, opacity: 0})
    tl.to(header1.current, {y: -40, opacity: 1, duration: 0.7,  ease: "power1.in"}),
    tl.to(header1.current, {y:  10, opacity: 0, duration: 0.7,  ease: "power1.out"})
    tl.to(header2.current, {y: -40, opacity: 1, duration: 0.7, ease: "power1.in"})
    tl.to(header2.current, {y:  10, opacity: 0, duration: 0.7,  ease: "power1.out"})
    tl.to(image1.current, {y: 0, opacity: 1, scale: 0.8, duration: 0.7,  ease: "power1.out"})
    tl.to(image1.current, {y: 0, opacity: 1, scale: 0.2 ,  ease: "power1.out"})
    tl.to(image2.current, {y: 0, opacity: 1, scale: 1.5, zIndex: -1,})
  }, [])

  return (
    <>
    <div className="header-container" style={{position: "relative"}}>
      <div className="header-1" ref={header1} style={{position: "absolute"}}>
        <b>Your Workflow Amplified</b>
      </div>
      <div className="header-2" ref={header2} style={{position: "absolute"}}>
        <b>Once Again</b>
      </div>
      <div className="header-image-1" ref={image1} style={{position: "absolute"}}>
      <img src="https://framerusercontent.com/modules/c8mJrTPIqkx5l0MUgmyY/ezXUcutlEwTxfTpyBQxd/assets/9aV5yKF0n3MKIlDKf0iVHhuaHc.png" alt="" />
      </div>

      <div className="header-image-2" ref={image2} style={{position: "absolute"}}>
        <img src="https://framerusercontent.com/images/DhDsfyks1iwAWu29uci5zpO8.jpg" alt="" />
      </div>
    </div>
    </>
  )
}

export default Header