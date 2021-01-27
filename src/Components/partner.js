import Section2 from './Stories';

const Partner = () => {
    return (  
        <main className='HeaderMain'>
            <section className='partner'>
          <article className='Testimonials'>
            <h2>Testimonials</h2>
            <div>
                <img src="../img/stars.png" alt=""/>
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
            <section className='stories'>
                <Section2 />
            </section>
        </main>
    );
}
 
export default Partner;