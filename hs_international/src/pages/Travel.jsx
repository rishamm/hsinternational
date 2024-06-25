import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "../components/shared/Hero"
import image from '/hero/exporthero.png'


const Travel = () => {
    return (
        <div>
            <Footer/>
            <Navbar />
            <Hero image={image} text='Import & Export' />

            <div className="container mx-auto mt-8 p-8 rounded-lg shadow-lg">
                <div className=" bg-[#870000]">
                    <h2 className="text-xl font-bold mb-4">Tourism Packages</h2>
                    <div className="flex">
                        <div className="w-1/2 pr-4">
                            <img src="https://via.placeholder.com/500" alt="Image 1" />
                        </div>
                        <div className="w-1/2 pl-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className=" mb-[20px]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className=" mb-[20px]">
                    <div className="flex">
                        <div className="w-1/2 pr-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="w-1/2 pl-4">
                            <img src="" alt="Image 2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel