import { aweicon, footer } from "../data/Data";
import "../App.css"

const Footer = () => {
  return (
    <div className="bg-white text-black py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col md:flex-row justify-around uppercase">
            {footer.map((val, index) => (
              <div key={index} className="mb-4 md:mb-0">
                <div className="text-2xl font-semibold mb-2">{val.header}</div>
                <div
                  className="flex flex-col"
                >
                  {val.title.map((item, subIndex) => (
                    <span
                      key={subIndex}
                      className="mr-2 mb-2 hover:text-red-500 cursor-pointer"
                    >
                      {item.subtitle}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6 bg-gray-100 rounded-lg shadow-md mt-4 md:mt-0">
          <h1 className="text-2xl font-semibold mb-4">
            SIGN UP FOR NEWSLETTER
          </h1>
          <p className="text-gray-600 mb-4">
            Don't miss out on exciting promotions and latest shopping news
          </p>
          <input
            type="text"
            name="text"
            placeholder="Your Email Address..."
            className="w-full md:w-2/3 p-4 border border-gray-300 rounded mb-4"
          />
          <button
            type="button"
            name="btn"
            className="bg-black text-white pt-4 pb-4 p-6 ml-4 rounded hover:bg-red-600"
          >
            SUBSCRIBE
          </button>

          <div className="flex justify-center mt-4">
            {aweicon.slice(2, 6).map((val, index) => (
              <div
                key={index}
                className="bg-white p-2 pr-4 pl-4 mr-2 text-2xl hover:bg-red-500 hover:text-white duration-300"
              >
                {val.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
