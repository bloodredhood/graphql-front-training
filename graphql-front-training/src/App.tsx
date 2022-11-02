import { useState } from 'react';
import './App.css';

const App = () => {

  // type User = {
  //   id: Number;
  //   username: String;
  //   age: Number;
  // }


  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <form>
        <div className='wrap'>
          <input type="text" />
        </div>
        <div className='wrap'>
          <input type="number" />
        </div>
        <div className='btns wrap'>
          <div className='wrap'><button>Create User</button></div>
          <div className='wrap'><button>Get User</button></div>
        </div>
      </form>
      <div>
        {/* {users.map(user => {
          return <div className='user' >
            {user.id} {user.username} {user.age}
          </div>
        }
        )} */}
      </div>
    </div>
  );
}

export default App;
