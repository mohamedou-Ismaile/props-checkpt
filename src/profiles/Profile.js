import React, { Component } from 'react'
import Mypic from "../user.png";
import PropTypes from "prop-types";
export default class profile extends Component {
    constructor(props){
        super(props);
               
        this.handleName = this.handleName.bind(this);

    }
    handleName(){
        alert('user name is '+this.props.fullName);
                }


                
    render() {
        const cardStyles = {
            container: {
                display: "inline-block",
                height: 300,
                width: 400,
                boxShadow: "0 0 3px 2px #cec7c759",
                alignItems: "center",
                padding: 20,
              borderRadius: 20,
              marginTop :100
              },
              profilePicture: {
                display: "inline-block",
                justifyContent: "center",
               alignItems: "center",
                
                color: "white",
                height: 150,
                width: 150,
                borderRadius: "50%",
                padding: 10,
                fontWeight: "bold",
                marginLeft:50
              },
              bio: {
                marginLeft: 10,
                fontWeight: "bold",
              },
              userName: {
                fontWeight: "bold",
             },
             button: {
                backgroundColor: "#4CAF50", 
                border: "none",
                color: "white",
               
                textAalign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: 16,
                borderRadius: 20,
              }
            };
        
        return (
            <div style={cardStyles.container}>
                <div>
        <span style={cardStyles.userName}>FullName : {this.props.fullName}</span>
    </div>
    <div >
        <span style={cardStyles.bio}>Bio : {this.props.bio}</span>
    </div>
    <div>
        <span style={cardStyles.userName}>Profession : {this.props.profession}</span>
    </div>
    <div >
      <img src={this.props.pic} alt="" style={cardStyles.profilePicture}/>
      {this.props.children}
    </div>
    <button onClick={this.handleName} style={cardStyles.button}>Click me</button>
            </div>
        )
    }
}
profile.defaultProps ={
    fullName : "Ismaile",
    bio : "nothing",
    profession : "web dev",
    pic: Mypic 
    
    }
    profile.propTypes ={
        fullName: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        profession: PropTypes.string.isRequired,
        pic: PropTypes.string.isRequired
    }
   