import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import Menu from './components/main/Menu'
import {getAllMeun} from './services/UserService'

function App() {
  
  const [menu, setMenu] = useState([]);
  const [menu_flog, setMenu_flog] = useState({});
  useEffect(()=>{
    getAllMeun().then(res=>{
      setMenu(res)
    });
  },0)
  /*
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)

  const userCreate = (e) => {
      createUser(user).then(response => {
          setNumberOfUsers(numberOfUsers+1)
      });
  }
  const userRemove = (e) => {
    console.log('check')
    removeUesr(useState.length-1).then(response=>{
      setNumberOfUsers(numberOfUsers-1)
    });
  }
  const fetchAllUsers = () => {
    getAllUsers().then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }

  useEffect(() => {
    getAllUsers().then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }, [])

  const onChangeForm = (e) => {
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }
      setUser(user)
  }
  return (
        <div className="App">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                  <CreateUser 
                    user={user}
                    onChangeForm={onChangeForm}
                    createUser={userCreate}
                    removeUser={userRemove}
                    >
                  </CreateUser>
              </div>
              <div className="col-md-4">
                  <DisplayBoard
                    numberOfUsers={numberOfUsers}
                    getAllUsers={fetchAllUsers}
                  >
                  </DisplayBoard>
              </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Users users={users}></Users>
          </div>
          <Menu>

          </Menu>
        </div>
    );
  */
    
    return (
        <div className="App">
          <Header></Header>
          <Menu menu = {menu}>

          </Menu>
        </div>
    );
}


export default App;
