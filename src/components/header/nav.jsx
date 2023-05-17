import './nav.scss';
import { useDataContext } from '../provider/Provider';
import { HashLink } from 'react-router-hash-link';


function Navigation(){
    const {data} = useDataContext();
    const navigationList = data?.sectionMenu.links;
    const navigationItem = navigationList?.map((item)=> {
        return (
            <li key={item.id}>
                <HashLink to={item.url}>{item.name}</HashLink>
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