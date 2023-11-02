import { getCategoriesData } from "@/apiData/apiData";
import Image from "next/image";
import Link from "next/link";

const Categories = async () => {
    const data = await getCategoriesData();
    console.log(data);
    return (
        <div className="container mx-auto p-4 py-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-max font-semibold pb-6 mx-auto titleBg">
                Categories
            </h2>
            <div className="flex justify-center flex-wrap gap-5">
                {data?.categories?.map((item) => (
                    <Link
                        key={item.id}
                        href={`/categories/${item.slug}`}
                        className="text-white font-semibold group flex gap-3 items-center rounded-lg relative"
                    >
                        <Image
                            src={item.catImg}
                            alt=""
                            height={500}
                            width={500}
                            className="h-20 w-52 rounded-lg"
                        ></Image>
                        <div className="absolute z-20 rounded-lg inset-0 bg-black opacity-60 group-hover:opacity-0 transition duration-200 ease-in-out"></div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 capitalize">
                            {item.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
