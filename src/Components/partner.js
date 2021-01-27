// import Section2 from './Stories';

const Partner = () => {
    return (  
        <main className='HeaderMain'>
            <section className='partner'>
          <article className='Testimonials'>
            <h2>Testimonials</h2>
            <div>
                <img  src="../img/stars.png" alt=""/>
                <h4>“Quisque in lacus a urna fermentum <br/> euismod. Integer mi nibh, dapibus ac <br/> scelerisque eu, facilisis quis purus. Morbi <br/> blandit sit amet turpis nec”</h4>
            </div>
            <div>
                <h3>Edward Newgate</h3>
                <h6>Founder Circle</h6>
            </div>
          </article>
          <article>
            <img id='plus_partner' src="../img/element.png" alt=""/>

              <img id='man' src="../img/man.png" alt=""/>
              <img id='white' src="../img/white.png" alt=""/>
              <img id='back' src="../img/back.png" alt=""/>
              <img id='next' src="../img/next.png" alt=""/>
              <img id='plus' src="../img/element.png" alt=""/>
              <img id='scrol_partner' src="../img/element2.png" alt=""/>

            </article>  
           

            </section>
            <section className="SECT">
            <img id='pulsPanter' src="../img/element.png" alt=""/>
            <img id='scrolPanter' src="../img/element2.png" alt=""/>
            


            <h1>Trending stories <span>View all</span></h1>
                <article className="trending">
                <div>
                    <img   src="../img/image1.png" alt=""/>
                    <h2>The many benefits of  </h2>
                    <h2>taking a healing holiday</h2>
                    <p>‘Helaing holidays’ are on the risetohelp maximise your health and happines...</p>
                   {/*  <a href="">Read more</a> */}
               </div>

               <div>
                    <img   src="../img/image2.png" alt=""/>
                    <h2>The best Kyoto restaurant </h2>
                    <h2>to try Japanese food</h2>
                    <p>From tofu to teahouses, here’s our guide to Kyoto’s best restaurantsto visit...</p>
                   {/*  <a href="">Read more</a> */}
               </div>
               <div>
                    <img   src="../img/image3.png" alt=""/>
                    <h2>Skip Chichen Itza and head </h2>
                    <h2>to this remote Yucatan</h2>
                    <p>It’s remote and challenging to get,but braving the jungle and exploringthese ruins without the...</p>
                       {/* <a href="">Read more</a> */}
               </div>
               <div>
                    <img   src="../img/image4.png" alt=""/>
                    <h2>Surf’s up at these beginner</h2>
                    <h2>spots around the world</h2>
                    <p>If learning to surf has in on your to-do list for a while, the good newsis: it’s never too late...</p>
                    {/* <a href="">Read more</a> */}
                
               </div>
           </article>
         
           </section>
        </main>
    );
}
 
export default Partner;