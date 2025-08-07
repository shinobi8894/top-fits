import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../logo";

export default function Loader({ onFinish }: { onFinish: () => void }) {
    const logoRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        // Logo pulse animation
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

    // Listen for page load complete and fade out
    useEffect(() => {
        const handleFadeOut = () => {
            gsap.to(wrapperRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                onComplete: onFinish,
            });
        };

        // Wait until page is loaded before fading
        if (document.readyState === "complete") {
            setTimeout(handleFadeOut, 2000); // 2s delay after load
        } else {
            window.addEventListener("load", () => {
                setTimeout(handleFadeOut, 2000);
            });
        }
    }, [onFinish]);

    return (
        <div
            ref={wrapperRef}
            className="fixed inset-0 z-50 bg-black flex flex-col gap-6 items-center justify-center"
        >
            <div ref={logoRef}>
                <Logo />
            </div>
        </div>
    );
}
