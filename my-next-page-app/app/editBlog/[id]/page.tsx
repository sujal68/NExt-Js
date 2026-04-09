"use client";

import { blogDataType } from "@/app/utils/type";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function EditFormPage() {
    const { id } = useParams();
    const router = useRouter();
    const blogCategory = ["Development", "AI Develoment", "Advoitijment", "Marketing", "Sports"]
    const [blogData, setBlogData] = useState<blogDataType>({
        id: 0,
        blogTitle: "",
        category: "",
        authName: "",
        blogTag: "",
        sortExcerpt: "",
    });

    const [errorBlog, setErrorBlog] = useState<any>({});

    useEffect(() => {
        const allBlog: blogDataType[] = JSON.parse(localStorage.getItem('blog') || '[]');


        const blogData = allBlog.find((blog) => blog.id === Number(id));

        if (blogData) {
            setBlogData(blogData);
        }
    }, []);

    const validation = () => {
        const error: any = {};

        if (!blogData.blogTitle) {
            error.blogTitle = "Blog Title is required";
        }
        if (!blogData.category) {
            error.category = "Category is required";
        }
        if (!blogData.authName) {
            error.authName = "Author Name is required";
        }
        if (!blogData.sortExcerpt) {
            error.sortExcerpt = "Short Excerpt is required";
        }
        if (blogData.sortExcerpt.length > 150) {
            error.sortExcerpt = "Short Excerpt should be less than 150 characters";
        }
        if (!blogData.blogTag) {
            error.blogTag = "Blog Tag is required";
        }

        setErrorBlog(error);

        return Object.keys(error).length === 0;
    }

    const onSubmit = (event: any) => {
        event.preventDefault();

        if (!validation()) return;

        let allBlog = JSON.parse(localStorage.getItem('blog') || '[]');

        allBlog = allBlog.map((item: any) => {
            if (item.id === Number(id)) {
                return blogData;
            }
            return item;
        });

        localStorage.setItem('blog', JSON.stringify(allBlog));

        toast.success("Blog Updated Successfully");
        router.push("/blog");
    };

    return (
        <div className="w-full max-w-4xl bg-white rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-gray-100 font-sans mx-auto my-30">

            <div className="mb-12">
                <span className="text-indigo-600 text-sm font-bold tracking-widest uppercase">
                    Update
                </span>

                <h2 className="mt-4 text-4xl md:text-5xl text-[#12121c] leading-[1.1] tracking-tight">
                    <span className="font-bold font-sans">Update </span>
                    <span className="font-serif italic font-light text-gray-500">Your </span>
                    <span className="font-bold font-sans">Story.</span>
                </h2>
                <p className="mt-3 text-gray-500">Draft your thoughts and prepare them for publishing.</p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#12121c] ml-1">Blog Title *</label>
                        <input
                            type="text"
                            name="blogTitle"
                            onChange={(e) => {
                                setBlogData({ ...blogData, blogTitle: e.target.value })
                            }}
                            value={blogData.blogTitle}
                            placeholder="E.g., Master Next.js in 2026"
                            className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300"
                        />
                        {errorBlog.blogTitle && <p className="text-red-500 text-sm ml-1">{errorBlog.blogTitle}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#12121c] ml-1">Category *</label>
                        <div className="relative">
                            <select
                                name="category"
                                onChange={(e) => {
                                    setBlogData({ ...blogData, category: e.target.value })
                                }}
                                value={blogData.category}
                                className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] appearance-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300 cursor-pointer"
                            >
                                <option value="">Select a category</option>
                                {blogCategory.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}

                            </select>
                            {errorBlog.category && <p className="text-red-500 text-sm ml-1">{errorBlog.category}</p>}
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
                            name="authName"
                            onChange={(e) => {
                                setBlogData({ ...blogData, authName: e.target.value })
                            }}
                            value={blogData.authName}
                            placeholder="E.g., Sujal Kidecha"
                            className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300"
                        />
                        {errorBlog.authName && <p className="text-red-500 text-sm ml-1">{errorBlog.authName}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#12121c] ml-1">Tags (Comma Separated)</label>
                        <input
                            type="text"
                            name="blogTag"
                            onChange={(e) => {
                                setBlogData({ ...blogData, blogTag: e.target.value })
                            }}
                            value={blogData.blogTag}
                            placeholder="e.g., frontend, react, web design"
                            className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300"
                        />
                        {errorBlog.blogTag && <p className="text-red-500 text-sm ml-1">{errorBlog.blogTag}</p>}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#12121c] ml-1">Short Excerpt</label>
                    <textarea
                        name="sortExcerpt"
                        onChange={(e) => {
                            setBlogData({ ...blogData, sortExcerpt: e.target.value })
                        }}
                        value={blogData.sortExcerpt}
                        placeholder="A quick summary of the blog post (max 150 characters)..."
                        className="w-full bg-[#f4f6fa] border border-transparent px-5 py-4 rounded-2xl text-[#12121c] placeholder-gray-400 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300 resize-none"
                    ></textarea>
                    {errorBlog.sortExcerpt && <p className="text-red-500 text-sm ml-1">{errorBlog.sortExcerpt}</p>}
                </div>



                <div className="mt-4 flex justify-end">
                    <button type="submit" className="bg-[#4f46e5] cursor-pointer text-white pl-8 pr-2 py-2 rounded-full flex items-center gap-4 hover:scale-105 transition-transform duration-300 font-medium shadow-lg shadow-indigo-500/30 group">
                        Publish Updated Story

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