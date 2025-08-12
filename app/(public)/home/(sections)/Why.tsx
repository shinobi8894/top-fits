"use client";

import GradientButton from "@/components/custom/gradient-button";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyOurLinks() {
  const allCards = [
    {
      icon: "/assets/imgs/bag.png",
      title: "Quality & saving",
      desc: "Sourcing products only with the best value for your investments",
      size: "small",
    },
    {
      icon: "/assets/imgs/shield.png",
      title: "Payment Security",
      desc: "More than 10 payment methods are available to use to purchase",
      size: "large",
    },
    {
      icon: "/assets/imgs/hands.png",
      title: "No account yet?",
      desc: "Sign up now in order to start shopping, one personalized item at a time.",
      button: { label: "Create an account" },
      highlight: true,
      size: "large",
    },
    {
      icon: "/assets/imgs/camera.png",
      title: "QC Photos",
      desc: "The highest quality photos to help ensure full transparency",
      size: "large",
    },
    {
      icon: "/assets/imgs/clock.png",
      title: "24/7 support",
      desc: "We offer help whenever needed, no matter the date, or time",
      size: "small",
    },
  ];

  const [cards, setCards] = useState(allCards);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mainCard = allCards.find((c) => c.button)!;

      if (width < 768) {
        setCards([mainCard]);
      } else if (width < 1280) {
        setCards([allCards[0], mainCard, allCards[allCards.length - 1]]);
      } else {
        setCards(allCards);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".why-title", { autoAlpha: 0, y: 50 });
      gsap.set(".why-cards", { autoAlpha: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.to(".why-title", {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }).to(".why-cards", {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, [cards]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black py-16 flex flex-col items-center bg-gradient-to-b from-[#000000] relative to-[#11100E]"
    >
      <Image
        src={"/assets/imgs/why-bg.png"}
        width={1920}
        height={350}
        alt="bg"
        className="absolute top-0"
      />

      {/* Title */}
      <div className="relative why-title">
        <h1 className="uppercase font-oswald text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[1.2] font-bold max-w-[650px] text-center mb-20 text-white">
          WONDERING WHY OUR LINKS?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#DC9B39] to-[#FFC670]">
            WONDER NO MORE
          </span>
        </h1>
        <Image src={"/assets/imgs/link.png"} width={40} height={40} alt="bg" className="absolute -top-[30px] left-1/2" />
        <Image src={"/assets/imgs/link.png"} width={40} height={40} alt="bg" className="absolute top-0 left-0" />
        <Image src={"/assets/imgs/link.png"} width={40} height={40} alt="bg" className="absolute -left-[30px] bottom-[39px]" />
        <Image src={"/assets/imgs/link.png"} width={40} height={40} alt="bg" className="absolute top-0 right-0" />
        <Image src={"/assets/imgs/link.png"} width={40} height={40} alt="bg" className="absolute bottom-0 right-0" />
      </div>

      {/* Cards wrapper */}
      <div className="why-cards grid grid-cols-1 items-center sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 px-4 gap-6 font-sf-impact w-full">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative h-fit flex flex-col items-center rounded-xl p-6 text-center transition-all duration-300
              ${
                card.highlight
                  ? "bg-[#191919]"
                  : "bg-[#191919] opacity-70 hover:opacity-100"
              }
            `}
          >
            {/* Icon area */}
            <div
              className={`bg-[#0E0D0B] relative rounded-[16px] flex items-center justify-center overflow-hidden mb-4
                ${card.size === "small" ? "h-[220px]" : "h-[260px]"} w-full
              `}
            >
              <div className="absolute top-0 rounded-full left-1/2 -translate-x-1/2 w-full max-w-[80px] h-[2px] bg-primary" />
              <Image
                src={card.icon}
                alt={card.title}
                width={card.size === "small" ? 180 : 250}
                height={card.size === "small" ? 120 : 187}
                className="object-contain"
              />
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold mb-2 text-white">
              {card.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{card.desc}</p>

            {/* Button */}
            {card.button && (
              <GradientButton className="w-full max-w-[280px] rounded-full inner-shadow font-sf-impact font-semibold mb-5">
                <span>Register on TopFits</span>
              </GradientButton>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
