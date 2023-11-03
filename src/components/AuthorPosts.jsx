import { FileEdit, Trash2 } from "lucide-react";
import Image from "next/image";

const AuthorPosts = (params) => {
    return (
        <div>
            <table class="w-full border-collapse">
                <thead>
                    <tr class="bg-gray-200">
                        <th class="border border-gray-400 px-4 py-2">Title</th>
                        <th class="border border-gray-400 px-4 py-2">Image</th>
                        <th class="border border-gray-400 px-4 py-2">Action</th>
                    </tr>
                </thead>
                {params.data.map((item) => (
                    <tbody key={item.id}>
                        <tr class="bg-gray-100">
                            <td class="border border-gray-400 px-4 py-2">
                                {item.title}
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                <Image
                                    src={item.postImg}
                                    alt=""
                                    height={500}
                                    width={500}
                                    className="h-32 w-32"
                                />
                            </td>
                            <td class="border border-gray-400 px-4 py-2">
                                <div className="flex gap-2">
                                    <FileEdit /> <Trash2 />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default AuthorPosts;
