
import axios from 'axios';
import { useDebugValue, useEffect, useState } from 'react'
import { Button } from './components/Button';
import { Panel } from './components/Panel';
import { RepositoryPanel } from './components/RepositoryPanel';
import { TextInput } from './components/TextInput';


async function fetchUserData(setUserData: any, url: string, setErrorCode: any) {
  await axios.get(url).then((res) => {
    setUserData(res.data);
    setErrorCode(res.status)
  }).catch((err) => {
    console.log(`Error code: ${err.response.status}`);
    setErrorCode(err.response.status);
  });
}

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

function App() {

  const [input, setInput] = useState("");
  const [userData, setUserData] = useState<UserDataTypes>({login: input});
  const [errorCode, setErrorCode] = useState();

  useEffect(() => {
    fetchUserData(setUserData, `https://api.github.com/users/${userData.login}`, setErrorCode);
    console.log(errorCode)
  }, [userData.login]);

  return (
    <div className="application">
      <div className="header">

        <div className="menubar">
          <TextInput event={setInput} />

          <Button title="Find" event={() => {
            setUserData({login: input})
          }} />
        </div>

      </div>
      <div className="body">

        <Panel suspend={true} data={userData}>
          { errorCode === 200 ?
            <>
              <img src={userData.avatar_url} />
              <h1>{userData.name}</h1>
              <h3>{userData.login}</h3>
              <p>{userData.bio}</p>
            </> : <p>Type a valid Github login username in the text field above to show profile information.</p>
          }
        </Panel>

        <RepositoryPanel />
          
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