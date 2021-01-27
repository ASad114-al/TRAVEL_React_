const Header = () => {
    return ( 
        <main className="HeaderMain">
        <section id='header'>
            <article className='Explore'>
            <img id='plus' src="../img/element.png" alt=""/>
                    <h1>Explore and <br/> Travel</h1>
                    <img id='scrol' src="../img/element2.png" alt=""/>
                    <h4>Holiday finder</h4>
                    <img id='line' src="../img/line.png" alt=""/>
                    <br/>
                    <br/>
                    <div id='select_div'>
                    <select name="Location" id="select">
                        <option value="volvo">Location</option>
                        <option value="london">London</option>
                    </select>

                    <select name="Activity" id="select">
                        <option value="Activity">Activity</option>
                        <option value="Somthing">Somthing</option>
                    </select>
                     
                    <select name="Grade" id="select">
                        <option value="Grade">Grade </option>
                        <option value="Grade1">Grade1</option>
                    </select>

                    <select name="Date" id="select">
                        <option value="Date">Date</option>
                        <option value="date">Date1</option>
                    </select>
                    </div>

                    <button id='btn2'>Explore</button>
                   
            </article>
            <article>  
                <img  src="../img/element2.png" alt=""/>
                <img src="../img/thousand1.png" alt=""/>
             </article>
        </section>
    
            
        </main>
    );
}
 
export default Header;