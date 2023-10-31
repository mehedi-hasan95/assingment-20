import Image from "next/image";

const OurServices = () => {
    return (
        <div>
            <div className="bg">
                <div className="container mx-auto p-4 py-10 md:py-16 lg:py-20">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-max font-semibold pb-6 titleBg">
                            Our Services
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae porro laborum repellendus, atque
                            pariatur debitis necessitatibus iusto tenetur
                            doloremque cum praesentium odio vel ea mollitia
                            quibusdam repudiandae ex possimus quas voluptates
                            nulla quisquam placeat maxime iure. Dignissimos,
                            molestiae voluptatem? Deleniti ratione rem dolores
                            voluptatibus quo beatae fugit corrupti voluptas ea?
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-4 py-10 md:py-16 lg:py-20">
                <div className="flex items-center gap-10">
                    <div className="flex w-3/4 flex-col">
                        <h2 className="titleBg text-2xl md:text-3xl lg:text-4xl font-semibold py-5">
                            Lorem ipsum dolor sit amet.
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium eligendi, atque non dolor
                            accusamus voluptate minus voluptas officiis iste
                            aliquid enim excepturi, ullam veritatis repellendus
                            at neque perferendis eius quaerat?
                        </p>
                    </div>
                    <div className="flex w-1/4">
                        <Image
                            src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            height={500}
                            width={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
