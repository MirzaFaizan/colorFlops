import React,{Component} from 'react';
import  {BrowserRouter,Route} from 'react-router-dom' 

//components
import Buy from '../Buy/buy'
import FlipFlop from '../FlipFlop/FlopFlop'
import BuildSandal from '../Sandal/Sandaljs'
class CustomRoutes extends Component{

    render(){
        return(
            <BrowserRouter>
         
            <Route exact path="/buy/:id" component={Buy}/>
            <Route exact path="/" component={FlipFlop}/>
            <Route exact path="/sandal" component={BuildSandal}/>
            </BrowserRouter>
        )
    }
}

export default CustomRoutes;