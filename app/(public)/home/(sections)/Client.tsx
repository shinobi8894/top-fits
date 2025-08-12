'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TESTIMONIALS_DATA } from '@/constants/client';
import TestimonialCard from '../(components)/TestimonialCard';

gsap.registerPlugin(ScrollTrigger);

export default function ClientSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.testimonial-card');

    cards.forEach((card, i) => {
      const stars = card.querySelectorAll('.star-icon');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      });

      // Card fade/slide in with delay per index
      tl.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.2, // step-by-step delay
        }
      );

      // Stars pop in after card is visible
      tl.fromTo(
        stars,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          stagger: 0.05,
          ease: 'back.out(2)',
        },
        '-=0.4'
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-[#0C0C0C] to-[#101010] flex flex-row justify-center"
    >
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 max-w-[1920px]">
        {TESTIMONIALS_DATA.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
