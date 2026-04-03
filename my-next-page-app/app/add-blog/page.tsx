export default function AddBlogForm() {
    return (
        <div className="w-full max-w-4xl bg-white rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-gray-100 font-sans mx-auto my-30">

            <div className="mb-12">
                <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">
                    Publish
                </span>

                <h2 className="mt-4 text-4xl md:text-5xl text-[#12121c] leading-[1.1] tracking-tight">
                    <span className="font-bold font-sans">Create </span>
                    <span className="font-serif italic font-light text-gray-500">new </span>
                    <span className="font-bold font-sans">Story.</span>
                </h2>
                <p className="mt-3 text-gray-500">Draft your thoughts and prepare them for publishing.</p>
            </div>

            <form className="flex flex-col gap-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#12121c] ml-1">Blog Title *</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="E.g., Master Next.js in 2026"
                            className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#12121c] ml-1">Category *</label>
                        <div className="relative">
                            <select
                                name="category"
                                defaultValue=""
                                className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] appearance-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300 cursor-pointer"
                            >
                                <option value="" disabled>Select a category</option>
                                <option value="development">Development</option>
                                <option value="design">UI/UX Design</option>
                                <option value="marketing">Marketing</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#12121c] ml-1">Author Name</label>
                        <input
                            type="text"
                            name="author"
                            placeholder="E.g., Sujal Kidecha"
                            className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#12121c] ml-1">Tags (Comma Separated)</label>
                        <input
                            type="text"
                            name="tags"
                            placeholder="e.g., frontend, react, web design"
                            className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#12121c] ml-1">Short Excerpt</label>
                    <textarea
                        name="excerpt"
                        placeholder="A quick summary of the blog post (max 150 characters)..."
                        className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300 resize-none"
                    ></textarea>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#12121c] ml-1">Article Content *</label>
                    <textarea
                        name="content"
                        placeholder="Write your story here..."
                        className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300 resize-y"
                    ></textarea>
                </div>

                <div className="mt-4 flex justify-end">
                    <button type="button" className="bg-[#4f46e5] text-white pl-8 pr-2 py-2 rounded-full flex items-center gap-4 hover:scale-105 transition-transform duration-300 font-medium shadow-lg shadow-indigo-500/30 group">
                        Publish Story

                        <div className="bg-white text-[#4f46e5] rounded-full p-2.5 group-hover:rotate-45 transition-transform duration-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 19L19 5M19 5v10M19 5H9"></path>
                            </svg>
                        </div>
                    </button>
                </div>

            </form>
        </div>
    );
}