import SendEmailProfile from "../../assets/image/Send-Mail_Profile.png";

const SendEmail = () => {
  return (
    <>
      <div className="container-xl mx-auto bg-2e2e2e text-white p-4 md:px-32 -mt-10">
        {/* ส่วนของการส่งอีเมล */}
        <div className="bg-fad02c rounded-xl p-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid place-items-center">
              <div>
                <h1 className="text-3xl md:text-5xl text-171717 text-center mt-8 mb-5">
                  Got a project in mind?
                </h1>
              </div>
              <div className="flex justify-center">
                <div className="rounded-full bg-white w-72 h-72 md:w-[350px] md:h-[350px] overflow-hidden flex justify-center">
                  <img
                    src={SendEmailProfile}
                    alt="Send Email Profile"
                    style={{ transform: "scale(1.1) translateY(2%)" }}
                    className="z-0"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
                <div className="md:mr-4 mb-4">
                  <h1 className="text-171717 text-xl">Your Name</h1>
                  <input
                    type="text"
                    className="border-2 border-zinc-300 rounded-lg w-full p-2"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <h1 className="text-171717 text-xl">Your Email</h1>
                  <input
                    type="text"
                    className="border-2 border-zinc-300 rounded-lg w-full p-2"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div>
                  <h1 className="text-171717 text-xl">Your Message</h1>
                  <textarea
                    name=""
                    id=""
                    className="border-2 border-zinc-300 rounded-lg w-full p-2"
                    rows={10}
                    style={{ resize: "none" }}
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="mt-4 flex justify-end md:justify-start">
                <button
                  className="text-xl text-white bg-171717 px-6 py-2 rounded-full flex"
                  onClick={() => alert("Waiting, This Function is Develop.")}
                >
                  Send Email
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 ml-3"
                  >
                    <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendEmail;
