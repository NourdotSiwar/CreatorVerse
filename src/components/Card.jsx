import '../styles/Card.css'

const Card = (props) => {

      return (
            <div className="card">
            <div className="container">
            <div className='card-text'>
            <h4><b>{props.name}</b></h4>
            <p>{props.description}</p>
            </div>
            </div>
            </div>      
      );
 }
export default Card;
