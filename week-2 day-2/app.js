import { Student } from "./components/student";
import { ChildComponent } from "./components/ChildComponent";
function App() {

  return (
      <Student Name ="kinjal" Age={21} MartialStatus="Single"/> 
      <Student Name ="Anu" Age={27} MartialStatus="Married"/> 
       <Student Name="sara"/>
      <Student /> 
      {ChildComponent}
      <p>This is sample para 1</p>
      <p>This is sample para 2</p>
      <p>This is sample para 3</p>  
      {ChildComponent}    
     
    </div>
  );
}

export default App;

