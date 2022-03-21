import React, { Component } from "react";

export default class SearchBar extends Component {


    state = { 
        name: ""
    }

    moussa(e){
        this.setState({name : e.target.value})
    }

    addChaka(){
         this.props.addUser({id : Date.now() , name : this.state.name})
    }



  render() {
    return (
      <div className="search-bar">
        <div className="form">
          <input type="text" onChange={this.moussa.bind(this)}/>
          <button onClick={this.addChaka.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}
