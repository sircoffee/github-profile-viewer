
import axios from 'axios';
import { useDebugValue, useEffect, useState } from 'react'
import { Button } from './components/Button';
import { Panel } from './components/Panel';
import { RepositoryPanel } from './components/RepositoryPanel';
import { TextInput } from './components/TextInput';

interface UserDataTypes {
  avatar_url?: string,
  login: string,
  bio?: string,
  followers?: number,
  following?: number,
  html_url?: string,
  name?: string,
  repos_url?: string, 
}

interface Repos {
  owner: string,
}

function App() {

  const [input, setInput] = useState("");

  const [userData, setUserData] = useState<UserDataTypes>({login: input});
  const [repo, setRepo] = useState<Repos>({owner: userData.login});
  const [login, setLogin] = useState("");

  const [errorCode, setErrorCode] = useState();

  async function fetchUserData(func: any, url: string) {
    await axios.get(url).then((res) => {
      func(res.data);
    });
  }

  useEffect(() => {
    if(login != "") {
      fetchUserData(setUserData, `https://api.github.com/users/${login}`);
    }
  }, [login]);

  return (
    <div className="application">
      <div className="header">

        <div className="menubar">
          <TextInput event={setInput} />

          <Button title="Find" event={setLogin} login={input} />
        </div>

      </div>
      <div className="body">

        <Panel suspend={true} data={userData}>
            <>
              <img src={userData.avatar_url} />
              <h1>{userData.name}</h1>
              <h3>{userData.login}</h3>
              <p>{userData.bio}</p>
            </>
        </Panel>

        <div className="repository-container">
          <RepositoryPanel data={repo} />
          <RepositoryPanel data={repo} />
          <RepositoryPanel data={repo} />
        </div>
        
          
        <Panel data={userData}>
          <h1>Hi, big text here.</h1>
          <p>Normal usual paragraph</p>
          <small>This is such a tiny text.</small>
        </Panel>
      </div>
    </div>
  )
}

export default App