import whiteLogo from "../../assets/AVATARIDEAwhite.png"
import SocialMediaLink from "../../shared/SocialMediaLink";
import instaIcon from "../../assets/instagram.png"
import twitterIcon from "../../assets/twitter.png"
import facebookIcon from "../../assets/facebook-app-symbol.png"
import linkedInIcon from "../../assets//linkedIn.png"

import { SelectedPage } from "../../shared/types"


const Footer = () => {
    return(
        <section>
            <div className="flex bg-primary-300 text-white w-full h-96 mt-20 p-20 text-center">
                {/**first col */}
                <div className="w-2/12 flex flex-col gap-8 mx-auto">
                <a
                href={`#${SelectedPage.Home}`}
                >
                <img src={whiteLogo} className="w-24"/>
                </a>
                <p className="text-sm text-left">Avatar Idea your premier destination for luxury and modern interior design
                </p>
                <div className="flex gap-4">
                    <SocialMediaLink logo={facebookIcon}/>
                    <SocialMediaLink logo={twitterIcon}/>
                    <SocialMediaLink logo={instaIcon}/>
                    <SocialMediaLink logo={linkedInIcon}/>
                    
                </div>

                </div>
                {/**second col */}
                <div className="flex flex-col w-3/12 gap-6">
                 <h3 className="font-extrabold">Our Services</h3>
                 <text className="text-sm">Interior design</text>
                 <text className="text-sm">Outdoor design</text>
                 <text className="text-sm">Lightning design</text>
                 <text className="text-sm">Office design</text>
                </div>
                {/**third col */}
                <div className="flex flex-col w-3/12 gap-6">
                <h3 className="font-extrabold">Support</h3>
                 <text className="text-sm">Reviews</text>
                 <text className="text-sm">Careers</text>
                 <text className="text-sm">Pricing</text>
                 <text className="text-sm">Press inquires</text>
                 </div>
                {/**fourth col */}
                <div className="flex flex-col w-3/12 gap-6">
                <h3 className="font-extrabold">Contact Us</h3>
                <text className="text-sm">avataridea90@gmail.com</text>
                <p className="flex flex-col text-sm">
                <text>Fifth Settlement, NewCairo</text>
                <text>Cairo, Egypt</text>
                </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;