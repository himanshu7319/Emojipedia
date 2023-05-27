import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function Select(First){
return(<Entry 
  key={First.id}
  emoji={First.emoji}
  name={First.name}
  mean={First.meaning}
/>);

}
function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia!</span>
      </h1>

      <dl className="dictionary">
       
       {emojipedia.map(Select)}
        
      </dl>
    </div>
  );
}

export default App;
