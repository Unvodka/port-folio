import React from 'react';
import Typed from 'react-typed';



const Header = () => {
    return (
        
        <div className="header-wraper">

            <div className="main-info">

                <Typed
                    className="typing"
                    strings={["Web Development, Software Engineer"]}
                    typeSpeed={30}
                />
                <br/>
 
                <Typed
                className="typing"
                strings={[
                    'Integration',
                    'Design',
                    'Development']}
                    typeSpeed={20}
                    backSpeed={40}
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
