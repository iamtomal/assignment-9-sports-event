import moment from 'moment';


const Header = () => {
    return (
        <div className="text-center my-5">
            
            <p className="font-concert text-5xl text-orange-300"><span className="text-orange-500">S</span>PORTS <span className="text-orange-500">E</span>VENTS</p>
            <p className="font-raleway text-sm font-semibold text-gray-400 my-2">With a passion for sports and the finer things in life, <br></br> Sports events takes your VIP experiences for sports and entertainment to another level.</p>
            <p className="font-concert text-md  text-gray-500 my-2">{(moment().format('LLLL'))}</p>

        </div>
    );
};

export default Header;