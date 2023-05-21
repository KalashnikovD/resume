import { Link } from 'react-router-dom';
import './header.scss';
import HeaderContacts from './HeaderContacts.jsx';
import Navigation from './nav';
import { useDataContext } from '../provider/Provider';
import ImgWithFallback from '../imgWithFallback/ImgWithFallback';
import { useState, useEffect } from 'react';


function Header(){
    const {data} = useDataContext();
    const [headerPosFix, setHeaderPosFix] = useState(false);
    const [currentSection, setCurrentSection] = useState("");

    const navigationList = data?.sectionMenu?.links;
    


    useEffect(() => {

        function changeLocation(currentLocation){
            let currentSection = "#" + currentLocation;
            window.location.hash = currentSection;
        }

        let lazyConfig = {
            rootMargin: "0px",
            threshold: 0.51
        }
        const sectionObserver = new IntersectionObserver(sectionIteration, lazyConfig);
    
    
        function sectionIteration(entries, observer){
            const visibleEntry = entries.find(({isIntersecting}) => isIntersecting)
            if(visibleEntry) {
                setCurrentSection(visibleEntry.target.id)
                changeLocation(visibleEntry.target.id)
            }
        }
    
        document.querySelectorAll(".section-wrapper").forEach((element) => sectionObserver.observe(element));
        return () => sectionObserver.disconnect();
    }, [])

    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 120) {
                setHeaderPosFix(true);
            } else {
                setHeaderPosFix(false);
            }
        }
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

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
                    <Navigation navigationList={navigationList} active={currentSection}/>
                </header>
            </div>
        </div>

    )
}


export default Header;
