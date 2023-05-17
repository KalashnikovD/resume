import ImgWithFallback from '../imgWithFallback/ImgWithFallback';
import './aboutContacts.scss';
import { Link } from 'react-router-dom';

function AboutContacts(props){

        const feedbackList = props.feedback;
        const feedbackItem = feedbackList?.map((item, index)=> {
            return (
                <li key={item.id}><Link to={item.url}><span className='icon'><ImgWithFallback {...item.image}/></span><span>{item.name}</span></Link></li>
            )
        });

        const socialMediaList = props.socialMedia;
        const socialMediaItem = socialMediaList?.map((item, index)=> {
            return (
                <li key={item.id}><Link to={item.url}><span className='icon'><ImgWithFallback {...item.image}/></span><span>{item.name}</span></Link></li>
            )
        });

        
    
            
    return(
        <>
            <div className='contacts-feedback'>
                    <ul>
                        {feedbackItem}                   
                    </ul>
                </div>

                <div className='contacts-social-media'>
                    <ul>
                        {socialMediaItem}
                    </ul>
                </div> 
        </>         
    )
}

export default AboutContacts;