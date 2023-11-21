import { useState } from "react";
import cubeImage from "./assets/cube.svg";
import mainImageMb from "./assets/mainImagemb.svg";
import mainImageDsktp from "./assets/mainImageDesktop.svg";
import mainImageShadow from "./assets/shadowmb.svg";
import mainImageArrow from "./assets/arrow.svg";
import mainShadowDsktp from "./assets/shadowDesktop.svg";

function App() {

  const [openQuestion, setOpenQuestion] = useState(null)

  const faqData = [
    {
      id: 1,
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
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
      answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      id: 4,
      question: "Can I cancel my subscription",
      answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      id: 5,
      question: "Do you provide additional support",
      answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  const handleClick = (question) => {
    setOpenQuestion((prevQuestion) => (prevQuestion === question ? null : question))
  }

  return (
    <>
      <main className="bg-[url('./assets/Rectangle.svg')] h-screen bg-cover flex items-center justify-center">
        <section className="bg-white w-11/12 h-fit rounded-2xl grid grid-cols-5 grid-rows-5 md:flex md:h-3/5 md:w-7/12 relative">
          <div className="absolute inset-x-0 -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden flex flex-col items-center justify-center">
            <img
              src={mainImageMb}
              alt="main icon mobile"
              className="w-64 relative z-10"
            />
            <img
              src={mainImageShadow}
              alt="shadow icon mobile"
              className="w-64 absolute top-20 left-1/2 transform -translate-x-1/2 z-0"
            />
          </div>
          <div className="hidden md:flex md:w-1/2">
            <img
              src={cubeImage}
              alt="cube icon desktop"
              className="w-36 absolute bottom-[359px] z-20"
            />
            <img
              src={mainImageDsktp}
              alt="main icon desktop"
              className="w-96 absolute bottom-80 z-10"
            />
            <img
              src={mainShadowDsktp}
              alt="shadow icon desktop"
              className="w-[946px] absolute bottom-20 -left-80 z-0"
            />
          </div>

          <div className="font-mainFont p-6 pt-1 row-start-2 row-end-6 col-start-1 col-end-7">
            <div className="flex items-center justify-center md:items-start md:justify-start">
              <h1 className="font-black text-4xl pb-8 pt-5 md:pt-10">FAQ</h1>
            </div>
            <div className="relative pb-2 md:pb-5">
              {faqData.map((item) => (
                <div key={item.id} className="border-b-2 pb-5 mt-4">
                  <div className="flex items-center" onClick={() => handleClick(item.id)}>
                    <h2 className="text-sm hover:text-secondColor flex-grow">
                      {item.question}
                    </h2>
                    <img
                      src={mainImageArrow}
                      alt="arrow section"
                      className={`ml-2 transform ${openQuestion === item.id ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </div>
                  {openQuestion === item.id && item.answer && (
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