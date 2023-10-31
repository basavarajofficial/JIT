import "./App.css";
import Gallary from "./components/Gallary";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainLayout from "./website/MainLayout";


function App() {

  return (
    // fraegments
      <div className="App">
        <h1>Welcome to my App</h1>
        {/* <Header />
        <div className="bodyContent">
          <SideBar />
          <Gallary  />
        </div> */}


        <MainLayout />
      </div>
  );
}

export default App;

















// function Profile(props){
//   return(
//     <div>
//       <h1>{props.name} from {props.city}</h1>
//       <img src='https://i.imgur.com/yXOvdOSs.jpg' alt="person" />
//     </div>
//   )
// }