import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export interface ChromaItem {
    image: string;
    title: string;
    subtitle: string;
    location?: string;
    borderColor?: string;
    gradient?: string;
}

export interface ChromaGridProps {
    items?: ChromaItem[];
    className?: string;
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
    items,
    className = "",
    radius = 300,
    damping = 0.45,
    fadeOut = 0.6,
    ease = "power3.out",
}) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<SetterFn | null>(null);
    const setY = useRef<SetterFn | null>(null);
    const pos = useRef({ x: 0, y: 0 });

    // Using placeholder images for the demo data for sandbox compatibility
    const demo: ChromaItem[] = [
        {
            image: "https://placehold.co/300x300/F44336/FFFFFF?text=Alex",
            title: "Alex Rivera",
            subtitle: "Full Stack Developer",
            borderColor: "#4F46E5",
            gradient: "linear-gradient(145deg,#4F46E5,#000)",
        },
        {
            image: "https://placehold.co/300x300/4CAF50/FFFFFF?text=Jordan",
            title: "Jordan Chen",
            subtitle: "DevOps Engineer",
            borderColor: "#10B981",
            gradient: "linear-gradient(210deg,#10B981,#000)",
        },
        {
            image: "https://placehold.co/300x300/FFC107/000000?text=Morgan",
            title: "Morgan Blake",
            subtitle: "UI/UX Designer",
            borderColor: "#F59E0B",
            gradient: "linear-gradient(165deg,#F59E0B,#000)",
        },
        {
            image: "https://placehold.co/300x300/2196F3/FFFFFF?text=Casey",
            title: "Casey Park",
            subtitle: "Data Scientist",
            borderColor: "#EF4444",
            gradient: "linear-gradient(195deg,#EF4444,#000)",
        },
        {
            image: "https://placehold.co/300x300/9C27B0/FFFFFF?text=Sam",
            title: "Sam Kim",
            subtitle: "Mobile Developer",
            borderColor: "#8B5CF6",
            gradient: "linear-gradient(225deg,#8B5CF6,#000)",
        },
        {
            image: "https://placehold.co/300x300/00BCD4/FFFFFF?text=Tyler",
            title: "Tyler Rodriguez",
            subtitle: "Cloud Architect",
            borderColor: "#06B6D4",
            gradient: "linear-gradient(135deg,#06B6D4,#000)",
        },
    ];

    const data = items?.length ? items : demo;

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
        setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true,
        });
    };

    const handleMove = (e: React.PointerEvent) => {
        const r = rootRef.current!.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 0,
            duration: fadeOut,
            overwrite: true,
        });
    };

    const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
        const c = e.currentTarget as HTMLElement;
        const rect = c.getBoundingClientRect();
        c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            // Adjusted padding and gap for responsiveness
            // flex-wrap and justify-center are key for wrapping items
            className={`relative w-full h-full flex flex-wrap justify-center items-center gap-28 px-4 py-20 sm:px-8 md:px-20 lg:px-40  ${className}`}
            style={
                {
                    "--r": `${radius}px`,
                    "--x": "50%",
                    "--y": "50%",
                } as React.CSSProperties
            }
        >
            {data.map((c, i) => (
                <article
                    key={i}
                    onMouseMove={handleCardMove}
                    // Removed fixed w-[300px] and added responsive width classes
                    // max-w-xs (320px) acts as the max width, allowing it to shrink on smaller screens
                    className="group relative flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/2 max-w-xs rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer flex-shrink-0"
                    style={
                        {
                            "--card-border": c.borderColor || "transparent",
                            background: c.gradient,
                            "--spotlight-color": "rgba(255,255,255,0.3)",
                        } as React.CSSProperties
                    }
                >
                    <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                        style={{
                            background:
                                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
                        }}
                    />
                    
                    <div className="relative z-10 flex-1 p-[10px] box-border">
                        <img
                            src={c.image}
                            alt={c.title}
                            loading="lazy"
                            className="w-full h-60 object-cover rounded-[10px]"
                        />
                    </div>
                    <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
                        <div className="flex flex-col h-20">
                            <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
                            <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
                        </div>
                        {c.location && (
                            <span className="text-[0.85rem] opacity-85 text-right">
                                {c.location}
                            </span>
                        )}
                    </footer>
                </article>
            ))}
            <div
                className="absolute inset-0 pointer-events-none z-30"
                style={{
                    backdropFilter: "grayscale(1) brightness(1)",
                    WebkitBackdropFilter: "grayscale(1) brightness(1)",
                    background: "rgba(0,0,0,0.001)",
                    maskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
                }}
            />
            <div
                ref={fadeRef}
                className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
                style={{
                    backdropFilter: "grayscale(1) brightness(0.78)",
                    WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
                    background: "rgba(0,0,0,0.001)",
                    maskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
                    opacity: 1,
                }}
            />
        </div>
    );
};

export default ChromaGrid;