
const Card = (props) => {
    return ( 
        <section id='foto'>
       <figure>
           <div>
           <img src={props.userImg} alt="" />
           </div>
        <figcaption>
            <h2>{props.title}</h2>
            <h4>{props.descrption}</h4>
            <p >Read more</p>
        </figcaption>
       </figure>
       </section>
     );
}
 
export default Card;