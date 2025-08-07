import GradientButton from "@/components/custom/gradient-button";
import { ArrowRight, Sun } from "lucide-react";
import Image from "next/image";

export default function ActionButtons() {
    return (
        <div className="flex flex-row items-center gap-3">
            <GradientButton className="inner-shadow">
                <Sun />
            </GradientButton>

            <GradientButton className="inner-shadow">
                <Image
                    src="/assets/imgs/dragon.png"
                    alt="dragon"
                    width={24}
                    height={24}
                />
            </GradientButton>

            <GradientButton
                variant="secondary"
                size="auto"
                className="!pl-6 overflow-hidden"
            >
                <span>Click here</span>
                <div className="h-full w-[50px] flex flex-row items-center ml-6 justify-center bg-gradient-to-b from-[#FF7925] to-[#FFD460] inner-shadow">
                    <ArrowRight />
                </div>
            </GradientButton>
        </div>
    );
}