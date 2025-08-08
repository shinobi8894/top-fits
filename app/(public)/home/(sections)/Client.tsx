'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { TESTIMONIALS_DATA } from '@/constants/client';

gsap.registerPlugin(ScrollTrigger);

function StarIcon() {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.97731 0.567139L7.26364 4.52605H11.4263L8.05863 6.97278L9.34496 10.9317L5.97731 8.48495L2.60966 10.9317L3.89599 6.97278L0.528341 4.52605H4.69098L5.97731 0.567139Z"
        fill="#FFB443"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="55"
      height="38"
      viewBox="0 0 55 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="55" height="38">
        <rect x="0.0776367" y="0.350342" width="54.7475" height="36.9227" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M54.3718 23.0782C54.3718 11.1139 43.9378 0.958163 30.0259 2.07112V9.58359C37.8166 9.30535 43.3814 13.0616 44.6334 19.1829C43.5205 18.7655 42.4075 18.6264 41.4337 18.6264C36.1471 18.6264 32.3909 22.5217 32.3909 27.3909C32.3909 32.8166 36.5645 36.5728 42.6858 36.5728C50.0591 36.5728 54.3718 31.1472 54.3718 23.0782ZM24.7393 23.0782C24.7393 11.1139 14.3053 0.958168 0.393328 2.07112V9.5836C8.18404 9.30536 13.7488 13.0616 15.0009 19.1829C13.888 18.7655 12.775 18.6264 11.8012 18.6264C6.65372 18.6264 2.75837 22.5217 2.75837 27.3909C2.75837 32.8166 7.07109 36.5728 13.0532 36.5728C20.4266 36.5728 24.7393 31.1472 24.7393 23.0782Z"
          fill="#FFB443"
        />
      </g>
    </svg>
  );
}

function TestimonialCard({
  name,
  role,
  avatar,
  initials,
  rating,
  text,
}: typeof TESTIMONIALS_DATA[0]) {
  return (
    <div className="testimonial-card bg-[#191919] p-8 rounded-[10px] opacity-0 translate-y-10">
      <div className="flex flex-row justify-between items-center w-full mb-7">
        <div className="flex flex-row items-center gap-3">
          <Avatar className="w-[60px] h-[60px]">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-primary text-xl">{name}</h3>
            <p className="text-gray font-sf-impact">{role}</p>
          </div>
        </div>
        <div className="bg-[#363533] p-2 rounded-[5px] grid grid-cols-5 gap-1.5">
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
      </div>
      <p className="text-gray mb-4">{text}</p>
      <div className="flex w-full justify-end">
        <QuoteIcon />
      </div>
    </div>
  );
}

export default function ClientSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.testimonial-card');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-20 bg-gradient-to-b from-[#0C0C0C] to-[#101010]"
    >
      <div className="grid grid-cols-2 gap-7 xl:grid-cols-3">
        {TESTIMONIALS_DATA.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
