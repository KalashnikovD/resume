import './nav.scss';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

function Navigation(props){
    const navigationList = props.navigationList;
    const navigationItem = navigationList?.map((item)=> {
        let active = "#" + props.active;
        return (
            <li key={item.id}>
                <HashLink to={item.url} className={active === item.url? "active" :""}>{item.name}</HashLink>
            </li>
        )
    })

    const [navState, setNavState] = useState(false);

    const changeNavState = ()=> {
        setNavState(!navState);
    }

    
    return (
        <div className='navigation'>
            <span className={"icon-drop-navigation" +  (navState ? " active" : "")} onClick={changeNavState} ><span></span></span> 
            <div className='center'>
                <nav className={navState ? " active" : ""}>
                    <ul>
                        {navigationItem}
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default Navigation;