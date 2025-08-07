import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../logo";

export default function Loader() {
    const logoRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Animate the logo (pulse and rotate slightly)
        gsap.fromTo(
            logoRef.current,
            { scale: 1, opacity: 0 },
            {
                scale: 1.2,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                yoyo: true,
                repeat: -1,
            }
        );
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col gap-6 items-center justify-center">
            <div ref={logoRef}>
                <Logo />
            </div>
        </div>
    );
}
