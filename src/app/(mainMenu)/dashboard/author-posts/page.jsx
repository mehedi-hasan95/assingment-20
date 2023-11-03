import AuthorPosts from "@/components/AuthorPosts";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

async function getAuthorPosts() {
    const headerList = headers();
    const id = parseInt(headerList.get("id"));
    const prisma = new PrismaClient();

    return await prisma.posts.findMany({
        where: {
            userId: id,
        },
    });
}
const Author = async () => {
    const data = await getAuthorPosts();
    return (
        <div className="container mx-auto p-4">
            <div>
                <AuthorPosts data={data} />
            </div>
        </div>
    );
};

export default Author;
