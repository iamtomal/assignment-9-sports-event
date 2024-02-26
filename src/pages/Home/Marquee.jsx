import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="flex border border-orange-600 bg-orange-100 mb-5 overflow-hidden">
            <p className="border border-orange-300 bg-orange-600 text-white p-2 font-concert ">Important</p>
            <p className="font-medium text-gray-500 py-2"><Marquee pauseOnHover={true}>
            With a passion for sports and the finer things in life,<p className=" text-xs text-orange-400"><span className="text-orange-600">  S</span>PORTS <span className="text-orange-600">E</span>VENTS  </p> takes your VIP experiences for sports and entertainment to another level. For corporate clients, small or large groups to individuals our skilled team will create bespoke packages taking care of your every need, creating a truly unforgettable experience.</Marquee></p>
        </div>
    );
};

export default Marque;