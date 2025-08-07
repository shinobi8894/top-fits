"use client";

import Loader from "@/components/custom/loader";
import Header from "@/components/layout/header";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

export default function PublicLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [isLoading, setIsLoading] = useState(true);  // Controls when content appears
    const [showLoader, setShowLoader] = useState(true); // Controls loader DOM

    useEffect(() => {
        // Disable scrolling while loader is visible
        document.body.style.overflow = "hidden";

        const onPageLoad = () => {
            setTimeout(() => {
                setIsLoading(false); // Content will be visible
            }, 2000); // Wait 2s after load
        };

        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad);
        }

        return () => window.removeEventListener("load", onPageLoad);
    }, []);

    // Once loader finishes animation → enable scrolling
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
                <Header />
                {isLoading ? null : children}
            </ReactLenis>
        </>
    );
}
