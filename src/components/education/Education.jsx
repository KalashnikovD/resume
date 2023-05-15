import { useDataContext } from '../provider/Provider';
import TitleContainer from '../titleContainer/TitleContainer';
import {decodeHTMLEntities} from '../hooks/decodeHTMLEntities/decodeHTMLEntities';
import './education.scss';

function Education() {

    const {data} = useDataContext();
    const dataSection = data?.education;

    const educationList = dataSection?.stegesList;    
    const stageEducation = educationList?.map((item)=>{
        const text = decodeHTMLEntities(item.description)
        return(
            <div className='educationList-item' key={item.id}>
                <h6>{item.name}</h6>
                <p>{item.period}</p>
                <p  dangerouslySetInnerHTML={{__html: text}}></p>
            </div>
        )
    })
    

    return(

        <section className='work-history section-wrapper' id='education'>
            <div className='center'>
                <div className='sectionContainer'>
                    <div className='section-description'>
                    <TitleContainer h1={dataSection.title}></TitleContainer>
                        <div className='educationList'>
                            {stageEducation}
                        </div>

                        </div>
                        <div className='section-media'>
                            <img src={dataSection?.image} alt={dataSection?.title}/>
                        </div>
                    </div>
                </div>
      </section>
    )
}

export default Education;