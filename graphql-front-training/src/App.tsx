import { useState, useEffect } from 'react';
import './App.css';
import { useMutation, useQuery } from '@apollo/client'
import { GET_ALL_USERS, GET_ONE_USER } from './query/user';
import { CREATE_USER } from './mutations/user';

const App = () => {

  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS)
  // const { data: dataOneUser, loading: loadingOneUser} = useQuery(GET_ONE_USER, {variables: {id: 1}})
  const [newUser] = useMutation(CREATE_USER)

  type user = {
    id: number | null;
    username: string | null;
    age: number | null;
  }

  const initialState: Array<user> = []

  const [users, setUsers] = useState(initialState)
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)

  useEffect(() => {
    loading
      ? <h1>Loading...</h1>
      : setUsers(data.getAllUsers)
  }, [data])


  //@ts-ignore
  const addUser = (e) => {
    e.preventDefault()
    newUser({
      variables: {
        input: {
          username, age
        }
      }
    }).then(() => {
      setUsername('')
      setAge(0)
    }
    )
  }

  //@ts-ignore
  const getAll = (e) => {
    e.preventDefault()
    refetch()
  }

  return (
    <div className="App">
      <form>
        <div className='wrap'>
          <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
        </div>
        <div className='wrap'>
          <input value={age} onChange={e => setAge(Number(e.target.value))} type="text" />
        </div>
        <div className='btns wrap'>
          <div className='wrap'>
            <button onClick={(e) => addUser(e)}>
              Create User
            </button>
          </div>
          <div className='wrap'>
            <button onClick={(e) => getAll(e)}>
              Get User
            </button>
          </div>
        </div>
      </form>
      <div>
        {users.map(user => {
          return <div className='user' >
            {user.id} {user.username} {user.age}
          </div>
        }
        )}
      </div>
    </div>
  );
}

export default App;
