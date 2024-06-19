import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/shared/Hero'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'
import image from '/hero/Recta.png'
import shippingContainer from '../../public/hero/shipping contianer.png'
import jobs from '../../public/hero/jobs.png'
import skillmrigation from '../../public/hero/skill mrigation.png'
import doctor from '../../public/hero/doctor.png'

const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero image={image} text='Our Services' />
      <div className="bg-[#870000] text-white">
        <div className="max-w-5xl mx-auto p-4">
          <section className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-2/3 pr-4">
              <h2 className="text-xl font-bold mb-2">Import & Export</h2>
              <div className=''>
                <p className="mb-4 font-normal  font-Montserrat ">
                  Citizenship by investment schemes allow families to obtain an alternate citizenship,
                  allowing them to travel freely to other destinations and live in another country.
                  
                  Several countries throughout the world have some type of investor migration legislation in effect.
                  Approximately 30 residence and citizenship by investment initiatives are now in operation, with AL FAARTI Group handling many of them.
                </p>
              </div>
              <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">View More</button>
            </div>
            <div className="md:w-1/3">
              <img src={shippingContainer} alt="Import & Export" className="w-full h-auto rounded" />
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center mb-8">
            <img src={jobs} alt="Jobs" className="w-full md:w-1/3 h-auto mb-4 md:mb-0 md:mr-4" />
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold mb-2">Jobs</h2>
              <p className="mb-4 font-normal leading-7 font-Montserrat">
                Residency Programs enable successful individuals to legally obtain a visa and live in a desired host country, without having full-time citizenship status. As a permanent resident, you and your family will be granted access to live, work and be educated in the host country, allowing you to provide a secure future for your family.Residency Programs offer a range of benefits including favorable tax regimes, global mobility, financial security and high quality education.
              </p>
              <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">View More</button>
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-2/3 pr-4">
              <h2 className="text-xl font-bold mb-2">Import & Export</h2>
              <p className="mb-4 font-normal leading-7 font-Montserrat">
                The Skilled stream of the Migration Program is designed to attract migrants who make a significant contribution to the respective economy, and fill positions where no workers are available. Skilled migrants have very high participation rates in the workforce, helping to stimulate economic growth etc.
              </p>
              <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">View More</button>
            </div>
            <div className="md:w-1/3">
              <img src={skillmrigation} alt="Import & Export" className="w-full h-auto rounded" />
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center">
            <img src={doctor} alt="Medical Tourism" className="w-full md:w-1/3 h-auto mb-4 md:mb-0 md:mr-4" />
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold mb-2">Medical Tourism</h2>
              <p className="mb-4 font-normal leading-7 font-Montserrat">
                Studying abroad is a life-changing and an enriching experience in one’s life, so students should take their time and do their research before jumping into the first destination that comes to mind. It is critical to consider all of the advantages and disadvantages of a country where a student wants to continue his or her career. It’s quite daunting and therefore students should seek professional advice and conduct thorough research before deciding on their next study destination. Choosing a place to study might be difficult, but the fact is there are so many countries to choose from and so much to offer makes it all worthwhile. Based on the experiences of numerous foreign students.
              </p>
              <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">View More</button>
            </div>
          </section>
        </div>

      </div>
      <Contactus />
      <Footer />
    </div>
  )
}

export default Services