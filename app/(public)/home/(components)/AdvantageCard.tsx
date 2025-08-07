'use client';

import Image from 'next/image';

interface AdvantageCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    highlight: string;
    description: string;
}

export default function AdvantageCard({
    imgSrc,
    imgAlt,
    title,
    highlight,
    description,
}: AdvantageCardProps) {
    return (
        <div className="relative group cursor-pointer">
            <div className="font-sf-impact flex flex-col items-center py-20 bg-background z-20 relative">
                <div className='w-full max-w-[410px] h-[370px] flex justify-center items-center'>
                    <Image src={imgSrc} alt={imgAlt} width={410} height={350} />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center">
                    {title} <span className="text-primary">{highlight}</span>
                </h2>
                <p className="text-gray max-w-[260px] text-center">{description}</p>
            </div>
            <div className="absolute z-10 -bottom-[8px] right-[80px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none">
                <div className="w-[100px] h-[3px] bg-primary rounded-br-full rounded-bl-full" />
                <div className="w-[140px] h-[6px] bg-primary rounded-br-full rounded-bl-full opacity-60 blur-2xl shadow-[0_0_50px_30px_rgba(255,161,63,0.8)] mt-[-2px] ml-[-20px]" />
            </div>
        </div>
    );
}
