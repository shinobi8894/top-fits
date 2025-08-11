"use client";

import Loader from "@/components/custom/loader";
import Header from "@/components/layout/header";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

export default function PublicLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const onPageLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };

        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
        }

        return () => window.removeEventListener("load", onPageLoad);
    }, []);

    const handleLoaderFinish = () => {
        setShowLoader(false);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            {showLoader && <Loader onFinish={handleLoaderFinish} />}

            <ReactLenis
                root
                options={{
                    duration: 2.5,
                    touchMultiplier: 2,
                }}
            >
                {/* Pass trigger to header */}
                <Header animateIn={!isLoading && !showLoader} />
                {isLoading ? null : children}
            </ReactLenis>
        </>
    );
}
