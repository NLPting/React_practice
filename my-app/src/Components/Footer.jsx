import React from 'react'

class Footer extends React.Component{
    render(){
        var footstyle = {
            marginTop : '50px'
        }
        var linkstyle = {
            marginLeft : '20px',
            color: '#FFFFFF'
        }

        return (
            <div className = {'ui basic padded inverted center aligned segment footer'} style={footstyle}>
                <p><i className="mail outline icon"></i>ting@nlplab.cc <a href="https://www.facebook.com/profile.php?id=100002383560340" 
                target = "_blank" rel='noopener noreferrer' style = {linkstyle}><i className = "facebook icon"></i></a></p>
                <p>Copyright &copy tingting. </p>
            </div>
        )
    }
}

export default Footer