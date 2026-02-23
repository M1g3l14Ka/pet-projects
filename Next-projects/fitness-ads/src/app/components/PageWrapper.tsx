'use client';

import { useState } from "react";
import { ITariff } from "../types/types"; 
import HeaderPage from "./HeaderClientComponent";
import MainClientComponent from "./MainClientComponent";
import FooterClientComponent from "./FooterClientComponent";

interface WrapperProps {
    tariffs: ITariff[];
}

export default function PageWrapper({ tariffs }: WrapperProps) {
    const [isExpired, setIsExpired] = useState(false);

    return (
        <div className="bg-[#1D1D20] min-h-screen text-white font-sans">
            <HeaderPage onTimeUp={() => setIsExpired(true)} />
            <MainClientComponent tariffs={tariffs} isExpired={isExpired} />
            <FooterClientComponent />
        </div>
    );
}