import SkillProfile from "../../assets/image/Skill-Profile.png";
import HTML_Logo from "../../assets/image/html-5.png";
import CSS_Logo from "../../assets/image/css-3.png";
import JS_Logo from "../../assets/image/js.png";
import Python_Logo from "../../assets/image/python.png";

const MindmapSkill = () => {
  return (
    <>
      <div className="container-xl mx-auto bg-2e2e2e text-white px-32 py-10">
        <div className="">
          {/* <div className="absolute top-4 left-10 text-fad02c text-6xl">
            &lt;/&gt;
          </div>
          <div className="absolute top-36 right-0 text-fad02c text-8xl">
            &lt;/&gt;
          </div> */}

          <div className="grid grid-cols-1 md:flex md:justify-center gap-10 place-items-center mt-6 mb-6">
            <div className="w-20 h-20 md:w-40 md:h-40 bg-white rounded-full flex justify-center items-center">
              <img
                src={HTML_Logo}
                alt="HTML Logo"
                className="w-10 h-10 md:w-24 md:h-24"
              />
            </div>
            <div className="w-20 h-20 md:w-40 md:h-40 bg-white rounded-full flex justify-center items-center">
              <img
                src={CSS_Logo}
                alt="CSS Logo"
                className="w-10 h-10 md:w-24 md:h-24"
              />
            </div>
            <div className="w-40 h-40 md:w-80 md:h-80 bg-white rounded-full flex justify-center">
              <img
                src={SkillProfile}
                alt="Skill Profile"
                className="w-36 h-36 md:w-72 md:h-72"
              />
            </div>
            <div className="w-20 h-20 md:w-40 md:h-40 bg-white rounded-full flex justify-center items-center">
              <img
                src={JS_Logo}
                alt="JS Logo"
                className="w-10 h-10 md:w-24 md:h-24"
              />
            </div>
            <div className="w-20 h-20 md:w-40 md:h-40 bg-white rounded-full flex justify-center items-center">
              <img
                src={Python_Logo}
                alt="Python Logo"
                className="w-10 h-10 md:w-24 md:h-24"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MindmapSkill;
