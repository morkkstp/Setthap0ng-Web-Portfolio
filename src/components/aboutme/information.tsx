import profile from "../../assets/image/pf.jpg";
import wulogo from "../../assets/image/LogoWalailakUniversityEng.png";

const Information = () => {
  return (
    <div className="bg-2e2e2e">
      <div className="flex justify-center">
        <h1 className="text-white text-2xl md:text-5xl mt-6 md:mt-14">
          Welcome to <span className="text-fad02c">Setthap0ng</span> Zone.
        </h1>
      </div>

      {/* ส่วนของการแนะนำข้อมูลส่วนตัว */}
      <div className="container-xl mx-auto px-6 py-6 md:px-40 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-171717 text-white rounded-lg">
          <div className="flex justify-center bg-white rounded-lg">
            <img
              src={profile}
              alt="profile"
              className="size-48 md:size-96 rounded-full mt-4 mb-4"
            />
          </div>
          <div className="text-lg md:text-3xl content-center p-0">
            <div>
              <h1 className="flex justify-center text-2xl md:text-5xl mb-2 md:mb-4 mt-4 md:-mt-5">About Me</h1>
            </div>
            <div className="grid justify-items-center mb-5 md:mb-0">
              <div className="grid grid-cols-[30%_70%] md:grid-cols-[40%_60%]">
                <div className="ml-1 mr-10 md:ml-16 md:mr-10">
                  <h1>Name:</h1>
                  <h1>Nickname:</h1>
                  <h1>Birthdate:</h1>
                  <h1>Age:</h1>
                </div>
                <div className="mr-10">
                  <h1 className="text-fad02c">Setthapong Kiankhao</h1>
                  <h1 className="text-fad02c">Mork</h1>
                  <h1 className="text-fad02c">03 October 2002</h1>
                  <h1 className="text-fad02c">22 Years Old</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ส่วนของการแนะนำประวัติการศึกษา */}
      <div className="container-xl mx-auto px-6 py-6 md:px-40 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-171717 text-white rounded-lg mb-5">
          <div className="text-lg md:text-3xl content-center p-0">
            <div>
              <h1 className="flex justify-center text-2xl md:text-5xl mb-2 md:mb-4 mt-4 md:-mt-5">
                Education
              </h1>
            </div>
            <div className="grid justify-items-center mb-5 md:mb-0 text-center">
              <h1>
                <span className="text-fad02c">Walailak University (WU)</span><br />
                <span className="text-fad02c">2021-2024</span>
              </h1>
            </div>
          </div>
          <div className="flex justify-center bg-white rounded-lg">
            <img src={wulogo} alt="wulogo" className="size-48 md:size-96 rounded-lg" />
          </div>
        </div>
      </div>
      {/* <div className="absolute top-16 left-10 text-fad02c text-5xl z-0">
        &lt;/&gt;
      </div>
      <div className="absolute top-40 right-10 text-fad02c text-5xl z-0">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-0 left-10 text-fad02c text-9xl z-0">
        &lt;/&gt;
      </div> */}
    </div>
  );
};

export default Information;
