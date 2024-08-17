import React, { useState } from 'react'

export default function TextForm(props) {


  const handleUpClickToLowercase=()=>{
    console.log("lowercase was clicked  ");
  
    let newText=text.toLowerCase();                      /* To lower case */
    setText2(newText)
    
  }
                       
  
  const handleUpClickToUpercase=()=>{
    console.log("upercase was clicked  ");
                                                          
    let newText=text.toUpperCase();                     /* to upper case */
    setText2(newText)
    
  }

                         

  const handleUpChange=(event)=>{
    console.log("on change")
    setText(event.target.value);   // allows to add or edit text in text for text1
    
  }
  const handleUpChange2=()=>{
    console.log("on change")
    /* setText(event.target.value); */   // allows to add or edit text in text for text2
    
  }
  


  const [text,setText]=useState('Enter text here');  // hooks   , state text1
  
  /* text="new text";  wrong way
  setText("new text");  correct way */
  const [text2,setText2]=useState('Converted text');  // hooks   , state text 2







return(
  <div>
    <h1 className='h1'>Enter your text here</h1>


    <div className='mb-3'>
      <textarea className='form-control' value={text} onChange={handleUpChange} id='myBox' rows="4" cols="50" ></textarea> 
</div>


<button className='btn-1' onClick={handleUpClickToUpercase}>convert to uppercase</button>
<button className='btn-2' onClick={handleUpClickToLowercase}>convert to lowercase</button>


<div className='mb-3'>
      <textarea className='form-control' value={text2} onChange={handleUpChange2} id='myBox' rows="4"></textarea>
</div>
  </div>
  
)
}