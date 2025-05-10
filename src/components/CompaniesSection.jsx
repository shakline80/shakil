
import AirbnbImg from "./Icons/Airbnb";
import GoogleIcon from "./Icons/GoogleIcon";
import MailchimpIcon from "./Icons/MailchimpIcon";
import MashableIcon from "./Icons/MashableIcon";
import MicrosoftIcon from "./Icons/MicrosoftIcon";
import SpotifyIcon from "./Icons/SpotifyIcon";

export default function CompaniesSection(){
    return(
        <section className="bg-gray-900">
                <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                    <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                        <a href="#" className="flex items-center lg:justify-center">
                            <AirbnbImg />
                        </a>
                        <a href="#" className="flex items-center lg:justify-center">
                            <GoogleIcon />
                        </a>
                        <a href="#" className="flex items-center lg:justify-center">
                            <MicrosoftIcon />
                        </a>
                        <a href="#" className="flex items-center lg:justify-center">
                            <SpotifyIcon />
                        </a>
                        <a href="#" className="flex items-center lg:justify-center">
                            <MailchimpIcon />
                        </a>
                        <a href="#" className="flex items-center lg:justify-center">
                            <MashableIcon />
                        </a>
                    </div>
                </div>
        </section>
    )
}