import weda1 from "../../assets/image/weda1.png";
import weda2 from "../../assets/image/weda2.png";
import startupth from "../../assets/image/Startup Thailand League_University.jpg";

const ShowCertificate = () => {
  return (
    <>
      <div className="container-xl mx-auto bg-2e2e2e">
        <div className="grid grid-rows-2 place-content-center text-center">
          <h1 className="text-white text-2xl md:text-5xl mt-6 md:mt-14 mb-2 md:mb-2">
            Certificate
          </h1>
          <h1 className="text-fad02c text-2xl md:text-5xl mt-2 md:mt-8 mb-0 md:mb-2">
            Walailak University
          </h1>
        </div>

        <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-6 md:py-10">
          <div className="bg-171717 p-4 md:p-8 lg:p-10 text-center rounded-xl h-auto">
            <div className="space-y-6 md:space-y-8">
              <div className="flex justify-center">
                <img
                  src={weda1}
                  alt="weda1"
                  className="w-full md:w-4/6 lg:w-3/6 xl:w-2/6 p-4 md:p-6"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={weda2}
                  alt="weda2"
                  className="w-full md:w-4/6 lg:w-3/6 xl:w-2/6 p-4 md:p-6"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={startupth}
                  alt="startupth"
                  className="w-full md:w-4/6 lg:w-3/6 xl:w-2/6 p-4 md:p-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <button type="button" className="btn bg-white text-xl px-4 py-2 mb-10 rounded-xl" onClick={() => window.history.back()}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowCertificate;
