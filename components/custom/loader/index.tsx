import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../logo";

export default function Loader({ onFinish }: { onFinish: () => void }) {
    const logoRef = useRef(null);
    const wrapperRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);

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

    useEffect(() => {
        const handleFadeOut = () => {
            gsap.to(wrapperRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                onComplete: onFinish,
            });
        };

        if (document.readyState === "complete") {
            setTimeout(handleFadeOut, 2000);
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
            {/* Video container */}
            <div className="relative w-[300px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src="/assets/vids/loader.mp4"
                    autoPlay
                    muted
                    playsInline
                />
            </div>
        </div>
    );
}
