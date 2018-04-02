import React from 'react'
import Card from './Card.jsx'

//section image
 import card2 from '../img/card2.jpg'

 class Coding extends React.Component{
     constructor(props,context){    
         super(props,context)
         this.state = {
            cardTitle : "CODING YOUR FRIST REACT LANDING PAGE",
            cardContent : "Let's coding your page ! "
         }
        }

        render(){
            return(
                <div className = "ui container">
                    <div className = "ui stackable two column grid">
                        <Card color = "#987f47" cardTitle = {this.state.cardTitle} cardContent = {this.state.cardContent}/>
                        <div className = "column">
                            <img className = "ui fluid image" src = {card2} />
                        </div>
                    </div>
                </div>       
                )
        }
 }

 export default Coding;