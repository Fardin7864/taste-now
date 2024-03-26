import './Footer.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram , FaTwitter, FaYoutube  } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-container'>
            {/* logo */}
            <div >
            <h3 className="text-praise logo-footer" style={{ }}>
            Taste now
          </h3>
          <div className=' social-icon'>
            <FaSquareFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
            </div>
            {/* links */}
            <div className='footer-link'>
                <div className='link-list'>
                    <div>
                    <p>Seslendirme ve Alt Jazz</p>
                    <p>Media Market</p>
                    <p>Gillie</p>
                    <p>Size Last</p>
                    </div>

                <div>
                    <p>Self Betimes</p>
                    <p>Yatırımcı İlişkileri</p>
                    <p>Basal Himmler</p>
                </div>
                </div>
                <div className='link-list'>
                <div >
                    <p>Yard Market</p>
                    <p>Is İmkanları</p>
                    <p>Car Tercihleri</p>
                </div>
                <div>
                    <p>Hedge Karla</p>
                    <p>Mullein Koşulları</p>
                    <p>Autumnal Bulgier</p>
                </div>

                </div>
            </div>
            <div className=' social-icon-bottom'>
            <FaSquareFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
    );
};

export default Footer;