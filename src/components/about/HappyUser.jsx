const HappyUser = () => {
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-max font-semibold pb-6 mx-auto titleBg pt-10">
                Our Happy User
            </h2>
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
                    <p className="text-sm sm:text-base">Clients</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">89K</p>
                    <p className="text-sm sm:text-base">
                        Followers on social media
                    </p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">3</p>
                    <p className="text-sm sm:text-base">Premeium Content</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">8</p>
                    <p className="text-sm sm:text-base">TED talks</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">22</p>
                    <p className="text-sm sm:text-base">Years of experience</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
                    <p className="text-sm sm:text-base">Workshops</p>
                </div>
            </div>
        </section>
    );
};

export default HappyUser;
