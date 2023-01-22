
import axios from 'axios';
import { useDebugValue, useEffect, useState } from 'react'
import { Button } from './components/Button';
import { TextInput } from './components/TextInput';


async function fetchUserData(setUserData: any, url: string) {
  await axios.get(url).then((res) => {
    setUserData(res.data);
  }).catch((err) => {
    console.log(`Error code: ${err.response.status}`);
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

  useEffect(() => {
    fetchUserData(setUserData, `https://api.github.com/users/${userData.login}`);
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
        <div className="block-left shadow">
          <img src={userData.avatar_url} />
          <h1>Hi, big text here.</h1>
          <p>Normal usual paragraph</p>
          <small>This is such a tiny text.</small>
        </div>
        <div className="block-right shadow">
          <h1>Hi, big text here.</h1>
          <p>Normal usual paragraph</p>
          <small>This is such a tiny text.</small>
        </div>
      </div>
    </div>
  )
}

export default App