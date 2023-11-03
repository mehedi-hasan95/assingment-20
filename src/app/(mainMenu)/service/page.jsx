import { getServiceData } from "@/apiData/apiData";
import OurServices from "@/components/Service/OurServices";

const SrvicePage = async () => {
    const data = await getServiceData();
    return (
        <div>
            <OurServices data={data} />
        </div>
    );
};

export default SrvicePage;
