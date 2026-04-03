"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Add Blog", href: "/add-blog" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">

                <nav className="bg-[#12121c]/90 backdrop-blur-md border border-white/10 text-white w-full max-w-5xl rounded-full px-6 py-3 flex justify-between items-center shadow-2xl">

                    <div className="flex items-center gap-2 hover:scale-105 transition duration-300">
                        <Link href="/" className="text-xl font-bold tracking-wide">
                            Sujal
                        </Link>
                    </div>

                    <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
                        {navItems.map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={item.href}
                                    className="group relative inline-flex overflow-hidden py-1"
                                >
                                    <span className="transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%]">
                                        {item.label}
                                    </span>

                                    <span className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[120%] group-hover:translate-y-0 text-white py-1">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex items-center gap-6">

                        <div className="relative cursor-pointer hover:scale-110 transition duration-300">
                            <svg className="w-6 h-6 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            <span className="absolute -top-2 -right-2.5 bg-[#6366f1] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#12121c]">
                                0
                            </span>
                        </div>

                        <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-1 py-1 pl-5 rounded-full flex items-center gap-3 transition-all duration-300 group">
                            <span className="text-sm font-medium text-gray-200 group-hover:text-white">Hire Me</span>

                            <div className="bg-white text-black rounded-full p-2 group-hover:rotate-45 transition-transform duration-300">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 19L19 5M19 5v10M19 5H9"></path></svg>
                            </div>
                        </button>

                    </div>
                    <div
                        className="md:hidden text-2xl cursor-pointer hover:scale-110 transition"
                        onClick={() => setOpen(true)}
                    >
                        ☰
                    </div>
                </nav>
            </div>

            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 
                ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            />

            <div
                className={`fixed top-0 right-0 h-full w-72 bg-[#0a0a0f] border-l border-white/10 text-white z-50 
                transform transition-all duration-500 ease-in-out
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-end p-6">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-2xl hover:rotate-90 text-gray-400 hover:text-white transition duration-300"
                    >
                        ✕
                    </button>
                </div>

                {/* MOBILE MENU WITH SAME EFFECT */}
                <ul className="flex flex-col gap-6 px-8 mt-4 text-lg">
                    {navItems.map((item, i) => (
                        <li key={i} className={`border-b border-white/10 pb-2`}>
                            <Link
                                href={item.href}
                                className="group relative inline-flex overflow-hidden transform transition duration-300 group-hover:translate-x-2"
                            >
                                <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[120%]">
                                    {item.label}
                                </span>
                                <span className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[120%] group-hover:translate-y-0 text-gray-300">
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center mt-10 px-8">
                    <button className="w-full bg-white text-black px-4 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                        Hire Me
                    </button>
                </div>
            </div>
        </>
    );
}