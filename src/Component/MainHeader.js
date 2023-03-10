import React from "react"
import './mainheader.css'


function MainHeader(props){
    return (<React.Fragment>
       
           <div className="header-wrapper">
                <div className="header-title">
                    <h1>use effect demo</h1>
                </div> 
               

                {props.onlogin && <div className="list-flex">
                {console.log(!false)}
                    <ul className="nav-list">                    
                        <li><button>Home</button></li>
                        <li><button>About</button></li>
                        <li><button onClick={props.onLogout}>Logout</button></li> 
                    </ul>
                </div>           
            </div>
 
    </React.Fragment>
  )    
}
export default MainHeader;
