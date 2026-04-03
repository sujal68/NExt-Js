"use client";

const servicesData = [
    {
        icon: "🧭",
        title: "Search engine optimization",
        description: "We optimize your website structure, content, and backlink profile to improve rankings, boost traffic.",
        hasBackground: false
    },
    {
        icon: "👍",
        title: "Pay-per-click advertising",
        description: "Google Ads to Facebook, we manage your budget efficiently, craft compelling ads, and continuously test.",
        hasBackground: true
    },
    {
        icon: "🔔",
        title: "Social media marketing",
        description: "We create scroll-stopping content, manage your platforms, and engage your community to grow.",
        hasBackground: false
    },
    {
        icon: "📑",
        title: "Content Marketing",
        description: "We optimize your website structure, content, and backlink profile to improve rankings, boost traffic.",
        hasBackground: true
    }
];

export default function Home() {
    return (
        <main className="w-full font-sans">

            <section className="min-h-screen bg-[#07070b] flex flex-col items-center justify-center relative overflow-hidden px-4 py-20">

                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] bg-indigo-600/30 blur-[150px] rounded-[100%] pointer-events-none"></div>
                <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[40vw] h-[30vh] bg-purple-500/30 blur-[120px] rounded-[100%] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center mt-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-white text-center leading-[1.1] tracking-tight">
                        <span className="font-bold font-sans">Hello I </span>
                        <span className="font-serif italic font-light text-gray-200">Am</span>
                        <br />
                        <span className="font-serif italic font-light text-gray-200">Sujal.</span>
                        <span className="font-bold font-sans">.</span>
                    </h1>

                    <p className="mt-8 text-gray-300 text-sm md:text-base max-w-lg text-center tracking-wide">
                        All project here is designed to deliver impact—not just impressions.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
                        <button className="bg-white text-black pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:scale-105 transition-transform duration-300 font-semibold shadow-xl shadow-indigo-500/10">
                            Let's Contact
                            <div className="bg-[#12121c] text-white rounded-full p-2.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 19L19 5M19 5v10M19 5H9"></path>
                                </svg>
                            </div>
                        </button>

                        <button className="text-white flex items-center gap-2 hover:text-indigo-300 transition-colors duration-300 font-medium group">
                            Book a call
                            <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 19L19 5M19 5v10M19 5H9"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-white py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto w-full">

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">

                        <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] text-[#12121c] leading-[1.05] tracking-tight">
                            <span className="font-bold font-sans">Smart </span>
                            <span className="font-serif italic font-light text-gray-500">Service</span>
                            <br />
                            <span className="font-serif italic font-light text-gray-500">That </span>
                            <span className="font-bold font-sans">Real Impact.</span>
                        </h2>

                        <button className="bg-[#4f46e5] text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:scale-105 transition-transform duration-300 font-medium shadow-lg shadow-indigo-500/30">
                            Let's Contact
                            <div className="bg-white text-[#4f46e5] rounded-full p-2.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 19L19 5M19 5v10M19 5H9"></path>
                                </svg>
                            </div>
                        </button>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center text-center px-6 py-12 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 ${service.hasBackground ? 'bg-[#f4f6fa]' : 'bg-white'
                                    }`}
                            >
                                <div className="text-6xl mb-8 drop-shadow-xl pointer-events-none">
                                    {service.icon}
                                </div>

                                <h3 className="text-[1.35rem] font-medium text-[#12121c] mb-4 leading-tight px-2">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </main>
    );
}