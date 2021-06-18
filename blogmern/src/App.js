import TopBar from "./topbar/TopBar"
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Setting from "./pages/settings/Setting"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"
import { Context } from "./context/Context"
import useContext from "react"







function App() {

  const {user} = useContext(Context)

  return (

    <Router>
       <TopBar/>
      
           <Switch>

             <Route exact path="/">
             
             
               <Home/>


             </Route>




             <Route path="/register">
             
             
               {user ? <Home/> : <Register/>}


             </Route>





             <Route path="/login">
             
             
               { user ? <Home/> : <Login/>}


             </Route>




             <Route path="/write">
             
             
               { user ? <Write/> : <Register/> }


             </Route>



            
             <Route path="/settings">
             
             
               {user ? <Setting/> : <Register/>}


             </Route>




             <Route path="/post/:postId">
             
             
               <Single/>


             </Route>
             
             




           </Switch>




    </Router>
   

    
  
 
       
    
  );
}

export default App;
