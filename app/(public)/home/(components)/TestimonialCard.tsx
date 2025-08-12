import { TESTIMONIALS_DATA } from "@/constants/client";
import { useEffect, useRef } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar';
import StarIcon from "@/components/custom/icons/Star";
import QuoteIcon from "@/components/custom/icons/Quote";

export default function TestimonialCard({
    name,
    role,
    avatar,
    initials,
    rating,
    text,
}: typeof TESTIMONIALS_DATA[0]) {

    return (
        <div
            className="testimonial-card group bg-[#191919] p-8 rounded-[10px] cursor-pointer"
        >
            <div className="flex flex-col w-full sm:flex-row justify-between sm:items-center w-full mb-7">
                <div className="flex flex-row items-center gap-3 sm:mb-0 mb-5">
                    <Avatar className="w-[60px] h-[60px]">
                        <AvatarImage src={avatar} alt={name} />
                        <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="text-primary text-xl">{name}</h3>
                        <p className="text-gray font-sf-impact">{role}</p>
                    </div>
                </div>
                <div className="bg-[#363533] p-2 rounded-[5px] grid grid-cols-5 gap-1.5 max-w-[150px]">
                    {Array.from({ length: rating }).map((_, i) => (
                        <div key={i} className="star-icon">
                            <StarIcon />
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-gray mb-4">{text}</p>
            <div className="flex w-full justify-end quote-icon">
                <div className='group-hover:rotate-15 transition duration-500'>
                    <QuoteIcon />
                </div>
            </div>
        </div>
    );
}