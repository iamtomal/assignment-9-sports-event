import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const services = useLoaderData();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-8">
        {
            services?.map(service =><ServiceCard key={service.id} service={service}></ServiceCard>)
        }

        </div>
    );
};

export default Services;