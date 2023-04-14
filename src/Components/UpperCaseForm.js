import React, { useState } from 'react'

export default function UpperCaseForm(props) {
    const[text,NewText]=useState('');

    const TyppingText=(event)=>{
        NewText(event.target.value);

    }
    const ConvertToUpper=()=>{
        let text2=text.toUpperCase();
        NewText(text2)
        props.showAlert("Converted to UpperCase","success");
    }

    const ConvertToLower=()=>{
        let text3=text.toLowerCase();
        NewText(text3)
        props.showAlert("Converted to LowerCase","success")
    }
    const Clear=()=>{
        let text3='';
        NewText(text3)
        props.showAlert("Clear Text","danger");
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
 }
     const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';                                   
    words.forEach((elem)=>{
        if(elem[0] != undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    NewText(joinedWords);
}

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'} }><h1>{props.UpperCaseForm}</h1>
    <div className='mt-3'>
        <textarea className="form-control" value={text} onChange={TyppingText} style={{backgroundColor:props.mode==='dark'?'#444a68':'white',color: props.mode==='dark'?'white':'black'}}   id="TextArea" rows="5"> </textarea>
        <button disabled={text.length===0} className=" btn btn-primary my-3 mx-3" onClick={ConvertToUpper}>Convert to Upper Case</button>
        <button disabled={text.length===0} className=" btn btn-secondary my-3 mx-3" onClick={ConvertToLower}>Convert to Lower Case</button>
        <button disabled={text.length===0} className=" btn btn-info my-3 mx-3" onClick={copyText}>Copy</button>
        <button disabled={text.length===0} className=" btn btn-light my-3 mx-3" onClick={handleExtraSpaces}>Remove extra space</button>
        <button disabled={text.length===0} className=" btn btn-danger my-3 mx-3" onClick={Clear}>Clear</button>
        
        </div>
    <div className="my-4"  >
        <h3>Word counter</h3>
        <p>{text.split(/\s+/ ).filter((element)=>{ return element.length!==0 }).length} Words and {text.length} Characters</p>
        <p>{0.008 *text.split(/\s+/).filter((element)=>{ return element.length!==0 }).length} Minutes to read</p>
        
    </div>
    </div>
    
    
    
    
    
    
    </>
    
  )
}
