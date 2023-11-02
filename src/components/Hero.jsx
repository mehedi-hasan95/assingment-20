import { getFeaturedData } from "@/apiData/apiData";
import { Calendar, MessagesSquare, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = async () => {
    const data = await getFeaturedData();
    return (
        <div className="py-10 md:py-16 lg:py-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-max font-semibold pb-6 mx-auto titleBg">
                Featured Post
            </h2>
            <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6">
                {data.posts.map((item, index) => (
                    <div
                        key={item._id}
                        className="relative group overflow-hidden first:lg:row-span-2 first:lg:col-span-2"
                    >
                        <Image
                            src={item.postImg}
                            alt=""
                            height={500}
                            width={500}
                            className="h-full w-full group-hover:scale-110 transition duration-200 ease-in-out z-10"
                        />
                        <div className="absolute z-20 inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-200 ease-in-out"></div>
                        <div className="absolute z-30 bottom-10 left-10">
                            <h4 className="pb-5">
                                <Link
                                    href={`/categories/${item.categories.slug}`}
                                    className="bg-rose-700 px-6 py-1 text-white max-w-max capitalize"
                                >
                                    {item.categories.title}
                                </Link>
                            </h4>
                            <Link
                                href={`/blog/${item.slug}`}
                                className={`${
                                    index > 0
                                        ? "text-3xl md:text-xl"
                                        : "text-3xl"
                                } font-semibold text-white pb-2 md:pb-5 capitalize`}
                            >
                                {item.title}
                            </Link>
                            <div className="flex gap-5 items-center text-white">
                                <div className="flex gap-2 items-center">
                                    <User2 size={20} />
                                    {item.users.firstName}
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Calendar size={20} />{" "}
                                    {item.createdAt.substring(0, 10)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
