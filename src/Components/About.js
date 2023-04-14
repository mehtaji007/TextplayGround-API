import React, { useState } from 'react'



export default function DarkMode(props) {
    const [mode,newmode]=useState({
        color:'black',
        backgroundColor:'white'}
    )
    const [btn1,btn2]=useState("Mode Change to Dark")
    const ModeChange=()=>{
      if(mode.color==='black')
      {
        newmode({
            color:'white',
        backgroundColor:'black'
        })
        btn2("Mode change to light")
    }
      else {
            newmode({
                color:'black',
            backgroundColor:'white'
            })
            btn2("Mode change to Dark")
        }
      
    
    
    }
  return (
    <>
    <div className="container border border-dark mt-5" style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h3 className="display-4">About Us</h3>
     <p className="lead">Welcome to TextplayGround, a powerful text analysis tool designed to help you gain insights and understandings from your written content. Whether you're a writer, researcher, marketer, or simply looking to gain a better understanding of your text, our website provides you with the tools you need to analyze and interpret your content.</p>
     <p className="lead">Our website uses a combination of cutting-edge algorithms and natural language processing technology to analyze your text and provide you with useful insights. With our easy-to-use interface, you can upload your text and quickly get a comprehensive analysis of key metrics such as sentiment, tone, readability, and more.</p>
     <p className="lead">We understand that every user has unique needs and preferences when it comes to text analysis. That's why our website offers a range of customization options to tailor your analysis to your specific needs. Whether you need to analyze a social media post, an academic paper, or any other type of text, we've got you covered.</p>
     <p className="lead">At TextplayGround, we're passionate about empowering our users with the insights and knowledge they need to succeed. Try our website today and experience the power of text analysis for yourself!</p>
    </div>
  </div>
    </div>
    
      
  </>
  )
}
