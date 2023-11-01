import Testimonial from "@/components/Testimonial";
import HappyUser from "@/components/about/HappyUser";
import Team from "@/components/about/Team";
import MainMenu from "@/components/menu/MainMenu";

const AboutPage = () => {
    return (
        <div>
            <MainMenu />
            <Team />
            <HappyUser />
            <Testimonial />
        </div>
    );
};

export default AboutPage;
