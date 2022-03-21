import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import User from './components/User';
import UserList from './components/UserList';
import { Component } from 'react';

class App extends Component {


  state =
  {

    users : [{id: 1, name : "Kouyate Karim"}, {id : 2, name : "Ngatia Eric"}, {id: 3, name : "Yoyo 225"}]
  
  
  }

  addUser = (user) =>
  {

    let newUsers = [...this.state.users];

    newUsers.push(user);

    this.setState({users : newUsers});
  }

  deleteUser = (id) => {

   
    let newUsers = [...this.state.users];

    let index = newUsers.findIndex((user) => user.id === id);

    newUsers.splice(index, 1);

    this.setState({users : newUsers});




  }

  render() {
    return (
      <div className="body">
          <div className="App container">
              <SearchBar addUser={this.addUser}/>
              <UserList users={this.state.users} deleteUser={this.deleteUser}/>
          </div>
      </div>
    );
  }
  
}

export default App;
