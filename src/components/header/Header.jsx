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
    const [currentSection, setCurrentSection] = useState("");

    const navigationList = data?.sectionMenu?.links;
    

    let lazyConfig = {
        rootMargin: "0px 0px 350px 0px",
        thresHold: 0
    }

    const observer = new IntersectionObserver((entries, observer)=>{sectionIteration(entries, observer)}, lazyConfig);
    

    function sectionIteration(entries, observer){
        entries.forEach(entry => {
            setCurrentSection(entry.target.id)
            console.log(entry.target.id);
        });
    }

    const sectionsList = document.querySelectorAll(".section-wrapper").forEach((element) => observer.observe(element));
    console.log(sectionsList);


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
                    <Navigation navigationList={navigationList} active={currentSection}/>
                </header>
            </div>
        </div>

    )
}


export default Header;
