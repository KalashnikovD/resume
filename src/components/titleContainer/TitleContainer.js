import './titleContainer.scss';

function TitleContainer (props) {
    return(
        <div className="title-container">
                {props.h1 && <h1>{props.h1}</h1>}
                {props.h2 && <h2>{props.h2}</h2>}   
                {props.h3 && <h3>{props.h3}</h3>}   
                {props.h4 && <h4>{props.h4}</h4>}   
                {props.h5 && <h5>{props.h5}</h5>}   
                {props.h6 && <h6>{props.h6}</h6>}               
                {props.description && <p>{props.description}</p>}
        </div>
    );
}

export default TitleContainer;
