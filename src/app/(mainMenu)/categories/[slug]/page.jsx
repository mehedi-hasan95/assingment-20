import { getCategoryData } from "@/apiData/apiData";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = async ({ params }) => {
    const { slug } = params;
    const data = await getCategoryData(slug);
    return (
        <div className="container mx-auto p-4 ">
            <div className="relative overflow-hidden mb-10">
                <Image
                    src={data?.posts[0]?.categories?.catImg}
                    alt={data?.posts[0]?.categories?.title}
                    height={500}
                    width={500}
                    className="object-cover w-full group-hover:scale-110 transition duration-200 ease-in-out h-72"
                />
                <div className="absolute z-20 inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-200 ease-in-out"></div>
                <h2 className="text-2xl capitalize absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-white">
                    Categories:{" "}
                    <span className="font-bold">
                        {data.posts.length < 1
                            ? "No Post"
                            : data?.posts[0]?.categories?.title}
                    </span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.posts.map((item) => (
                    <div className="" key={item.id}>
                        <Image
                            src={item.postImg}
                            alt=""
                            height={500}
                            width={500}
                        />
                        <div className="py-5">
                            <Link
                                className="text-lg font-semibold"
                                href={`/blog/${item.slug}`}
                            >
                                {item.title}
                            </Link>
                            <p className="pb-2">{item.short_desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
