import './App.css';
import Mypic from "./user.png";
import Profile from "./profiles/Profile"
function App() {
  
  const styleObj ={ color: 'black', padding: 20 }
  return (
    <div className="App" style={styleObj}>
     <Profile  fullName="Mohamedou" bio="studying" profession="student" pic={Mypic}/>
    </div>
  );
}


export default App;
