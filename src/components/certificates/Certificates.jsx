import { Link } from 'react-router-dom';
import { useDataContext } from '../provider/Provider';
import TitleContainer from '../titleContainer/TitleContainer';
import './certificates.scss';


function Certificates(){

    const {data} = useDataContext();
    const certsSection = data?.sectionCertificates;
    const certsList = certsSection?.certificatesList;

    const certItem = certsList.map((item, index)=> {
        return(
            <li key={item.id}><p>{item.cert}</p><Link to={item.url}><img src={item.icon} alt={item.cert}/></Link></li>
        )
    })


    return(
        <section className='certificates section-wrapper' id='certificates'>
            <div className='center'>

            <div className='sectionContainer'>
                      <div className='section-description'>
                      <TitleContainer h1={certsSection?.title}></TitleContainer>
                        <div className='certificates-list'>
                                <ul>
                                    {certItem}
                                </ul>
                        </div>                                     
                      </div>
                  </div>
            </div>
        </section>
    )
}

export default Certificates;