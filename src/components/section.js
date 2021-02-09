import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';


function Container(){
    return (
        <div className = "container">
            <h4 className="heading">Add Friend To List</h4>
            <span id="span">
                <input type="text" id="searchbar"  placeholder = "Enter friend name"></input>
                <button  id="button" >ADD</button>
           </span>
           <div>
             <h4 id="spcial">Friend List :</h4>
             <ul id='list'>
                 <li className='list-element'><p>Abhishek Sadh</p> <i>X</i></li>
                 <li className='list-element'><p>Aastha Sharma</p> <i>X</i></li>
                 <li className='list-element'><p>Harshit Malakar</p> <i>X</i></li>
                 <li className='list-element'><p>Nitesh Singh Jadon</p> <i>X</i></li>
                 <li className='list-element'><p>Sheetal Kanashe</p> <i>X</i></li>
             </ul>
           </div>
           
        </div>
         
    )

   
    
}

export default Container;