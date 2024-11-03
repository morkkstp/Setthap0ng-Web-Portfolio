import { Link } from 'react-router-dom'; 

const CaptionWithContact = () => {
  return (
    <div className="container-xl mx-auto bg-2e2e2e text-white p-4">
      <div className="grid grid-rows-2 mt-20 mb-20">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-5xl text-center">
            &#123;
            <span className="text-fad02c"> Let's </span>
            <span>work </span>
            <span className="text-fad02c">Together! </span>
            &#125;
          </h1>
        </div>
        <div className="flex justify-center -mt-5 md:mt-0">
          <Link to="/contact" className="bg-white hover:bg-2e2e2e text-black hover:text-white border-2 border-white py-2 px-4 rounded-full mt-5 text-2xl md:text-3xl w-48 text-center">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptionWithContact;
