'use client'

import { useRef, useEffect } from "react";
import gsap from "gsap";
import HeaderContent from "./header-content";

export default function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            headerRef.current,
            {
                y: -50,
                opacity: 0,
                delay: 2
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <header
            ref={headerRef}
            className="text-white w-full flex flex-row justify-center py-[50px] px-10"
        >
            <HeaderContent />
        </header>
    );
}
