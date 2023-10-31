import Image from "next/image";
import Link from "next/link";

const Post = () => {
    return (
        <div>
            <article className="flex flex-col dark:bg-gray-900 bg">
                <div aria-label="Te nulla oportere reprimique his dolorum">
                    <Image
                        src="https://source.unsplash.com/200x200/?fashion?1"
                        alt=""
                        height={500}
                        width={500}
                        className="object-cover w-full h-52 dark:bg-gray-500"
                    />
                </div>
                <div className="flex flex-col flex-1 p-6">
                    <Link
                        href="#"
                        aria-label="Te nulla oportere reprimique his dolorum"
                    ></Link>
                    <Link
                        href="#"
                        className="text-xs tracki uppercase hover:underline dark:text-violet-400"
                    >
                        Convenire
                    </Link>
                    <Link
                        href="#"
                        className="flex-1 py-2 text-lg font-semibold leadi"
                    >
                        Te nulla oportere reprimique his dolorum
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Sit molestiae quas corrupti dignissimos et harum
                        veritatis officiis asperiores quam optio ad quo rerum
                        explicabo obcaecati repudiandae tenetur corporis culpa
                        accusantium dolores voluptates cupiditate, non
                        voluptatem officia. Nisi omnis possimus ab nemo officiis
                        consequuntur culpa error, ea animi. Distinctio, corrupti
                        deserunt.
                    </p>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                        <span>June 1, 2020</span>
                        <span>2.1K views</span>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Post;
