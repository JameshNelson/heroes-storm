import React, {Component} from 'react';
import axios from 'axios'; 

class HeroDisplay extends Component {
    

    render(){
        console.log(this.state.heroArr); 
        return(
            <ul>
                {this.state.heroArr.map(hero => <li>{hero.name}</li>)}
            </ul>
        )
    }
}

export default HeroDisplay; 