import { Link } from 'react-router-dom';
import './nav.scss';
import { useDataContext } from '../provider/Provider';


function Navigation(){
    const {data} = useDataContext();
    const navigationList = data?.sectionMenu.links;
    const navigationItem = navigationList?.map((item)=> {
        return (
            <li key={item.id}>
                <Link to={item.url}>{item.name}</Link>
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