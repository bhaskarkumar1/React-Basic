import "./styles.css";

let greet="";
let color="";
const d=new Date();
const hours=d.getHours();
if(hours<12){
  greet= "GoodMorning";
  color="green";
} 
else if(hours>12 && hours<18){
  greet="Good AfterNoon";
} 
else {
  greet="Good Night";
  color="blue";
}
function App() {
  return (
    <div> 
   
     <h1 className="heading" style={{color:{color}}}>{greet}</h1>
  
     </div>
  
  );
}

export default App;
