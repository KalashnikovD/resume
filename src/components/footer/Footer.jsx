import './footer.scss';
import { useDataContext } from '../provider/Provider';
import ImgWithFallback from '../imgWithFallback/ImgWithFallback';


function Footer(){

    const {data} = useDataContext();

    return(
        <footer>
            <div className="center">
                <div className="footer-wrapper">
                    <div className="footer-wrapper__logo"><ImgWithFallback {...data.logoFooter.image}/></div>
                    <div>{data.copyrights}</div>
                </div>
            </div>    
        </footer>
    )
}

export default Footer;