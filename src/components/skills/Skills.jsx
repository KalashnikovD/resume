import { Link } from 'react-router-dom';
import { useDataContext } from '../provider/Provider';
import TitleContainer from '../titleContainer/TitleContainer';
import './skills.scss';
import ImgWithFallback from '../imgWithFallback/ImgWithFallback';

function Skills(){

    const {data} = useDataContext();
    const skillSection = data?.sectionSkills;
    const skillsList = skillSection?.skillsList

    const skillItem = skillsList.map((item, index)=> {
        return(
            <li key={item.id}><Link to={item.url}><span className='icon'><ImgWithFallback {...item.image}/></span><span>{item.skill}</span></Link></li>
        )
    })

    return (
        <section className='skills section-wrapper' id={skillSection.id}>
            <div className='center'>

            <div className='sectionContainer'>
                      <div className='section-description'>
                      <TitleContainer h1={skillSection?.title}></TitleContainer>
                        <div className='skills-list'>
                                <ul>
                                    {skillItem}
                                </ul>
                        </div>                                     
                      </div>
                      <div className='section-media'>
                        <ImgWithFallback {...skillSection?.image}/>
                      </div>
                  </div>
            </div>
        </section>
    )
}

export default Skills;