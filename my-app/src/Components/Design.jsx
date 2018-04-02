import React from 'react'
import Card from './Card.jsx'
import sketch from '../img/card2.jpg'

class Design extends React.Component{
    constructor(props,context){
        super(props,context)
    this.state = {
        cardTitle : "DESIGN YOUR FRIST REACT LANDING PAGE",
        cardContent : "Let's draw the wireframe for your page ! "
    }
    }

    render(){
        return(
            <div className = "ui container">
                <div className = "ui stackable teo column grid">
                    <div className = "column">
                        <img className = "ui fluid image" src={sketch} />
                    </div>
                    <Card color = "91af59" cardTitle = {this.state.cardTitle} cardContent = {this.state.cardContent}/>
                </div>
            </div>
        )
    }
}

export default Design
