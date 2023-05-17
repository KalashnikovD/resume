import './header-social-media.scss';
import { useDataContext } from '../provider/Provider';
import { Link } from 'react-router-dom';
import ImgWithFallback from '../imgWithFallback/ImgWithFallback';


function HeaderContacts(){
    const {data} = useDataContext();

        const feedbackList = data?.headerContacts?.feedback;
        const feedbackItem = feedbackList?.map((item, index)=> {
            return (
                <li key={item.id}><Link to={item.url}><span className='icon'>
                    <ImgWithFallback {...item.image}/>
                    </span><span>{item.name}</span></Link></li>
            )
        });

        const socialMediaList = data?.headerContacts?.socialMedia;
        const socialMediaItem = socialMediaList?.map((item, index)=> {
            return (
                <li key={item.id}><Link to={item.url}><span className='icon'><ImgWithFallback {...item.image}/></span><span>{item.name}</span></Link></li>
            )
        });   

            
    return(
        <div className='header-contacts'>
            <div className='center'>
                <div className='header-contacts-feedback'>
                    <ul>
                        {feedbackItem}                   
                    </ul>
                </div>

                <div className='header-contacts-social-media'>
                    <ul>
                        {socialMediaItem}
                    </ul>
                </div>  
            </div>          
        </div>
    )
}

export default HeaderContacts;