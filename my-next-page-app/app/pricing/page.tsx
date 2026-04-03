"use client";

// Checkmark SVG Component for reusability
const CheckIcon = () => (
    <svg className="w-4 h-4 text-[#4f46e5] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
    </svg>
);

export default function Pricing() {
    return (
        <main className="w-full font-sans">
            <section className="bg-[#07070b] flex flex-col items-center justify-center relative overflow-hidden pt-40 pb-32 px-4">

                <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[90vw] h-[70vh] bg-indigo-600/40 blur-[150px] rounded-[100%] pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-blue-500/30 blur-[120px] rounded-[100%] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] text-white text-center leading-[1] tracking-tight">
                        <span className="font-bold font-sans">Best </span>
                        <span className="font-serif italic font-light text-gray-200">plan</span>
                        <br />
                        <span className="font-serif italic font-light text-gray-200">plan </span>
                        <span className="font-bold font-sans">ever</span>
                    </h1>

                    <p className="mt-8 text-gray-300 text-sm md:text-base max-w-lg text-center tracking-wide">
                        Simple plans—just the way real humans like it.
                    </p>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[#ffffff] via-indigo-900/10 to-white pt-10 pb-24 px-4 md:px-8">
                <div className="max-w-[85rem] mx-auto w-full">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

                        <div className="bg-[#f4f6fa] rounded-[2rem] p-6 flex flex-col justify-between border border-white shadow-sm hover:-translate-y-1 transition-transform duration-300">

                            <div className="w-full h-64 bg-white rounded-2xl flex items-center justify-center relative overflow-hidden mb-8 border border-gray-50">

                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>


                                <div className="relative z-10 flex items-center gap-2 text-gray-400 font-bold text-lg">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                    Logoipsum
                                </div>
                            </div>

                            <p className="text-[#12121c] font-medium text-lg leading-snug px-2 pb-4">
                                "They understood our goals and delivered beyond expectations. Highly recommend"
                            </p>
                        </div>

                        <div className="bg-[#f4f6fa] rounded-[2rem] p-8 flex flex-col border border-white shadow-sm hover:-translate-y-1 transition-transform duration-300">

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-medium text-[#12121c] mb-3">Basic</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                                    Perfect for startups and small businesses taking their first step online.
                                </p>
                                <div className="mt-6 flex items-end justify-center gap-1">
                                    <span className="text-5xl font-bold text-[#4f46e5] tracking-tighter">$299</span>
                                    <span className="text-indigo-400 text-lg font-medium mb-1">/</span>
                                    <span className="text-indigo-400 text-sm font-medium mb-1">Per project</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-6 md:p-8 flex-grow">
                                <h4 className="text-sm font-bold text-[#12121c] mb-6">Included</h4>
                                <ul className="flex flex-col gap-4 text-sm text-gray-600 font-medium">
                                    <li className="flex gap-3"><CheckIcon /> 1 Campaign Setup</li>
                                    <li className="flex gap-3"><CheckIcon /> 8 Social Media Posts/month</li>
                                    <li className="flex gap-3"><CheckIcon /> Basic SEO Optimization</li>
                                    <li className="flex gap-3"><CheckIcon /> 1 Campaign Setup</li>
                                    <li className="flex gap-3"><CheckIcon /> Monthly Performance Report</li>
                                    <li className="flex gap-3"><CheckIcon /> Email Support</li>
                                </ul>
                            </div>

                            <div className="text-center mt-6">
                                <p className="text-xs font-semibold text-gray-600 mb-4">*Ready for Boost</p>
                                <button className="w-full bg-[#1e1e2d] hover:bg-black text-white py-3 rounded-full flex items-center justify-center gap-3 transition-colors duration-300 group">
                                    <span className="font-semibold text-sm">Get Started</span>
                                    <div className="bg-white text-black rounded-full p-1.5 group-hover:-rotate-45 transition-transform duration-300">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 19L19 5M19 5v10M19 5H9"></path></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="bg-[#f4f6fa] rounded-[2rem] p-8 flex flex-col border border-white shadow-sm hover:-translate-y-1 transition-transform duration-300">

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-medium text-[#12121c] mb-3">Pro</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                                    Perfect for startups and small businesses taking their first step online.
                                </p>
                                <div className="mt-6 flex items-end justify-center gap-1">
                                    <span className="text-5xl font-bold text-[#4f46e5] tracking-tighter">$999</span>
                                    <span className="text-indigo-400 text-lg font-medium mb-1">/</span>
                                    <span className="text-indigo-400 text-sm font-medium mb-1">Per project</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-6 md:p-8 flex-grow">
                                <h4 className="text-sm font-bold text-[#12121c] mb-6">Included</h4>
                                <ul className="flex flex-col gap-4 text-sm text-gray-600 font-medium">
                                    <li className="flex gap-3"><CheckIcon /> Up to 3 Social Media Platforms</li>
                                    <li className="flex gap-3"><CheckIcon /> 2 Campaign Setups (Google/Facebook Ads)</li>
                                    <li className="flex gap-3"><CheckIcon /> Basic SEO Optimization</li>
                                    <li className="flex gap-3"><CheckIcon /> 1 Campaign Setup</li>
                                    <li className="flex gap-3"><CheckIcon /> Monthly Performance Report</li>
                                    <li className="flex gap-3"><CheckIcon /> Email Support</li>
                                </ul>
                            </div>

                            <div className="text-center mt-6">
                                <p className="text-xs font-semibold text-gray-600 mb-4">*Ready for Boost</p>
                                <button className="w-full bg-[#1e1e2d] hover:bg-black text-white py-3 rounded-full flex items-center justify-center gap-3 transition-colors duration-300 group">
                                    <span className="font-semibold text-sm">Get Started</span>
                                    <div className="bg-white text-black rounded-full p-1.5 group-hover:-rotate-45 transition-transform duration-300">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 19L19 5M19 5v10M19 5H9"></path></svg>
                                    </div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}