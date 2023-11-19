import cubeImage from "./assets/cube.svg";
import mainImageMb from "./assets/mainImagemb.svg";
import mainImageDstkp from "./assets/mainImagedstk.svg";
import mainImageShadow from "./assets/shadowmb.svg";
import mainImageArrow from "./assets/arrow.svg";

function App() {
  return (
    <>
      <main className="bg-[url('./assets/Rectangle.svg')] h-screen bg-cover flex items-center justify-center">
        <section className="bg-white w-80 h-fit rounded-lg grid grid-cols-5 grid-rows-5">
          <div className="absolute top-8 right-12">
            <picture>
              <source media="(min-width:480px)" srcSet={mainImageDstkp} />
              <img
                src={mainImageMb}
                alt="main icon mobile"
                className="w-64 mr-9"
              />
            </picture>
            <img
              src={mainImageShadow}
              alt="shadow icon mobile"
              className="ml-5 -mt-20 pb-2"
            />
          </div>

          <div className="font-mainFont p-6 pt-1 row-start-2 row-end-6 col-start-1 col-end-7">
            <h1 className="font-black text-4xl pb-8 pl-9 ml-16">
              FAQ
            </h1>
            <div className="relative">
              <div className="border-b-2 pb-5">
                <h2 className="text-sm">How many team members can I invite?</h2>
                <img src={mainImageArrow} alt="arrow section" className="absolute right-0 top-2" />
              </div>
              <div className="border-b-2 pb-5">
                <h2 className="text-sm pb-3 pt-3 font-bold w-56">Whats is the maximum file upload size?</h2>
                <img src={mainImageArrow} alt="arrow section" className="absolute right-0 top-16 rotate-180" />
                <p className="font-extralight text-xs w-5/6">
                No more than 2GB. All files in your account must fit your
                allotted storage space.</p>
              </div>
              <div className="border-b-2 pb-3">
                <h2 className="text-sm pb-3 pt-3">How do I reset my password</h2>
                <img src={mainImageArrow} alt="arrow section" className="absolute right-0 top-[194px]" />
              </div>
              <div className="border-b-2 pb-2">
                <h2 className="text-sm pb-2 pt-3">Can I cancel my suscription</h2>
                <img src={mainImageArrow} alt="arrow section" className="absolute right-0 top-[250px]" />
              </div>
              <div className="border-b-2 pb-2 mb-7">
                <h2 className="text-sm pb-3 pt-3">Do you provide additional support</h2>
                <img src={mainImageArrow} alt="arrow section" className="absolute right-0 top-[305px]" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

{
  /* <h2>c</h2>
              <img
                src={mainImageArrow}
                alt="arrow section"
                className="w-3"
              />
              <h2 className="font-bold">
                Whats is the maximum file upload size?
              </h2>
              <p className="font-extralight text-xs">
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </p>
              <h2>How do I reset my password</h2>
              <h2>Can I cancel my suscription</h2>
              <h2>Do you provide additional support</h2> */
}
