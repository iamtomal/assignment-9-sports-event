import Aos from "aos";
import "aos/dist/aos.css";
import { useLoaderData } from "react-router-dom";
import Contact from "../Contact/Contact";
import ServiceCard from "../Services/ServiceCard";
import Banner from "./Banner";
import { useEffect } from "react";
import Faq from "./Faq";

const Home = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  const services = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div>
        <p className=" font-concert text-center text-6xl text-orange-400">
          Our Services
        </p>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-4"
          data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
        >
          {services?.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>

      <Contact></Contact>
      <Faq></Faq>
    </div>
  );
};

export default Home;
