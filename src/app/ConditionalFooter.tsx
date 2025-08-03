"use client";
// this component conditionally renders the footer based on the current path
// if the path starts with '/blogs', the footer will not be rendered
import React from 'react'
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

const ConditionalFooter = () => {
    const pathname = usePathname();
    const hideFooter = pathname.startsWith('/blogs');

    return (
        <>
            {!hideFooter && <Footer />}
        </>
    );
};

export default ConditionalFooter;
