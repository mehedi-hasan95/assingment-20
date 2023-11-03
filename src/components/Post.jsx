import Image from "next/image";
import Link from "next/link";

const Post = (params) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {params?.data?.posts?.map((item) => (
                <article
                    key={item.id}
                    className="flex flex-col dark:bg-gray-900 bg"
                >
                    <div aria-label="Te nulla oportere reprimique his dolorum">
                        <Image
                            src={item.postImg}
                            alt=""
                            height={500}
                            width={500}
                            className="object-cover w-full h-52 dark:bg-gray-500"
                        />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                        <Link
                            href={`/categories/${item.categories.slug}`}
                            className="uppercase hover:underline bg-rose-600 px-5 py-2 font-bold max-w-max rounded-lg text-white"
                        >
                            {item.categories.title}
                        </Link>
                        <Link
                            href={`/blog/${item.slug}`}
                            className="flex-1 py-2 text-lg font-semibold leadi"
                        >
                            {item.title}
                        </Link>
                        <p>{item.short_desc}</p>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                            <span>{item.createdAt.substring(0, 10)}</span>
                            <span>{item.count} Views</span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Post;
