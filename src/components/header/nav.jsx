import './nav.scss';
import { HashLink } from 'react-router-hash-link';


function Navigation(props){
    const navigationList = props.navigationList;
    const navigationItem = navigationList?.map((item)=> {
        console.log(props.active)
        return (
            <li key={item.id}>
                <HashLink to={item.url} className={props.active === item.url? "active" :""}>{item.name}</HashLink>
            </li>
        )
    })

    
    return (
        <div className='navigation'>
            <div className='center'>
                <nav>
                    <ul>
                        {navigationItem}
                    </ul>
                </nav>
            </div>
        </div>
    )
}


export default Navigation;