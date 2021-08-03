import React from 'react';


function Footer (props){
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <p>This Project is Created By Imran Khan ©{year}</p>

        </div>
    )

}
export default Footer;