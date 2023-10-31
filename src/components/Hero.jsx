import { Calendar, MessagesSquare, User2 } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="py-10 md:py-16 lg:py-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-max font-semibold pb-6 mx-auto titleBg">
                Featured Post
            </h2>
            <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6">
                <div className="relative group overflow-hidden lg:row-span-2 lg:col-span-2">
                    <Image
                        src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        height={500}
                        width={500}
                        className="h-full w-full group-hover:scale-110 transition duration-200 ease-in-out z-10"
                    />
                    <div className="absolute z-20 inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-200 ease-in-out"></div>
                    <div className="absolute z-30 bottom-10 left-10">
                        <h4 className="bg-rose-700 px-6 py-1 text-white max-w-max">
                            Cat Name
                        </h4>
                        <h2 className="text-3xl font-semibold text-white py-2 md:py-5">
                            Lorem ipsum dolor sit amet.
                        </h2>
                        <div className="flex gap-5 items-center text-white">
                            <div className="flex gap-2 items-center">
                                <User2 size={20} /> Mehedi
                            </div>
                            <div className="flex gap-2 items-center">
                                <Calendar size={20} /> 03-May-23
                            </div>
                            <div className="flex gap-2 items-center">
                                <MessagesSquare size={20} /> 6 Comments
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden">
                    <Image
                        src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        height={500}
                        width={500}
                        className="h-full w-full group-hover:scale-110 transition duration-200 ease-in-out z-10"
                    />
                    <div className="absolute z-20 inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-200 ease-in-out"></div>
                    <div className="absolute z-30 bottom-10 left-10">
                        <h4 className="bg-rose-700 px-6 py-1 text-white max-w-max">
                            Cat Name
                        </h4>
                        <h2 className="text-3xl font-semibold text-white py-6 md:py-5">
                            Lorem ipsum dolor sit amet.
                        </h2>
                        <div className="flex gap-5 items-center text-white group-hover:text-gray-300">
                            <div className="flex gap-2 items-center">
                                <User2 size={20} /> Mehedi
                            </div>
                            <div className="flex gap-2 items-center">
                                <Calendar size={20} /> 03-May-23
                            </div>
                            <div className="flex gap-2 items-center">
                                <MessagesSquare size={20} /> 6 Comments
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden">
                    <Image
                        src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        height={500}
                        width={500}
                        className="h-full w-full group-hover:scale-110 transition duration-200 ease-in-out z-10"
                    />
                    <div className="absolute z-20 inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-200 ease-in-out"></div>
                    <div className="absolute z-30 bottom-10 left-10">
                        <h4 className="bg-rose-700 px-6 py-1 text-white max-w-max">
                            Cat Name
                        </h4>
                        <h2 className="text-3xl font-semibold text-white py-6 md:py-5">
                            Lorem ipsum dolor sit amet.
                        </h2>
                        <div className="flex gap-5 items-center text-white group-hover:text-gray-300">
                            <div className="flex gap-2 items-center">
                                <User2 size={20} /> Mehedi
                            </div>
                            <div className="flex gap-2 items-center">
                                <Calendar size={20} /> 03-May-23
                            </div>
                            <div className="flex gap-2 items-center">
                                <MessagesSquare size={20} /> 6 Comments
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
