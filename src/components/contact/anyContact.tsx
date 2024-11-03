import ContactProfile from "../../assets/image/Contact-Profile.png";
import EmailIcon from "../../assets/image/email.png";
import FacebookIcon from "../../assets/image/facebook.png";
import InstragramIcon from "../../assets/image/instagram.png";

const AnyContact = () => {
  return (
    <div className="container-xl mx-auto bg-2e2e2e text-white p-4 md:px-32 md:py-10">
      {/* ส่วนของการติดต่อ */}
      <div className="bg-white rounded-xl p-4 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* รูปภาพของส่วนการติดต่อ */}
          <div>
            <h1 className="text-171717 text-center text-4xl mb-4">
              My Contact
            </h1>
            <div className="flex justify-center mt-8">
              {" "}
              {/* Add margin-top to create space */}
              <div className="rounded-full border-8 border-171717 w-64 h-64 bg-fad02c overflow-hidden flex justify-center relative z-0">
                {" "}
                {/* Set z-0 to keep it below the navbar */}
                <img
                  src={ContactProfile}
                  alt="Contact Profile"
                  style={{ transform: "scale(1.1) translateY(2%)" }}
                  className="z-0"
                />
              </div>
            </div>
          </div>

          {/* ข้อมูลการติดต่อ */}
          <div className="grid mt-3 ml-10">
            <div className="flex items-center mb-4">
              <img
                src={EmailIcon}
                alt="Email Icon"
                className="w-8 md:w-16 mr-3"
              />
              <h1 className="text-171717 text-lg md:text-2xl">
                setthapongkk3@gmail.com
              </h1>
            </div>
            <div className="flex items-center mb-4">
              <img
                src={FacebookIcon}
                alt="Facebook Icon"
                className="w-8 md:w-16 mr-3"
              />
              <h1 className="text-171717 text-lg md:text-2xl">
                Setthapong Kiankhao
              </h1>
            </div>
            <div className="flex items-center mb-4">
              <img
                src={InstragramIcon}
                alt="Instragram Icon"
                className="w-8 md:w-16 mr-3"
              />
              <h1 className="text-171717 text-lg md:text-2xl">morkkstp</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnyContact;
