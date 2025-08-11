import Image from 'next/image';
import { useState } from 'react';
import GradientButton from '@/components/custom/gradient-button';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
    const [ctaSrc, setCtaSrc] = useState('/assets/imgs/cta.png');
    const [rightGraphicSrc, setRightGraphicSrc] = useState('/assets/imgs/right-graphic.png');
    const [leftGraphicSrc, setLeftGraphicSrc] = useState('/assets/imgs/left-graphic.png');

    const fallbackImg = '/assets/imgs/fallback.png'; // <- make sure this exists

    return (
        <section className="p-20 relative flex justify-center bg-gradient-to-r from-black to-[#11100E]">
            <div className="relative z-10 flex flex-row w-full max-w-[1920px] bg-primary rounded-[45px] overflow-hidden items-center gap-20 px-20">
                {/* Left content */}
                <div className="z-20 max-w-[550px]">
                    <span className="font-sf-impact">.GG/TOPFITS</span>
                    <h2 className="font-sf-impact text-4xl font-semibold mb-3">
                        Sourcing made simple, strategic, and successful.
                    </h2>
                    <p className="font-sf-impact mb-8">
                        From product discovery to supplier connections, we streamline every step of the sourcing
                        process, ensuring your business is always stocked with winning items
                    </p>
                    <div className="flex flex-col gap-3 max-w-[370px]">
                        <GradientButton className="w-full !h-button rounded-full inner-shadow font-sf-impact font-semibold">
                            <span>Register on TopFits</span>
                            <ArrowRight className="-rotate-45" />
                        </GradientButton>
                        <Button className="border border-primary w-full border-primary bg-black rounded-full font-sf-impact cursor-pointer h-button">
                            <span>Join Discord</span>
                            <ArrowRight className="-rotate-45" />
                        </Button>
                    </div>
                </div>

                {/* Main Image */}
                <div className="pt-20 w-full z-20">
                    <Image
                        src={ctaSrc}
                        alt="cta"
                        width={870}
                        height={465}
                        onError={() => setCtaSrc(fallbackImg)}
                    />
                </div>

                {/* Decorative graphics */}
                <Image
                    src={rightGraphicSrc}
                    alt="graphic"
                    width={370}
                    height={370}
                    className="absolute right-0 bottom-0"
                    onError={() => setRightGraphicSrc(fallbackImg)}
                />
                <Image
                    src={leftGraphicSrc}
                    alt="graphic"
                    width={370}
                    height={370}
                    className="absolute left-0 top-0"
                    onError={() => setLeftGraphicSrc(fallbackImg)}
                />

                {/* Overlay */}
                <div className="absolute left-0 right-0 top-0 z-10 bg-black opacity-40 w-full bottom-0" />
            </div>
        </section>
    );
}
