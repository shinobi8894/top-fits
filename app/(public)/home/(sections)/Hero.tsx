import AnimatedSwiper from "../(components)/AnimatedSwiper";
import CTAButtons from "../(components)/CTAButtons";
import FloatingAvatarGroup from "../(components)/FloatingAvatarGroup";
import HeroData from "../(components)/HeroSection";

export default function HeroSection() {
    return (
        <section className='overflow-hidden relative z-10'>
            <div className="flex flex-col items-center w-full z-10 relative mb-20 px-4">
                <HeroData />
                <CTAButtons />
                <FloatingAvatarGroup />
            </div>
            <AnimatedSwiper />
            <div className='absolute bottom-0 w-full'>
                <svg className="w-full" viewBox="0 0 1920 1331" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_224)">
                        <ellipse cx="951" cy="1790.5" rx="1022" ry="818.5" fill="#FFA13F" fillOpacity="0.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_224" x="-1150.82" y="-107.815" width="4203.63" height="3796.63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="539.908" result="effect1_foregroundBlur_1_224" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}