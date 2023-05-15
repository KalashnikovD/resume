import './footer.scss';
import { useDataContext } from '../provider/Provider';


function Footer(){

    const {data} = useDataContext();

    return(
        <footer>
            <div className="center">
                <div className="footer-wrapper">
                    <div className="footer-wrapper__logo"><img src={data.logoFooter.src}  alt="{data.logoFooter.alt}"/></div>
                    <div>{data.copyrights}</div>
                </div>
            </div>    
        </footer>
    )
}

export default Footer;