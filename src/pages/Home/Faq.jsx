const Faq = () => {
  return (
    <>
      <p className="my-4 font-concert text-center text-6xl text-orange-400">
        FAQs About The Top Sports Websites
      </p>

      <div className="my-2">
        <div
          tabIndex={0}
          className=" collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            Which is the most visited Sports website?
          </div>
          <div className="collapse-content">
            <p>
              espn.com is the most visited Sports website in September 2023.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            Which is the 2nd most visited Sports website?
          </div>
          <div className="collapse-content">
            <p>
              cricbuzz.com is the 2nd most visited Sports website in September
              2023.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-8">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            What are the top 5 most popular Sports websites in the world?
          </div>
          <div className="collapse-content">
            <p>
              The top 5 most popular Sports websites in the world in September
              2023 are:<br></br> 1. espn.com <br></br>2. cricbuzz.com <br></br>3. marca.com <br></br>4.
              espncricinfo.com <br></br>5. as.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
