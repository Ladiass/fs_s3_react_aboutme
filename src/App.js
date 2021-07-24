import { BrowserRouter as Router , Switch , Route} from "react-router-dom"

import Home from "./component/pages/Home"
import AboutMe from "./component/pages/AboutMe"
import Hobby from "./component/pages/Hobby"
import Images from "./component/pages/Images"

import Nav from "./component/Nav"

function App() {

  const PageNotFound = () => (<>404!</>)
  
  return (
    <>
      <h1 className="text-2xl my-5 ml-2 font-extrabold" >About Me</h1>
      
        <Router>
          <Nav/>
          <br />
          <div className="my-4 mx-2">
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/AboutMe" component={AboutMe} />
              <Route path="/Hobby" component={Hobby} />
              <Route path="/Images" component={Images} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      
      
    </>
  );
}

export default App;
