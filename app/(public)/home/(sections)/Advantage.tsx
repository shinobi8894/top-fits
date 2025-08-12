'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ADVANTAGE_CARDS_DATA } from "@/constants/cards";
import AdvantageCard from "../(components)/AdvantageCard";

gsap.registerPlugin(ScrollTrigger);

export default function AdvantageSection() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // Animate title
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%", // when title is 80% into view
                    },
                }
            );
        }

        // Animate each card
        if (cardsRef.current.length) {
            gsap.fromTo(
                cardsRef.current,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current[0],
                        start: "top 85%",
                    },
                }
            );
        }
    }, []);

    return (
        <section className="w-full flex flex-col items-center justify-center !bg-background relative z-20 px-4 pt-20">
            <h1
                ref={titleRef}
                className="uppercase font-oswald text-[clamp(1.75rem,4vw,3.75rem)] /* 28px → 60px */
          leading-[1.2] mb-4 font-bold max-w-[650px] text-center mb-4 opacity-0"
            >
                TRENDING PRODUCTS HAND PICKED <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#DC9B39] to-[#FFC670] relative inline-block">FOR YOU</span>
            </h1>

            <div className="grid w-full max-w-[1920px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {ADVANTAGE_CARDS_DATA.map((card, index) => (
                    <div
                        key={index}
                        ref={(el: any) => (cardsRef.current[index] = el!)}
                        className="opacity-0 transform"
                    >
                        <AdvantageCard
                            imgSrc={card.imgSrc}
                            imgAlt={card.imgAlt}
                            title={card.title}
                            highlight={card.highlight}
                            description={card.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
