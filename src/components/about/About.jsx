import ImgWithFallback from '../imgWithFallback/ImgWithFallback';
import { useDataContext } from '../provider/Provider';
import TitleContainer from '../titleContainer/TitleContainer';
import AboutContacts from './AboutContacts';
import './about.scss';
function AboutMe(){

    const {data} = useDataContext();
    const dataSection = data.sectionAboutMe;

    return(
        <section className='aboutme section-wrapper' id={dataSection.id}>
              <div className='center'>
                  <div className='sectionContainer sectionContainer__reverse'>
                      <div className='section-description'>
                            <TitleContainer h1={dataSection.title}></TitleContainer>
                            <p>{dataSection.description}</p>

                            <TitleContainer h6={dataSection?.contacts?.title}></TitleContainer>
                            <AboutContacts title={dataSection?.contacts?.title} feedback={dataSection?.contacts?.feedback} socialMedia={dataSection?.contacts?.socialMedia}></AboutContacts>                           
                                     
                      </div>
                      <div className='section-media'>
                        <ImgWithFallback {...dataSection?.image}/>
                      </div>
                  </div>
                </div>
            </section>
    )
}

export default AboutMe;