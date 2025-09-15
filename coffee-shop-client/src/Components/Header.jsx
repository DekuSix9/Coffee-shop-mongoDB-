import logo from '../assets/images/icons/logo1 1.svg';

const Header = () => {
    return (
        <div className="bg-[#4B3621]">
            <div className="flex items-center justify-center space-x-2 py-2 px-4 sm:px-8 md:px-16">
                {/* Logo */}
                <img className="w-10 sm:w-12 md:w-14" src={logo} alt="Logo" />

                {/* Site Title */}
                <h1 className="font-rancho text-xl sm:text-2xl md:text-3xl text-white whitespace-nowrap">
                    Espresso Emporium
                </h1>
            </div>
        </div>
    );
};

export default Header;
