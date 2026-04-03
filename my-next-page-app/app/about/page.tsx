"use client";

// Values ka data array taaki code clean rahe
const valuesData = [
    {
        icon: (
            <svg className="w-10 h-10 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 8a4 4 0 100 8 4 4 0 000-8zm0 0c2.5 0 4.5 1.5 5.5 3.5m-5.5-3.5c-2.5 0-4.5 1.5-5.5 3.5m11 0c1-2 3-3.5 5.5-3.5a4 4 0 110 8 4 4 0 010-8zm0 0c-1 2-3 3.5-5.5 3.5"></path>
            </svg>
        ),
        title: "Bold work wins",
        description: "We challenge conventions, push creative boundaries, and build campaigns that stand out—because safe ideas don't spark real growth."
    },
    {
        icon: (
            <svg className="w-10 h-10 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Custom Percentage / abstract icon */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7L7 17M8 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm11 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
            </svg>
        ),
        title: "Performance over promises",
        description: "We don't rely on buzzwords or empty claims—every strategy is tracked, measured, and optimized for results you can actually see."
    },
    {
        icon: (
            <svg className="w-10 h-10 text-[#4f46e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6m4 13v-8m4 8v-5"></path>
            </svg>
        ),
        title: "Think smart, act fast",
        description: "In a fast-moving digital world, we combine agile execution with intelligent planning to stay ahead of trends and ahead of your competitors."
    }
];

export default function About() {
    return (
        <main className="min-h-screen bg-white">

            {/* 1. ABOUT BENTO BOX SECTION */}
            <section className="py-30 px-4 flex justify-center items-center">
                <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-5">
                    {/* LEFT CARD */}
                    <div className="lg:col-span-5 bg-[#4f46e5] text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
                        <p className="text-xl md:text-2xl leading-snug font-medium mb-8">
                            Sujal.dev was built by a collective of strategists, creatives, and data scientists who care deeply about outcomes.
                        </p>
                        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                                alt="Team working together"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="lg:col-span-7 bg-[#f4f6fa] text-[#12121c] rounded-3xl p-6 md:p-10 flex flex-col justify-between shadow-sm">
                        <div>
                            <span className="text-gray-500 text-xs font-semibold tracking-wide uppercase">About</span>
                            <h2 className="mt-4 text-2xl md:text-3xl lg:text-[2rem] leading-[1.2] font-medium tracking-tight">
                                Over the years, we've helped hundreds of brands—from tech innovators to bold B2B players—break through the noise and capture their audience’s attention.
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-16">
                            <div className="flex flex-col">
                                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#12121c]">99%</h3>
                                <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">Client Satisfaction</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#12121c]">12M+</h3>
                                <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">Visitor in 2026</p>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#12121c]">180+</h3>
                                <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">Brands Served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. VALUES SECTION (Naya Add Kiya Hua) */}
            <section className="py-24 px-4 flex justify-center border-t border-gray-100">
                <div className="max-w-5xl w-full">

                    {/* Heading Text */}
                    <div className="text-center mb-20">
                        <span className="text-gray-500 text-sm font-medium tracking-wide uppercase">Values</span>

                        <h2 className="text-4xl md:text-6xl text-[#12121c] leading-[1.1] tracking-tight mt-6">
                            <span className="font-bold font-sans">Bold Values </span>
                            <span className="font-serif italic font-light text-gray-600">Behind</span>
                            <br />
                            <span className="font-serif italic font-light text-gray-600">Every </span>
                            <span className="font-bold font-sans">Breakthrough</span>
                        </h2>
                    </div>

                    {/* Grid Columns with Dividers */}
                    {/* divide-y aur divide-x Tailwind ka mast feature hai lines draw karne ke liye */}
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200/70">

                        {valuesData.map((item, index) => (
                            <div
                                key={index}
                                // Padding adjust ki hai taaki left-right spacing maintain rahe
                                className={`flex flex-col py-8 md:py-0 ${index === 0 ? "md:pr-10" : index === 1 ? "md:px-10" : "md:pl-10"
                                    }`}
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-[#12121c] mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </main>
    );
}