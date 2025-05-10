


/** Navbar Assets */
import Logo from '../assets/logo.svg';
import PrimaryButton from './Buttons/PrimaryButton';
import Navbar from './Navbar';
/** Navbar Assets */




export default function Header(){
    return(
        <>
            <header className="fixed w-full">
                <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <a href="#" className="flex items-center">
                            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Learn with
                                Sumit</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                           <PrimaryButton text='Download' href='#' />
                            
                        </div>
                        <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                             <Navbar
                                nav={[
                                    { name: "Home", href: "#" },
                                    { name: "Company", href: "#" },
                                    { name: "MarketPlace", href: "#" },
                                    { name: "Features", href: "#" },
                                    { name: "Team", href: "#" },
                                    { name: "Contact", href: "#" },
                                ]}
                            />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}