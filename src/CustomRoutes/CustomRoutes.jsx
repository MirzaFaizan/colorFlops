import React,{Component} from 'react';
import  {BrowserRouter,Route} from 'react-router-dom' 

//components
import Buy from '../Buy/buy'
import FlipFlop from '../FlipFlop/FlopFlop'
import BuildSandal from '../Sandal/Sandaljs'
import Flipflop2 from '../Flipflop2/flipflop2js'
import Sandal2 from '../Sandal 2/Sandal2js'
import Flipflop3 from '../FLipflop3/Flipflop3'
class CustomRoutes extends Component{

    render(){
        return(
            <BrowserRouter>
         
            <Route exact path="/buy/:id" component={Buy}/>
            <Route exact path="/" component={FlipFlop}/>
            <Route exact path="/sandal" component={BuildSandal}/>
            <Route exact path="/Flipflop2" component={Flipflop2}/>
            <Route exact path="/Sandal2" component={Sandal2}/>
            <Route exact path="/Flipflop3" component={Flipflop3}/>
            </BrowserRouter>
        )
    }
}

export default CustomRoutes;