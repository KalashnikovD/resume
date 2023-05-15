import { useDataContext } from '../provider/Provider';
import TitleContainer from '../titleContainer/TitleContainer';
import './workhistory.scss';
import {decodeHTMLEntities} from '../hooks/decodeHTMLEntities/decodeHTMLEntities';


function WorkHistory(){
    const {data} = useDataContext();
    const dataSection = data?.workHistory;
    const dataSectionDescription = dataSection?.description;    
    const text = decodeHTMLEntities(dataSectionDescription)


    return(
        <section className='work-history section-wrapper' id='workhistory'>
              <div className='center'>
                  <div className='sectionContainer sectionContainer__reverse'>
                      <div className='section-description'>
                            <TitleContainer h1={dataSection.title}></TitleContainer>

                            <article className='article-style' dangerouslySetInnerHTML={{__html: text}}/>

                      </div>
                      <div className='section-media'>
                          <img src={dataSection?.image} alt={dataSection?.title}/>
                      </div>
                  </div>
                </div>
            </section>
    )
}

export default WorkHistory;