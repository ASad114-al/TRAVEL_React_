import DataPartner  from "../Data/PartnerData.json"
import Card from "./card"

const Section2 = () => {
    return ( 
        <section className='info_jazz'>
        <div id="cards">
        {DataPartner.map(singleData =>  <Card 
            descrption={singleData.descrption}
            title = {singleData.titel} 
            userImg = {singleData.userImg}
            key = {singleData.id}
            
        />)}
        </div>
        </section>
     );
}
 
export default Section2;