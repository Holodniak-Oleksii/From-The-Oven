import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

const useAnimation = (ref) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".left-appear",
        {
          autoAlpha: 0,
          x: -800,
          duration: 1,
          ease: "power2",
        },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power2",
          scrollTrigger: {
            trigger: ".left-appear",
            start: "top center",
            end: `100% 25%`,
            toggleActions: "restart reverse restart restart",
          },
        }
      );
      gsap.fromTo(
        ".right-appear",
        {
          autoAlpha: 0,
          x: 800,
          duration: 1,
          ease: "power2",
        },
        {
          duration: 1,
          autoAlpha: 1,
          x: 0,
          ease: "power2",
          scrollTrigger: {
            trigger: ".left-appear",
            start: "top center",
            end: `100% 25%`,
            toggleActions: "restart reverse restart restart",
          },
        }
      );
    }, ref);
    return () => ctx.revert(); // cleanup!
  }, [ref]);
};
export default useAnimation;
