import React from 'react'
import "./doctor.css"
import doctorsImg from "./doctors.jpg"
import doctorImg from "./doctor.jpg"
import doctors1Img from "./doctors.jpeg"



const doctor = (pops) => {
    return(
        
    
        
         <div className ="wrapper">
           
          
         <div className="doc-img">
             
          <img src={doctorsImg} alt="doctors-dummy-img"  width="150" height="150" />
          <div><img src="https://img.icons8.com/emoji/20/000000/green-circle-emoji.png"/>online</div>
          
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           
          <img src={doctorImg} alt="doctor-dummy-img"  width="150" height="150" />
          <div><img src="https://img.icons8.com/emoji/20/000000/green-circle-emoji.png"/>online</div>
          <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>

          <img src={doctors1Img} alt="doctors1-dummy-img"  width="150" height="150" />
          <div><img src="https://img.icons8.com/emoji/20/000000/red-circle-emoji.png"/>offline</div>
           </div>
           
        
          
          
        <div className="info-text">
         <h1>Deepmala</h1>
         <p>MBBS</p>
         <p>12 yrs</p>
         <p>Cardiology</p>
         <h3>*****</h3>
         <p><img src="https://img.icons8.com/material-sharp/20/000000/previous--location.png"/>Electronic cit..<img src="https://img.icons8.com/ios-filled/20/000000/circled-i.png"/></p>
         
         <br></br>
         <br></br>
        
        <h1>Dr Arun Dhwaj</h1>
         <p>MBBS</p>
         <p>12 yrs</p>
         <p>Cardiology</p>
         <h3>*****</h3>
         <p><img src="https://img.icons8.com/material-sharp/20/000000/previous--location.png"/>Electronic cit..<img src="https://img.icons8.com/ios-filled/20/000000/circled-i.png"/></p>
         <br></br>
         <br></br>
         
        <h1>Dr Aarush Dhwaj</h1>
         <p>MBBS</p>
         <p>12 yrs</p>
         <p>Cardiology</p>
         <h3>*****</h3>
         <p><img src="https://img.icons8.com/material-sharp/20/000000/previous--location.png"/>Electronic cit..<img src="https://img.icons8.com/ios-filled/20/000000/circled-i.png"/></p>
         
         </div>
        <div className="link-btn">
            <p>Consultion fee: 300rs</p>
            <p>Video call duration 30 min</p>
            <div>
                
                <button ><img src="https://img.icons8.com/windows/25/000000/chat-message.png"/>start chatting</button>
                <div><button><img src="https://img.icons8.com/material-outlined/24/000000/video-call.png"/>start video call</button></div>
                <div><button><img src="https://img.icons8.com/material-outlined/24/000000/video-call.png"/>POC video call</button></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                
                <p>Consultion fee: 300rs</p>
                <p>Video call duration 30 min</p>
            
                
                <button><img src="https://img.icons8.com/windows/25/000000/chat-message.png"/>start chatting</button>
                <div><button><img src="https://img.icons8.com/material-outlined/24/000000/video-call.png"/>start video call</button></div>
                <div><button><img src="https://img.icons8.com/material-outlined/24/000000/video-call.png"/>POC video call</button></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <p>Consultion fee: 300rs</p>
                <p>Video call duration 30 min</p>
            
                
                <button><img src="https://img.icons8.com/windows/25/000000/chat-message.png"/>start chatting</button>
                <div><button><img src="https://img.icons8.com/material-outlined/24/000000/video-call.png"/>start video call</button></div>
                <div><button><img src="https://img.icons8.com/material-outlined/24/000000/video-call.png"/>POC video call</button></div>
            
                </div>
                </div>
        </div>
        
        
    )
}
export default doctor 