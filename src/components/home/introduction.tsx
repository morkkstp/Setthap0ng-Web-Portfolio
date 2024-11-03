import profileIntroduction from "../../assets/image/pf.jpg";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="container-xl mx-auto bg-2e2e2e text-white p-4">
      <div className="grid grid-cols-1 md:grid md:grid-cols-2">
        <div className=" flex justify-center items-center">
          <div className="mt-14 mb-14 md:mt-20 md:mb-20 ">
            <img
              src={profileIntroduction}
              alt="Profile Introduction"
              className="rounded-full w-56 h-56 md:w-[450px] md:h-[450px]"
            />
          </div>
          {/* <div className="absolute top-0 left-1 w-20 h-20 border-t-4 border-l-4 border-[#fad02c]"></div>
          <div className="absolute top-1 right-2 md:bottom-10 md:right-10 text-[#fad02c] text-5xl">
            &lt;/&gt;
          </div>
          <div className="absolute top-20 left-4 sm:top-28 sm:left-10 md:top-72 md:left-24 rounded-full bg-[#fad02c] w-20 h-20 sm:w-40 sm:h-40 md:w-80 md:h-80 z-0"></div>
          <div className="absolute top-24 left-20 sm:top-36 sm:left-28 md:top-64 md:left-30 rounded-full bg-[#fad02c] w-20 h-20 sm:w-40 sm:h-40 md:w-80 md:h-80 z-0"></div>
          <div className="absolute top-4 left-28 sm:top-8 sm:left-40 md:top-10 md:left-80 rounded-full bg-[#fad02c] w-20 h-20 sm:w-40 sm:h-40 md:w-80 md:h-80 z-0"></div> */}
        </div>

        <div className="relative content-center mb-14">
          <div className="mt-0 mb-5 md:mt-20 md:mb-20">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Hi, I am{" "}
              <span className="text-fad02c mt-5">Setthapong Kiankhao</span>
            </h1>
            <br />
            <hr className="bg-fad02c border-fad02c h-1" />
            <h1 className="text-xl sm:text-2xl md:text-4xl mt-5">
              I'm ITD Student At Walailak University.
            </h1>
            <br />
            <div className="flex justify-center">
              <Link
                to="/aboutme"
                className="bg-fad02c hover:bg-2e2e2e text-black hover:text-dcb72a border-2 border-dcb72a py-2 px-4 rounded-full mt-5 text-2xl md:text-3xl w-48 text-center"
              >
                About Me
              </Link>
            </div>
          </div>
          {/* <div className="absolute md:top-10 md:left-10 text-fad02c text-5xl">
            &lt;/&gt;
          </div>
          <div className="absolute md:top-28 md:right-10 text-fad02c text-5xl">
            &lt;/&gt;
          </div>
          <div className="absolute buttom-0 right-1 w-20 h-20 border-b-4 border-r-4 border-fad02c"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
