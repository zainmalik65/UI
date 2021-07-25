import React from "react";

import Logo from'./bot.png';

import { Widget } from "rasa-webchat";

export default function App() {
  import "./App.css";

  return (
    <div>
      
    <iframe src="https://nu.edu.pk" width="100.9%" height="1000vh"></iframe>;
      <Widget hideWhenNotConnected={false}
      interval={2000}
      initPayload={"/greet"}
      socketUrl={"http://localhost:5005"}
      socketPath={"/socket.io/"}
        customData={{"language": "en"}} 
        title={"REHNUMA"}
        inputTextFieldHint={"Ask your query..."}
        subtitle={"Chatbot For Admission Queries"}
        

        profileAvatar={Logo}
        openLauncherImage={Logo}
        
        params={{
          
            
         storage:'session'
        }}
        
         />
        
    </div>
  );
}
