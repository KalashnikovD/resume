import { Link } from 'react-router-dom';
import './header.scss';
import HeaderContacts from './HeaderContacts.jsx';
import Navigation from './nav';
import { useDataContext } from '../provider/Provider';


function Header(){
    const {data} = useDataContext();
    return(
        <>
            <HeaderContacts/>
            <header>               
                <div className='header-logo'><Link to={"/"}><img src={data.logo.src} alt="={data.logo.alt}" /></Link></div>
                <Navigation/>
            </header>
        </>

    )
}

export default Header;
