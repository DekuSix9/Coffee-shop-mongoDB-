import logo1 from '../assets/images/icons/1.png'
import logo2 from '../assets/images/icons/2.png'
import logo3 from '../assets/images/icons/3.png'
import logo4 from '../assets/images/icons/4.png'

const Icon = () => {
  return (
    <div className="bg-[#ECEAE3] py-6 px-4 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center md:items-start">
          <img className="mb-2 w-14 h-14" src={logo1} alt="Awesome Aroma" />
          <h1 className="mb-1 text-lg md:text-xl font-semibold text-[#4B3621]">Awesome Aroma</h1>
          <p className="text-[#1B1A1A] text-sm md:text-base">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center md:items-start">
          <img className="mb-2 w-14 h-14" src={logo2} alt="High Quality" />
          <h1 className="mb-1 text-lg md:text-xl font-semibold text-[#4B3621]">High Quality</h1>
          <p className="text-[#1B1A1A] text-sm md:text-base">
            We serve the coffee to you maintaining the best quality
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center md:items-start">
          <img className="mb-2 w-14 h-14" src={logo3} alt="Pure Grades" />
          <h1 className="mb-1 text-lg md:text-xl font-semibold text-[#4B3621]">Pure Grades</h1>
          <p className="text-[#1B1A1A] text-sm md:text-base">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center md:items-start">
          <img className="mb-2 w-14 h-14" src={logo4} alt="Proper Roasting" />
          <h1 className="mb-1 text-lg md:text-xl font-semibold text-[#4B3621]">Proper Roasting</h1>
          <p className="text-[#1B1A1A] text-sm md:text-base">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>

      </div>
    </div>
  )
}

export default Icon
