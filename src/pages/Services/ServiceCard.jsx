import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

    const {id, name, image, price, short_description, long_description} = service;

  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img className="h-48 w-full"
            src= {image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-raleway font-bold">{name}</h2>
          <p>{short_description}</p>
          <p className="font-semibold">Price: ${price}0.00</p>
          <div className="card-actions justify-end">
          
            <Link to={`/services/${id}`} className="text-center w-full bg-orange-600 py-2 rounded-md font-semibold text-white font-raleway">View Details</Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
