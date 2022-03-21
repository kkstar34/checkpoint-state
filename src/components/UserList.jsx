import React, { Component } from 'react'
import User from './User';

export default class UserList extends Component {
  render() {
    return (
    <div className="user-list">   
      {this.props.users.map(user => <User key={user.id} user={user}  deleteUser={this.props.deleteUser}/>)}  
    </div>
    )
  }
}
