import { useEffect } from "react";
import gsap from "gsap";
import "../style/HoverComponent.css"

function HoverComponent() {

  const images = [
    "https://framerusercontent.com/images/j2KSfMROOnRMxthTZTxFhWU2ZEk.png?scale-down-to=512",
    "https://framerusercontent.com/images/LRW8TpgnamqDbqIeLH4YFIizo.png?scale-down-to=512",
    "https://framerusercontent.com/images/MHdRNTvXt7C56gNdk7vxdhhVUMQ.png?scale-down-to=512",
    "https://framerusercontent.com/images/tjFslIrii2zAbgwpgv88acKX94.png?scale-down-to=512",
    "https://framerusercontent.com/images/mOjeWW0R85ST6vSbp4NsqVp21k.png?scale-down-to=512",
    "https://framerusercontent.com/images/QHkLOR1e2hPGvIhTMAOeLf0iiI.png?scale-down-to=512",
    "https://framerusercontent.com/images/BaoJlOV474hfTXenp7mqpGnN7A.png?scale-down-to=512",
    "https://framerusercontent.com/images/BuegvK1yhbKVL0nuVa01UneIrU.png?scale-down-to=512",
    "https://framerusercontent.com/images/Oc81fd2Au71f2UmpMtKlhZcQcj0.png?scale-down-to=512",
    "https://framerusercontent.com/images/EWguGk5v4KfiMZIncNMoVZyUfF4.png?scale-down-to=512",
    "https://framerusercontent.com/images/zVEmxPBCyTF0qlp2x4NnROYZvM.png?scale-down-to=512",
    "https://framerusercontent.com/images/eHdMlQZUjVqhhiT0dZE8onugIc0.png?scale-down-to=512",
    "https://framerusercontent.com/images/oIWj5rD83R2smndIfKHeVdv5A.png?scale-down-to=512",
  ];

  useEffect(() => {
    const images = document.querySelectorAll(".hover-image");

    images.forEach((image) => {
      const handleEnter = () => {
        gsap.to(image, { y: -100});
      };

      const handleLeave = () => {
        gsap.to(image, { y: 0 });
      };

      image.addEventListener("mouseenter", handleEnter);
      image.addEventListener("mouseleave", handleLeave);

  
      return () => {
        image.removeEventListener("mouseenter", handleEnter);
        image.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

 return (
   <>
   <div className="hover-title">
      <h1>Fresh New Look <span className="hover-title-span">Elegance Infused With Efficiency</span></h1>
      <p>Every pixel has been refined and polished with care, resulting  <br />in a harmonious balance between aesthetics and usability.</p>
    </div>
   <div className="hover-container">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Image ${index}`}
        className="hover-image"
      />
    ))}
   </div>
   </>
 )
}

export default HoverComponent;