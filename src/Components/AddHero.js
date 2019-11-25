import React, {Component} from 'react';


class AddHero extends Component {
    constructor(){
        super()

    }

    render(){
        return (
            <div>
                <form onSubmit={this.addHeroFn}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.addHeroFn} />
                    </label>
                    <label>
                        Title: 
                        <input type="text" name="name" onChange={this.addHeroFn} />
                    </label>
                    <label>
                        Class: 
                        <input type="text" name="name" onChange={this.addHeroFn} />
                    </label>
                    <label>
                        Win Rate: 
                        <input type="number" name="win-rate" onChange={this.addHeroFn} />
                    </label>
                    <button type="submit">Add</button>
                 </form>

            </div>
        )
    }
}

export default AddHero