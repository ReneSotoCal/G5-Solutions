import Image from "next/image";

export default function WhyUsSection() {
  return (
    <>

      <div className="text-slate-800 py-16 px-4 w-full text-center">
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-slate-900">
            Why Choose Us?
          </h2>
          <p className="text-2xl mb-0 max-w-2xl mx-auto pb-8 italic">
            What Makes G5 Business Solutions Stand Out 
          </p>
      <div className="flex flex-col items-center gap-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full p-8">
              <Image
              src="/red-networking-img"
              alt="IT Networking Image 1"
              className="h-full w-full rounded-xl"
              height={1000}
              width={1000}
              />
            </div>
            <div className="w-full p-8">
              <ul className="flex flex-col justify-center p-0">
                <li className="flex flex-col items-center gap-4 m-4"> 
                  <Image
                    src="/list-icon.png"
                    alt="List icon"
                    height={50}
                    width={50}
                  />
                  <div>
                    <h3 className="font-bold text-lg">Industry Expertise</h3>
                    <p>Our team brings years of experience solving complex IT challenges.</p>
                  </div>
                </li>
                <li className="flex flex-col items-center gap-4 m-4"> 
                  <Image
                    src="/list-icon.png"
                    alt="List icon"
                    height={50}
                    width={50}
                  />
                  <div>
                    <h3 className="font-bold text-lg">Custom Solutions</h3>
                    <p>We design IT strategies to meet your specific goals.</p>
                  </div>
                </li>
                <li className="flex flex-col items-center gap-4 m-4"> 
                  <Image
                    src="/list-icon.png"
                    alt="List icon"
                    height={50}
                    width={50}
                  />
                  <div>
                    <h3 className="font-bold text-lg">Proactive Support</h3>
                    <p>24/7 monitoring ensures we detect and resolve issues before they escalate</p>
                  </div>
                </li>
                <li className="flex flex-col items-center gap-4 m-4"> 
                  <Image
                    src="/list-icon.png"
                    alt="List icon"
                    height={50}
                    width={50}
                  />
                  <div>
                    <h3 className="font-bold text-lg">End-To-End Security</h3>
                    <p>From endpoint to cloud, your data and systems are fully protected.</p>
                  </div>
                </li>
                <li className="flex flex-col items-center gap-4 m-4"> 
                  <Image
                    src="/list-icon.png"
                    alt="List icon"
                    height={50}
                    width={50}
                  />
                  <div>
                    <h3 className="font-bold text-lg">Scalability</h3>
                    <p>We help businesses grow with IT solutions that adapt to their needs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <a href="#contact" className="text-red-600 text-xl font-semibold transition-colors duration-200 ">
            More About Us <span>&rarr;</span>
          </a>
      </div>   

      </div>

    </>

  );
}
