import HTML_Logo from "../../assets/image/html-5.png";
import CSS_Logo from "../../assets/image/css-3.png";
import JS_Logo from "../../assets/image/js.png";
import Python_Logo from "../../assets/image/python.png";

const ProgrammingSkill = () => {
  return (
    <>
      <div className="container-xl mx-auto bg-171717 text-white p-4 px-32 py-10">
        <div className="h-full">
          {/* <div className="relative">
            <div className="w-80 h-80 bg-171717 rounded-full absolute z-0 -top-56 -left-[20%]"></div>
            <div className="w-80 h-80 bg-171717 rounded-full absolute z-0 -top-52 left-[1%]"></div>
            <div className="w-80 h-80 bg-171717 rounded-full absolute z-0 -top-44 left-[20%]"></div>
            <div className="w-80 h-80 bg-171717 rounded-full absolute z-0 -top-64 left-[40%]"></div>
            <div className="w-80 h-80 bg-171717 rounded-full absolute z-0 -top-56 left-[54%]"></div>
            <div className="w-80 h-80 bg-171717 rounded-full absolute z-0 -top-44 left-[68%]"></div>
            <div className="w-80 h-80 bg-171717 rounded-full absolute z-0 -top-60 left-[84%]"></div>
          </div> */}

          <div className="">
            {/* Header */}
            <div className="flex justify-center mt-4 mb-10 md:mt-16 md:mb-16">
              <h1 className="text-5xl md:text-5xl">
                My <span className="text-fad02c">Skill</span> Programming
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:mb-16">
              {/* HTML Part */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                <div className="flex justify-center">
                  <div className="w-20 h-20 md:w-40 md:h-40 bg-white rounded-full flex justify-center items-center">
                    <img
                      src={HTML_Logo}
                      alt="HTML Logo"
                      className="w-12 h-12 md:w-24 md:h-24"
                    />
                  </div>
                </div>
                <div className="-mt-2 md:mt-8">
                  <div className="flex justify-between mb-2">
                    <h1 className="text-xl md:text-2xl">HTML</h1>
                    <h1 className="text-xl md:text-2xl text-fad02c">80%</h1>
                  </div>
                  <div className="relative">
                    <div className="bg-white w-full h-6 md:h-8 rounded-lg absolute"></div>
                    <div className="bg-fad02c w-[80%] h-6 md:h-8 rounded-l-lg absolute"></div>
                  </div>
                </div>
              </div>

              {/* CSS Part */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                <div className="flex justify-center">
                  <div className="w-20 h-20 md:w-40 md:h-40 bg-white rounded-full flex justify-center items-center">
                    <img src={CSS_Logo} alt="CSS Logo" className="w-12 h-12 md:w-24 md:h-24" />
                  </div>
                </div>
                <div className="-mt-2 md:mt-8">
                  <div className="flex justify-between mb-2">
                    <h1 className="text-2xl">CSS</h1>
                    <h1 className="text-2xl text-fad02c">75%</h1>
                  </div>
                  <div className="relative">
                    <div className="bg-white w-full h-6 md:h-8 rounded-lg absolute"></div>
                    <div className="bg-fad02c w-[75%] h-6 md:h-8 rounded-l-lg absolute"></div>
                  </div>
                </div>
              </div>

              {/* JavaScript Part */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                <div className="flex justify-center">
                  <div className="w-20 h-20 md:w-40 md:h-40 bg-white rounded-full flex justify-center items-center">
                    <img src={JS_Logo} alt="JS Logo" className="w-12 h-12 md:w-24 md:h-24" />
                  </div>
                </div>
                <div className="-mt-2 md:mt-8">
                  <div className="flex justify-between mb-2">
                    <h1 className="text-2xl">JS</h1>
                    <h1 className="text-2xl text-fad02c">90%</h1>
                  </div>
                  <div className="relative">
                    <div className="bg-white w-full h-6 md:h-8 rounded-lg absolute"></div>
                    <div className="bg-fad02c w-[90%] h-6 md:h-8 rounded-l-lg absolute"></div>
                  </div>
                </div>
              </div>

              {/* Python Part */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
                <div className="flex justify-center">
                  <div className="w-20 h-20 md:w-40 md:h-40 bg-white rounded-full flex justify-center items-center">
                    <img
                      src={Python_Logo}
                      alt="Python Logo"
                      className="w-12 h-12 md:w-24 md:h-24"
                    />
                  </div>
                </div>
                <div className="-mt-2 md:mt-8">
                  <div className="flex justify-between mb-2">
                    <h1 className="text-2xl">Python</h1>
                    <h1 className="text-2xl text-fad02c">60%</h1>
                  </div>
                  <div className="relative">
                    <div className="bg-white w-full h-6 md:h-8 rounded-lg absolute"></div>
                    <div className="bg-fad02c w-[75%] h-6 md:h-8 rounded-l-lg absolute"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgrammingSkill;
