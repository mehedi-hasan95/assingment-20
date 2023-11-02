import { getPostsData } from "@/apiData/apiData";
import Post from "@/components/Post";

const BlogPage = async () => {
    const data = await getPostsData();
    return (
        <div>
            <div className="container mx-auto p-4">
                <Post data={data} />
            </div>
        </div>
    );
};

export default BlogPage;
