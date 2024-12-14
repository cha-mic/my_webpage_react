import './Contact.css'
import { LinkButton } from './Linkbutton';

export const Contact = () => {
    return(
        <div className='contact'>
            <div className='contact-disp'>
                <ul>
                    <li>Email : oohara * hlab.sys.es.osaka-u.ac.jp ( * → @ )</li>
                    <li>X（旧Twitter）: * O_micim_O ( * → @ ) <LinkButton Link = {"https://x.com/O_micim_O"} /> </li>
                    <li>GitHub : <LinkButton Link = {"https://github.com/cha-mic"} /> </li>
                </ul>
            </div>        
        </div>

    )
};

export default Contact;