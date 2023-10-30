import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="bg py-10 md:py-16 lg:py-20">
            <div className="max-w-5xl mx-auto p-4">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">
                    Hello 👋, we are Porto, exploring{" "}
                    <span className="titleBg">fashion</span>,{" "}
                    <span className="titleBg">lifestyle</span> and{" "}
                    <span className="titleBg">health</span>.
                </h2>
                <p className="text-lg text-center max-w-3xl mx-auto py-10">
                    Introducing a modern and sleek theme for Ghost. Perfect for{" "}
                    <span className="font-bold">
                        magazine, newsletter, professional and personal blog
                    </span>
                    publishing .
                </p>
                <div className="text-center">
                    <Link
                        href="/register"
                        className="text-lg font-bold px-12 py-5 rounded-full bg-gradient-to-r from-indigo-800 to-purple-600 text-white"
                    >
                        Join now - it&apos;s free!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
