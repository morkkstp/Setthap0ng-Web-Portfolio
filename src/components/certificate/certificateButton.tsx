import { Link } from "react-router-dom";

const CertificateButton = () => {
  return (
    <>
      <div className="bg-[#2e2e2e]">
        <div className="flex justify-center">
          <h1 className="text-white text-2xl md:text-5xl mt-6 md:mt-14 mb-0 md:mb-2">
            Certificate
          </h1>
        </div>

        <div className="px-6 md:px-16 lg:px-32 py-10">
          <div className="bg-171717 p-6 md:p-10 text-center justify-center rounded-xl h-screen">
            <div
              className="w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center rounded-xl relative flex items-center justify-center"
              style={{ backgroundImage: "url('/wu-certificate.jpg')" }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>{" "}
              {/* Background overlay */}
              <div className="relative z-10 text-center p-4 sm:p-10 grid grid-rows-2 justify-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 font-bold opacity-100">
                  Walailak University
                </h1>
                <Link to="/wucertificate" className="btn bg-white rounded-xl px-6 sm:px-10 py-3 sm:py-6 text-lg sm:text-2xl w-auto opacity-100">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateButton;
