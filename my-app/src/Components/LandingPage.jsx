import React from 'react'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Middle from './Middle.jsx'
import Service from './Service.jsx'
//import Design from './Design.jsx'
//import Coding from './Coding.jsx'





class LandingPage extends React.Component{
    constructor(props , context){
        super(props,context)
    }

    render(){
        return (
            <div>
                <Header serviceName = {this.props.serviceName}/>
                <section className = "ui basic vertical segment header">
                    <div className = "ui container">
                        <div className = "ui basic very padded left aligned segment">
                            <h1>Welcome My first React_Web</h1>
                            <h2>Make Web Application HAAHAHHA</h2> 
                        </div>
                    </div>
                </section>

                <section className = "ui basic segment">
                    <Middle />
                </section>

                <div className = 'ui divider hidden'></div>
                <section className = "ui basic segment body"></section>

                <section className="ui basic segment" ref='app_service'>
                    <Service />
                </section>


                

                
                
                
                <Footer serviceName = {this.props.serviceName}/>
            </div>
        )
    }
}

export default LandingPage ;
