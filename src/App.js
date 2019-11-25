import React, {Component} from 'react';
import './App.css';
import HeroDisplay from "./Components/HeroDisplay"; 
import HeroList from './Components/HeroList'; 
import axios from 'axios'
import PageHeader from './Components/Header';
import AddHero from './Components/AddHero'; 

class App extends Component {
  constructor(){
    super()
    this.state = {
        heroArr: [],
        oldName:'',
        name: '',
        title: '',
        class: '',
        wr: 0
    }
}

componentDidMount(){
    axios.get('/api/heroes/').then(res =>{
       
        const heroArr = res.data;
        this.setState({heroArr});
    }).catch(err => console.log(err))
}
  
  handleChange(e) {
    
    this.setState({
      
      [e.target.name]: e.target.value
    })
  }

  deleteHero(id){
    axios.delete(`/api/heroes/${id}`).then(res =>{
        this.setState({heroArr: res.data})
    }).catch(err => console.log(err))
}

  addHero(body){
    axios.post('/api/heroes', body).then(res => {
      console.log(res.data)
      this.setState({
        heroArr: res.data
      })
    }).catch(err => console.log(err))
  }

  editHero(id, body){
    axios.put(`/api/heroes/${id}`, body).then(res => {
      console.log(res.data)
      this.setState({
        heroArr: res.data
      })
    }).catch(err => console.log(err))
  }

  

  
  render(){

  
    return (
      <div className="App">
        <PageHeader />
        <HeroList
          heroList={this.state.heroArr}
          deleteFn={this.deleteHero} 
          editFn ={this.editHero}/>
        {/* <AddHero
          addHeroFn={this.addHero}
          heroList={this.state.heroArr}/> */}

                  <form onSubmit={() => this.addHero({
                    name:this.state.name,
                    title:this.state.title,
                    hClass:this.state.class,
                    winRate: this.state.wr

                  })}>
                    <label>
                         Name:
                        <input type="text" name="name"  onChange={e => this.handleChange(e)}/>
                    </label>
                    <label>
                        Title: 
                        <input type="text" name="title" onChange={e => this.handleChange(e)}  />
                    </label>
                    <label>
                        Class: 
                        <input type="text" name="class"  onChange={e => this.handleChange(e)} />
                    </label>
                    <label>
                        Win Rate: 
                        <input type="number" name="wr" onChange={e => this.handleChange(e)} />
                    </label>
                    <button type="submit">Add</button>
                 </form>

                 <form  onSubmit={ () => this.editHero({
                    name:this.state.name,
                    title:this.state.title,
                    hClass:this.state.class,
                    winRate: this.state.wr

                  })}>
                     <label>
                        Old Name:
                        <input  type="text" name="oldName"  onChange={e => this.handleChange(e)}/>
                    </label>
                    <label>
                         Name:
                        <input type="text" name="name"  onChange={e => this.handleChange(e)}/>
                    </label>
                    <label>
                        Title: 
                        <input type="text" name="title" onChange={e => this.handleChange(e)}  />
                    </label>
                    <label>
                        Class: 
                        <input type="text" name="class"  onChange={e => this.handleChange(e)} />
                    </label>
                    <label>
                        Win Rate: 
                        <input type="number" name="wr" onChange={e => this.handleChange(e)} />
                    </label>
                    <button  type="submit">Broken Edit Button</button>
                 </form>
                 


              
      </div>
    );
  }
}

export default App;
