import CreatePost from "@/components/CreatePost";
import { headers } from "next/headers";

const PostsPage = () => {
    const headersList = headers();
    const id = headersList.get("id");
    return (
        <div>
            <CreatePost id={id} />
        </div>
    );
};

export default PostsPage;
