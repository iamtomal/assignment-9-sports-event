
const SponsorCard = ({sponsor}) => {
    console.log(sponsor);
    const {sponsor_image} = sponsor;
    return (
        <div>
            <div className=" h-full">
          <img src={sponsor_image} />
        </div>
        </div>
    );
};

export default SponsorCard;