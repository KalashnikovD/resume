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
    
   

    return(
        <>
            <HeaderContacts/>
            <header className={headerPosFix ? "headerFixed" : ""}>               
                <div className='header-logo'>
                    <Link to={"/"}>
                        <ImgWithFallback {...data.logo.image}/>
                    </Link>
                </div>
                <Navigation/>
            </header>
        </>

    )
}


export default Header;
