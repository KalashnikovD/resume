import { useDataContext } from '../provider/Provider';
import { useFormik } from 'formik';
import TitleContainer from '../titleContainer/TitleContainer';
import './feedback.scss';


function Feedback() {

    const {data} = useDataContext();
    const dataSection = data?.feedback;
    const formFields = dataSection.feedbackList;
    

    const initialValues = formFields.reduce(
        (acc, currentValue) => {
          return {
            ...acc,
            [currentValue.fieldName] : currentValue.value
          }
    }, {});    

    const formik = useFormik({
        initialValues,
        onSubmit: (values)=> {
            alert(
                JSON.stringify(values, null, 2)
                )
        }
    })

    const formItem = formFields.map((item) => {
        const value = formik.values[item.fieldName];
        if(item.type === "email" || item.type === "text" || item.type === "password") {
            return (
                <div className='form-row' key={item.id}>
                        <label htmlFor={item.id}>{item.label}</label>
                        <input type={item.type} name={item.fieldName} required={item.required} id={item.id} onChange={formik.handleChange} value={value}/>
                    </div>
            )
        }

        else if(item.type === "textarea") {
            return (
                <div className='form-row'key={item.id}>
                        <label htmlFor={item.id}>{item.label}</label>
                        <textarea id={item.id} name={item.fieldName}  required={item.required} onChange={formik.handleChange} value={value}></textarea>
                </div>
            )
        }
        else {
            return (<></>);
        }
       
    })

    return(
        <section className='feedback-section section-wrapper' id={dataSection.id}>
            <div className='center'>
                <div className='sectionContainer sectionContainer__reverse'>
                    <div className='section-description'>
                         <TitleContainer h1={dataSection.title} description={"This is a test form"}></TitleContainer>
                        
                        <form onSubmit={formik.handleSubmit}>
                            <div className='form'>
                                {formItem}
                                <button className='button' type="submit">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
      </section>
    )
}

export default Feedback;