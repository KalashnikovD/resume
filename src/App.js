import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutMe from './components/about/About';
import Skills from './components/skills/Skills';
import Certificates from './components/certificates/Certificates';
import WorkHistory from './components/workHistory/WorkHistory';
import Education from './components/education/Education';
import Feedback from './components/feedback/Feedback';
import { useDataContext } from './components/provider/Provider';
import './scripts.js'

function App() {
  const {data} = useDataContext();
  const sectionsOrder = data.sectionsOrder;

  function compare(a, b){
    let keyA;
    let keyB;
    for (let key in a) {
      keyA = a[key];
    }
    for (let key in b) {
      keyB = b[key];
    }

    return keyA - keyB;
  }

  const section = sectionsOrder.map((item)=> {
    return ({[item]: data[item].position})
  },[]).sort(compare);

  const sectionItem = section.map((item)=> {
    let name;
    for (let key in item) {
      name = key;
    }
    if(name === "sectionAboutMe") {
      return <AboutMe key={name}></AboutMe>
    }
    else if(name === "sectionSkills") {
      return <Skills key={name}></Skills>
    }
    else if(name=== "sectionCertificates") {
      return <Certificates key={name}></Certificates>
    }
    else if(name === "workHistory") {
      return <WorkHistory key={name}></WorkHistory>
    }
    else if(name === "education") {
      return <Education key={name}></Education>
    }
    else if(name === "feedback") {
      return <Feedback key={name}></Feedback>
    }
    else return "Something went wrong";
  });
  
  return (
    <div className='App page-wrapper'>
        <Header></Header>
        <main>
            {sectionItem}
        </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
