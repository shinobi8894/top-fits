"use client";

import Loader from "@/components/custom/loader";
import Header from "@/components/layout/header";
import { useEffect, useState } from "react";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const hideLoader = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Wait 2 seconds after load
        };

        if (document.readyState === 'complete') {
            hideLoader();
        } else {
            window.addEventListener('load', hideLoader);
        }

        return () => window.removeEventListener('load', hideLoader);
    }, []);

    if (isLoading) {
        return (
            <Loader />
        )

    }

    return (
        <>
            <Header />
            {
                children
            }
        </>
    )
}