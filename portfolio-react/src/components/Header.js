import React from 'react';
import Typed from 'react-typed';



const Header = () => {
    return (
        
        <div className="header-wraper">

            <div className="main-info">

                <Typed
                    className="typing"
                    strings={["Web Development, Software Engineer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    backDelay={10000}
                />
                <br/>
 
                <Typed
                className="typing"
                strings={[
                    '   Integration',
                    '   Design',
                    '   Development']}
                    typeSpeed={60}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
        
                <a href="#" className="btn-contact">Contact me now</a>
            
            </div>
            
        </div>
    )
}

export default Header
