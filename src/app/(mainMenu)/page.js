import { getLatestData } from "@/apiData/apiData";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Post from "@/components/Post";
import Testimonial from "@/components/Testimonial";

export default async function Home() {
    const data = await getLatestData();
    return (
        <div>
            <HeroSection />
            <Hero />
            <Testimonial />
            <Categories />
            <div>
                <div className="container mx-auto p-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-max font-semibold pb-6 mx-auto titleBg">
                        Latest Posts
                    </h2>
                    <Post data={data} />
                </div>
            </div>
        </div>
    );
}
