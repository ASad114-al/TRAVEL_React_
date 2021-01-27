
const Card = (props) => {
    return ( 
       <figure>
           <img src={props.userImg} alt="" />
        <figcaption>
            <h2>{props.title}</h2>
            <h4>{props.descrption}</h4>
            <p >Read more</p>
        </figcaption>
       </figure>
     );
}
 
export default Card;