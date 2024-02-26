import { useLoaderData, useParams } from "react-router-dom";

const ServicesDetails = () => {
    const services = useLoaderData();
    const { id } = useParams();

    const servicesDetails = services?.find(service =>  service?.id == id);

    return (
        <div className="flex justify-center">
      <div className="card w-10/12 md:w-3/4 lg:w-1/2 glass ">
        <figure>
          <img className="h-48 w-full"
            src= {servicesDetails?.image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-raleway font-bold">{servicesDetails?.name}</h2>
          <p className="text-justify">Description: {servicesDetails?.short_description}{servicesDetails?.long_description}</p>
          
          <p>Location: {servicesDetails?.location}</p>
          <p>Contact: {servicesDetails?.contact_number}</p>
          <p>Email: {servicesDetails?.email}</p>
          <p className="font-semibold">Price: ${servicesDetails?.price}0.00</p>
          
        </div>
      </div>
    </div>
    );
};

export default ServicesDetails;