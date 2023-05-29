// import logo from './logo.svg';
import './App.css';

import FunctionalProps from './Lab2/Lab2_1';
import ClassProps from './Lab2/Lab2_2';
import IsloggedIn from './Lab2/Lab2_3';
import AddCart from './Lab2/Lab2_4';
import { UserProvider } from './Lab3/Lab3_3.js/MainContext';
import Products from './Lab3/Lab3_1';
import Signup from './Lab3/Lab3_2(Signup)';
import CompnentFive from './Lab3/Lab3_3.js/CompnentFive';
import CompnentThree from './Lab3/Lab3_3.js/CompnentThree';
import Get from './Lab3/Lab3_4/Get';
import Post from './Lab3/Lab3_4/Post';


function App() {
  return (
    <div className="App">
     {/* <FunctionalProps fname="Mohamed" mname="Salah" lname="elsayed" age= "24"></FunctionalProps>
     <ClassProps Course1="JavaScript" Course2="React JS"></ClassProps>
  <IsloggedIn></IsloggedIn>*/}
    {/* <AddCart></AddCart>  */}
    {/* <Products/> */}
    {/* <Signup/> */}
  <UserProvider value="MohamedSalah">
  <CompnentThree/>
 <CompnentFive/>
  </UserProvider>

  <Post/>
    <Get/>

  
  
   </div>
  );
}




export default App;
