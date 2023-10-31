import { Github, Linkedin, MailIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100 bg">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracki text-center uppercase">
                    Development team
                </p>
                <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">
                    The talented people behind the scenes
                </h1>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <Image
                            src="https://source.unsplash.com/100x100/?portrait?0"
                            alt=""
                            height={500}
                            width={500}
                            className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leadi">
                                Leroy Jenkins
                            </p>
                            <p>Visual Designer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <Link
                                href="#"
                                title="Email"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <MailIcon size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="Twitter"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Twitter size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="LinkedIn"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Linkedin size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="GitHub"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Github size={24} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <Image
                            src="https://source.unsplash.com/100x100/?portrait?0"
                            alt=""
                            height={500}
                            width={500}
                            className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leadi">
                                Leroy Jenkins
                            </p>
                            <p>Visual Designer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <Link
                                href="#"
                                title="Email"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <MailIcon size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="Twitter"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Twitter size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="LinkedIn"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Linkedin size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="GitHub"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Github size={24} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <Image
                            src="https://source.unsplash.com/100x100/?portrait?0"
                            alt=""
                            height={500}
                            width={500}
                            className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leadi">
                                Leroy Jenkins
                            </p>
                            <p>Visual Designer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <Link
                                href="#"
                                title="Email"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <MailIcon size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="Twitter"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Twitter size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="LinkedIn"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Linkedin size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="GitHub"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Github size={24} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <Image
                            src="https://source.unsplash.com/100x100/?portrait?0"
                            alt=""
                            height={500}
                            width={500}
                            className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leadi">
                                Leroy Jenkins
                            </p>
                            <p>Visual Designer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <Link
                                href="#"
                                title="Email"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <MailIcon size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="Twitter"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Twitter size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="LinkedIn"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Linkedin size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="GitHub"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Github size={24} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <Image
                            src="https://source.unsplash.com/100x100/?portrait?0"
                            alt=""
                            height={500}
                            width={500}
                            className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leadi">
                                Leroy Jenkins
                            </p>
                            <p>Visual Designer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <Link
                                href="#"
                                title="Email"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <MailIcon size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="Twitter"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Twitter size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="LinkedIn"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Linkedin size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="GitHub"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Github size={24} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
                        <Image
                            src="https://source.unsplash.com/100x100/?portrait?0"
                            alt=""
                            height={500}
                            width={500}
                            className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                        />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leadi">
                                Leroy Jenkins
                            </p>
                            <p>Visual Designer</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <Link
                                href="#"
                                title="Email"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <MailIcon size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="Twitter"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Twitter size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="LinkedIn"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Linkedin size={24} />
                            </Link>
                            <Link
                                href="#"
                                title="GitHub"
                                className="dark:text-gray-900 hover:dark:text-violet-400"
                            >
                                <Github size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
