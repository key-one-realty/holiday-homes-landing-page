import Image from "next/image";
import CTAForm from "./components/CTAForm";
import Footer from "./components/Footer";
import MobileCTAForm from "./components/MobileCTAForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <header className="hero_section w-full flex justify-center items-center">
        <div className="bg-hero-section bg-cover bg-center h-[50vh] w-full max-w-[81.481vw] ">
          <nav className="flex items-start justify-between w-full mt-4 p-4 mx-auto">
            <Image src="/holiday-homes-1.png" alt="logo" width={184} height={42} />
          </nav>
          <div className="hero-section-contents mt-10 flex flex-col gap-2 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold lg:w-[41.997vw]">
              List Your Property With Key One Holiday Homes
            </h1>
            <p className="text-base md:text-xl lg:w-[58.135vw]">
              Maximize your investment and let our dedicated team at Key One Holiday Homes handle the details, ensuring a seamless renting experience for both you and your guests.
            </p>
          </div>
        </div>
      </header>
      <CTAForm />

      <section className="benefits flex flex-col gap-8 justify-center items-center py-28">
        <div className="max-w-[81.481vw] flex flex-col justify-center items-center gap-8">
          <div className="benefits-header flex flex-col justify-center items-center w-full">
            <h2 className="text-[27.65px] w-full lg:text-[40px] xl:w-[37.103vw] font-extrabold text-center text-text-color">
              Let The Professionals Manage Your Holiday Home
            </h2>
            <p className="text-text-color text-sm font-light w-full md:w-[44.643vw] text-center">
              Maximize your investment and let our dedicated team at Key One Holiday Homes handle the details, ensuring a seamless renting experience for both you and your guests.
            </p>
          </div>

          <div className="benefits-cards flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center lg:items-start gap-20">
            <div className="benefit-card w-[300px] flex flex-col justify-center items-center gap-4">
              <Image src="/graph line.svg" alt="benefit-1" width={64} height={64} />
              <h3 className="text-xl font-bold text-center">Increased Return On Investment</h3>
              <p className="text-text-color text-justify sm:text-sm xl:text-base">
                Our professional photography and marketing team will ensure your property is showcased in the best light.
              </p>
            </div>
            <div className="benefit-card w-[300px] flex flex-col justify-center items-center gap-4">
              <Image src="/office chair.svg" alt="benefit-2" width={64} height={64} />
              <h3 className="text-xl font-bold text-center">Reduced Workload</h3>
              <p className="text-text-color text-justify sm:text-sm xl:text-base">
                Increased efficiency and more time for what matters - that is what Key One Holiday Homes promises you with comprehensive short term rental property management solutions.
              </p>
            </div>
            <div className="benefit-card w-[300px] flex flex-col justify-center items-center gap-4">
              <Image src="/person male.svg" alt="benefit-3" width={64} height={64} />
              <h3 className="text-xl font-bold text-center">Hassle-Free Management</h3>
              <p className="text-text-color text-justify sm:text-sm xl:text-base">
                With Key One Holiday Home’s comprehensive suite of services, ensuring seamless bookings, top-notch guest experiences, and a worry-free income stream you can confidently entrust your vacation home, knowing that every detail is handled with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="services flex flex-col gap-8 justify-center items-center pb-28 w-full">
        <div className="max-w-[81.481vw] w-full flex flex-col justify-center items-center gap-8">
          <div className="services-header flex flex-col w-full justify-center items-center">
            <h2 className="text-[27.65px] lg:text-[40px] text-center font-extrabold text-text-color">
              Our Services
            </h2>
          </div>
          <div className="service-cards-container w-full">
            <div className="service-cards flex flex-wrap justify-center lg:grid justify-items-center gap-7 w-full">
              <div className="shadow service-card w-full md:w-8/12 lg:w-[25.926vw]  flex flex-col justify-center rounded-[10px] items-center gap-4 py-12">
                <Image src="/phone.svg" alt="service-1" width={45} height={45} />
                <h3 className="text-xl font-semibold text-text-color">24/7 Customer Support</h3>
                <p className="text-text-color text-center px-7 text-sm xl:text-base">
                  Experience peace of mind with our around-the-clock customer service, ensuring your needs are met and any queries are resolved promptly
                </p>
              </div>
              <div className="shadow service-card w-full md:w-8/12 lg:w-[25.926vw] flex flex-col justify-center rounded-[10px] items-center gap-4 py-12">
                <Image src="/paper.svg" alt="service-2" width={34} height={45} />
                <h3 className="text-xl font-bold text-center">Hassle Free Management</h3>
                <p className="text-text-color text-center px-7 text-sm xl:text-base">
                  From maintenance and bookings to guest interactions and financial matters - we manage your property with precision in every detail
                </p>
              </div>
              <div className="shadow service-card w-full md:w-8/12 lg:w-[25.926vw]  flex flex-col justify-center rounded-[10px] items-center gap-4 py-12">
                <Image src="/person female.svg" alt="service-2" width={45} height={45} />
                <h3 className="text-xl font-bold text-center">Housekeeping & Maintenance</h3>
                <p className="text-text-color text-center px-7 text-sm xl:text-base">
                  Our short term rental cleaning and maintenance team is dedicated to keeping your property in pristine condition before and after every guest
                </p>
              </div>
              <div className="shadow service-card w-full md:w-8/12 lg:w-[25.926vw] flex flex-col justify-center rounded-[10px] items-center gap-4 py-12">
                <Image src="/quill.svg" alt="service-2" width={45} height={45} />
                <h3 className="text-xl font-bold text-center">Interior Design</h3>
                <p className="text-text-color text-center px-7 text-sm xl:text-base">
                  At Key One Design Solution, we excel in turning your holiday home into a refined and comfortable retreat through our personalized interior design services.
                </p>
              </div>
              <div className="service-card w-full md:w-8/12 lg:w-[25.926vw]  flex flex-col justify-center rounded-[10px] items-center gap-4 py-12">
                <Image src="/graph pie.svg" alt="service-2" width={45} height={45} />
                <h3 className="text-xl font-bold text-center">Marketing & Advertising</h3>
                <p className="text-text-color text-center px-7 text-sm xl:text-base">
                  Ensure your investment gets the spotlight it deserves in the competitive market with our cutting-edge vacation rental marketing and advertising service
                </p>
              </div>
              <div className="shadow service-card w-full md:w-8/12 lg:w-[25.926vw]  flex flex-col justify-center rounded-[10px] items-center gap-4 py-12">
                <Image src="/checklist.svg" alt="service-2" width={45} height={45} />
                <h3 className="text-xl font-bold text-center">In-person Check in/Check out</h3>
                <p className="text-text-color text-center px-7 text-sm xl:text-base">
                  Ensure a seamless and memorable stay for both guests and hosts alike with our highly-rated hospitality services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-12 justify-center items-center w-full">
        <h1 className="text-center text-text-color text-[27.65px] lg:text-[40px] font-extrabold">Awards and Recognition</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-24 w-full">
          <div className="award-icon flex flex-col justify-center items-center gap-6">
            <Image src="/luxury-lifestyle.svg" alt="luxury lifestyle" width={209} height={190} />
            <p>
              2023 - 2024
            </p>
          </div>
          <div className="award-icon flex flex-col justify-center items-center gap-6">
            <Image src="/arabian-award.svg" alt="Arabian Award" width={116} height={190} />
            <p>
              2022 - 2023
            </p>
          </div>
          <div className="award-icon flex flex-col justify-center items-center gap-6">
            <Image src="/arabian-award.svg" alt="Arabian Award" width={116} height={190} />
            <p>
              2021 - 2022
            </p>
          </div>
          <div className="award-icon flex flex-col justify-center items-center gap-6">
            <Image src="/arabian-award.svg" alt="Arabian Award" width={116} height={190} />
            <p>
              2020 - 2021
            </p>
          </div>
        </div>
      </section>
      <section className="cta-valuation flex flex-col gap-8 justify-center items-center py-28 w-full">
        <div className="max-w-[81.481vw] w-full flex flex-col justify-center items-center gap-8">
          <div className="cta-valuation-header flex flex-col w-full justify-center items-start">
            <h2 className="text-[27.65px] lg:text-[40px] font-extrabold text-text-color text-center w-full">
              Less Stress, More Freedom, More Money
            </h2>
          </div>
          <div className="text-sm lg:text-xl text-text-color text-justify md:text-center">
            <p>
              Experience less stress and more freedom with our property management services. Let us handle late-night emergencies, paperwork, and tedious tasks, allowing you to focus on quality time with loved ones. Efficiently managing your portfolio, minimizing delays, and negotiating favorable rates, we enhance your property&apos;s profitability, ensuring more money in your pocket.
            </p>
          </div>
        </div>
        <MobileCTAForm />
      </section>
      <section className="video w-full flex justify-center items-center">
        <div className="max-w-[81.481vw] flex flex-col-reverse lg:flex-row gap-8 justify-around lg:justify-between lg:gap-32 xl:justify-around items-center pb-28 w-full">
          <div className="lhs video-container bg-opacity-30 rounded-[10px] bg-lime-500 w-full lg:w-[35.402vw] h-[52.953vh] flex justify-start items-center">
            <div className="relative w-[90vw] lg:w-[35.865vw] h-[50.314vh]">
              <Image src="/video-thumbnail.jpeg" className="lg:ml-8 rounded-[10px] object-cover" alt="video" fill />
              <div className="play-button flex justify-center items-center absolute top-1/2 transform translate-x-[32.02vw] md:translate-x-[38.02vw] lg:translate-x-[32.02vw]  -translate-y-1/2">
                <div className="w-[20vw] md:w-[9.259vw] h-[14.257vh] relative">
                  <Image src="/play.svg" alt="play" fill />
                </div>
              </div>
            </div>
          </div>
          <div className="rhs flex flex-col gap-4 justify-center items-center w-full lg:w-[423px]">
            <h2 className="text-[27.65px] text-center lg:text-left xl:text-[40px] font-extrabold text-text-color">
              Looking for a better way to manage your holiday home?
            </h2>
            <p className="text-text-color text-center text-sm md:text-base lg:text-left">
              We take out all the day-to-day issues of managing a holiday home rental and bring in happy faces and wide smiles.
            </p>
          </div>
        </div>
      </section>
      <section className="mockup flex gap-8 justify-center items-center py-28 w-full bg-lime-500 bg-opacity-30">
        <div className="max-w-[81.481vw] flex flex-col lg:flex-row md:justify-between xl:justify-evenly items-center gap-8">
          <div className="mockup -mt-56 md:mt-0 w-10/12 h-[376px] md:w-5/12 relative">
            <Image src="/landlord-portal-mockup.png" className="object-contain" alt="mockup" fill />
          </div>
          <div className="mockup-text flex flex-col gap-11 justify-center items-center lg:items-start w-full lg:w-6/12">
            <div className="mockup-header">
              <h2 className="text-[27.65px] lg:text-[40px] text-center lg:text-left font-extrabold text-text-color w-full lg:w-[338px]">
                Download Our Landlords Portal
              </h2>
              <p className="text-text-color">
                Where control and income maximization are at your fingertips.
              </p>
            </div>
            <div className="app-benefits grid md:grid-cols-2 justify-items-center gap-x-12 gap-y-12">
              <div className="benefit text-center lg:text-left">
                <h1 className="text-2xl font-semibold">
                  Live Calendar
                </h1>
                <p className="text-center md:text-center lg:text-left">
                  Oversee your property’s booking schedule
                </p>
              </div>
              <div className="benefit text-center lg:text-left">
                <h1 className="text-2xl font-semibold">
                  Easy-Access Statements
                </h1>
                <p className="text-center md:text-center lg:text-left">
                  Simplify your financial tracking with comprehensible reports
                </p>
              </div>
              <div className="benefit text-center lg:text-left">
                <h1 className="text-2xl font-semibold">
                  Detailed Property Information
                </h1>
                <p className="text-center md:text-center lg:text-left">
                  Explore your property’s photos, descriptions, and amenities
                </p>
              </div>
              <div className="benefit text-center lg:text-left">
                <h1 className="text-2xl font-semibold">
                  Instant Occupancy Insights
                </h1>
                <p className="text-center md:text-center lg:text-left">
                  Quickly check the number of current and upcoming guests
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners flex flex-col gap-8 justify-center items-center py-28 w-full">
        <div className="max-w-[81.481vw] w-full flex flex-col justify-center items-center gap-8">
          <div className="partners-header flex flex-col w-full justify-center items-center">
            <h2 className="text-[27.65px] lg:text-[40px] font-extrabold text-text-color text-center w-full">
              Our Partners
            </h2>
          </div>
          <div className="partners-cards flex flex-col md:flex-row justify-center items-center gap-12 w-full">
            <div className="partner-card w-[40.059vw] md:w-[13.228vw] h-10 relative">
              <Image src="/airbnb.svg" className="object-contain" alt="partner-1" fill />
            </div>
            <div className="partner-card w-[40.059vw] md:w-[13.228vw] h-10 relative">
              <Image src="/bookingcom.svg" className="object-contain" alt="partner-2" fill />
            </div>
            <div className="partner-card w-[40.059vw] md:w-[13.228vw] h-10 relative">
              <Image src="/property-finder.svg" className="object-contain" alt="partner-3" fill />
            </div>
            <div className="partner-card w-[40.059vw] md:w-[13.228vw] h-10 relative">
              <Image src="/vrbo.svg" className="object-contain" alt="partner-4" fill />
            </div>
            <div className="partner-card w-[40.059vw] md:w-[13.228vw] h-10 relative">
              <Image src="/bayut.svg" className="object-contain" alt="partner-5" fill />
            </div>
            <div className="partner-card w-[40.059vw] md:w-[13.228vw] h-10 relative">
              <Image src="/expedia.svg" className="object-contain" alt="partner-6" fill />
            </div>
          </div>
          <div className="mt-12">
            <button className="p-3 px-10 rounded-[10px] w-full md:w-[28.902vw] font-bold bg-accent-purple text-white">
              Request a Valuation
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}