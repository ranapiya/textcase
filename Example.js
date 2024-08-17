/* -----------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */


<Props>


Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string         /*  props types */
              }

Navbar.defaultProps={
    title:'Set title',
    about:'About text utils'             /*  deafult props */
    }  


Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.sRequired         /*  required props */
              }

</Props>

  

/* -----------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------- */
         /*  SETTING UP STATE AND HANDLE EVENT  */

    const [text,setText]=useState('Enter text here');  // hooks   , state
  
  text="new text";  wrong way
  setText("new text");  correct way


  //EVENT

  const handleUpChange=(event)=>{
    console.log("uppercase was changed")
    setText(event.target.value);