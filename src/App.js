import GetData from "./components/getData/GetData";
import ShowContacts from "./components/showContacts/ShowContacts";
import React, { useEffect, useState } from "react";
import UseContext from './components/UseContext'

function App() {

  const [myStateEdit,setmyStateEdit] = useState("");
  const [chenge,setChenge] = useState(false)

  useEffect(()=>{
    if(chenge){
      console.log(chenge);
      setmyStateEdit(chenge)
      // setChenge(false);
    }
  },[chenge])

  return (
    <UseContext.Provider value={{chenge,setChenge}}>
      <div>
        <GetData />
        <ShowContacts />
      </div>
    </UseContext.Provider>
  );
}

export default App;
