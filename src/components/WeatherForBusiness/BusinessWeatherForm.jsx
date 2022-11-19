export default function BusinessWeatherForm() {
  return (
    <div className="WeatherForm container mx-auto mt-14 md:mt-24 mb-24 px-4 md:px-14">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="container mx-auto text-center md:text-left pt-0 md:pt-24 pr-0 md:pr-20   ">
          <p className="text-xl text-[#EF6820]">Partner</p>
          <p className="text-3xl">Get Started</p>
          <p className="text-base text-center md:text-left text-[#565560]">
            Contact us to find the right plan and price for your business
          </p>
        </div>
        <form action="" className="md:ml-12 ml-0 lg:ml-0">
          <div className=" flex flex-col md:flex-row mt-10 md:mt-0 ml-4 md:ml-0">
            <div>
              <label htmlFor="name">Full Name</label>
              <br />
              <input type="text" placeholder="" />
            </div>
            <div className="ml-0 md:ml-8 mt-4 md:mt-0">
              <label htmlFor="name">I Work in...</label>
              <br />
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row mt-4 md:mt-12 ml-4 md:ml-0">
            <div>
              <label htmlFor="name">Company Name</label>
              <input type="text" placeholder="" />
            </div>
            <div className="mt-4 md:mt-0">
              <label htmlFor="name">Company Size</label>
              <br />
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row  mt-4 md:mt-12 ml-4 md:ml-0">
            <div>
              <label htmlFor="name">Company Email</label>
              <input type="text" placeholder="" />
            </div>
            <div className="mt-4 md:mt-0">
              <label htmlFor="name">Location</label>
              <input type="text" placeholder="" />
            </div>
          </div>
          <p className="text-base text-[#565560] text-center mt-4 mb-4">
            Weathery is committed to protecting and respecting your privacy, and
            we’ll only use your personal information to administer your account
            and to provide the products and services you requested from us.
          </p>
          <button className="" type="button">Submit</button>
        </form>
      </div>
    </div>
  );
}
