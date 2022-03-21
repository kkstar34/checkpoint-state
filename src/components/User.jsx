import React, { Component } from 'react'

export default class User extends Component {



    deletUser = (id) => {
        this.props.deleteUser(id);
    }


  render() {
    return (
    <div className="user">
        <div className="photo-card">
            <div className="photo-container">
                <img src="https://kouyatekarim.netlify.app/res/images/gomycode.jpeg" alt="" />
            </div>
        </div>

        <div className="description-card">
            <h3 className="name">{this.props.user.name}</h3>

            <button onClick={()=> this.deletUser(this.props.user.id)}>Supprimer</button>
        </div>
    </div>
    )
  }
}
