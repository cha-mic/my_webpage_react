import './Contact.css'
import { LinkButton } from './Linkbutton';

export const Contact = () => {
    return(
        <div className='contact'>
            <div className='contact-disp'>
                <ul>
                    <li>Email : moi.moi.michihisa2(at)gmail.com</li>
                    <li>X（旧Twitter）: (at)O_micim_O <LinkButton Link = {"https://x.com/O_micim_O"} /> </li>
                    <li>GitHub : cha-mic <LinkButton Link = {"https://github.com/cha-mic"} /> </li>
                </ul>
            </div>        
        </div>

    )
};

export default Contact;