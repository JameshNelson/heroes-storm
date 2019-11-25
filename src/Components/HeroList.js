import React, {Component} from 'react';
import axios from 'axios'; 
import AddHero from './AddHero'


const HeroList = (props) => {


        return(
            
                <div className='hero-list'>
                   
                    {props.heroList.map((hero) =>{
                        return (
                        
                                <div>
                                    <b>Name:</b> {hero.name}   <b>Title:</b> {hero.title}   <b>Class:</b> {hero.hClass}  <b>Win Rate:</b> {hero.winRate} <button id={hero.name} onClick={e=> props.deleteFn(e.target.id)}>Delete</button> 
                                    <button id={hero.name} onClick={e=> props.editFn(e.target.id)}>Edit</button>  
                                </div>

                        

                        )
                    })}
                </div>
           
            
            
            
            
            
        )    
}


export default HeroList; 