import cubeImage from "./assets/cube.svg";
import mainImageMb from "./assets/mainImagemb.svg";
import mainImageDsktp from "./assets/mainImageDesktop.svg";
import mainImageShadow from "./assets/shadowmb.svg";
import mainImageArrow from "./assets/arrow.svg";
import mainShadowDsktp from './assets/shadowDesktop.svg'

function App() {
  const faqData = [
    {
      id: 1,
      question: "How many team members can I invite?",
      answer: null,
    },
    {
      id: 2,
      question: "Whats is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      id: 3,
      question: "How do I reset my password",
      answer: null,
    },
    {
      id: 4,
      question: "Can I cancel my subscription",
      answer: null,
    },
    {
      id: 5,
      question: "Do you provide additional support",
      answer: null,
    },
  ];

  return (
    <>
      <main className="bg-[url('./assets/Rectangle.svg')] h-screen bg-cover flex items-center justify-center">
        <section className="bg-white w-11/12 h-fit rounded-2xl grid grid-cols-5 grid-rows-5 md:flex md:h-3/5 md:w-7/12">
          <div className="absolute top-7 right-12 md:hidden">
            <img
              src={mainImageMb}
              alt="main icon mobile"
              className="w-64 mr-4"
            />
            <img
              src={mainImageShadow}
              alt="shadow icon mobile"
              className="w-64 pb-2 absolute top-32 right-6"
            />
          </div>
          <div className="hidden md:flex md:w-1/2">
            <img
              src={mainImageDsktp}
              alt="main icon desktop"
              className="w-96 absolute bottom-80 left-60 z-10"
            />
            <img
              src={cubeImage}
              alt="cube icon desktop"
              className="w-36 absolute bottom-[359px] left-60 z-20"
            />
            <img
              src={mainShadowDsktp}
              alt="shadow icon desktop"
              className="w-[946px] absolute bottom-20 -left-80 z-0"
            />

          </div>

          <div className="font-mainFont p-6 pt-1 row-start-2 row-end-6 col-start-1 col-end-7 md:pr-24">
            <div className="flex items-center justify-center md:items-start md:justify-start">
              <h1 className="font-black text-4xl pb-8 pt-5 md:pt-10">FAQ</h1>
            </div>
            <div className="relative pb-2 md:pb-5">
              {faqData.map((item) => (
                <div key={item.id} className="border-b-2 pb-5 mt-4">
                  <div className="flex items-center">
                    <h2 className="text-sm hover:text-secondColor flex-grow">
                      {item.question}
                    </h2>
                    <img
                      src={mainImageArrow}
                      alt="arrow section"
                      className="ml-2"
                    />
                  </div>
                  {item.answer && (
                    <div className="mt-2">
                      <p className="font-extralight text-xs w-5/6">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
