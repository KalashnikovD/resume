import { Link } from 'react-router-dom';
import './header.scss';
import HeaderContacts from './HeaderContacts.jsx';
import Navigation from './nav';
import { useDataContext } from '../provider/Provider';
import ImgWithFallback from '../imgWithFallback/ImgWithFallback';
import { useState } from 'react';


function Header(){
    const {data} = useDataContext();
    const [headerPosFix, setHeaderPosFix] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 120) {
            setHeaderPosFix(true);
        } else {
            setHeaderPosFix(false);
        }
    })

    return(
        <div className={headerPosFix ? "header-container headerFixed" : "header-container"}>
                <div className='header-scroll'>
                <HeaderContacts/>
                <header>               
                    <div className='header-logo'>
                        <Link to={"/"}>
                            <ImgWithFallback {...data.logo.image}/>
                        </Link>
                    </div>
                    <Navigation/>
                </header>
            </div>
        </div>

    )
}


export default Header;
