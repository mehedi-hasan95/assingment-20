import { getSingleData } from "@/apiData/apiData";
import { Calendar, Eye, User2 } from "lucide-react";
import Image from "next/image";

const SingleBlog = async ({ params }) => {
    const { slug } = params;
    const data = await getSingleData(slug);
    return (
        <div>
            <div className="container mx-auto py-10">
                <Image
                    src={data?.posts?.postImg}
                    alt=""
                    height={500}
                    width={500}
                    className="w-full max-h-80"
                />
                <div className="pt-5">
                    <h2 className="text-2xl font-semibold capitalize">
                        {data.posts.title}
                    </h2>
                    <div className="flex gap-5 items-center py-4">
                        <div className="flex gap-2 items-center">
                            <User2 size={20} /> {data?.posts?.users?.firstName}
                        </div>
                        <div className="flex gap-2 items-center">
                            <Calendar size={20} />{" "}
                            {data?.posts?.createdAt?.substring(0, 10)}
                        </div>
                        <div className="flex gap-2 items-center">
                            <Eye size={20} /> {data?.posts?.count} views
                        </div>
                    </div>
                    <div>{data?.posts?.desc}</div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
