
import axios from 'axios';
import { useEffect, useState } from 'react'


function fetchUserData(setUserData: any, url: string) {
  axios.get(url).then(async (res) => {
    await setUserData(res.data);
    await console.log(res.data);
  })
}

interface UserDataTypes {
  avatar_url?: string,
  login?: string,
  bio?: string,
  followers?: number,
  following?: number,
  html_url?: string,
  name?: string,
  repos_url?: string, 
}

function App() {

  const [userData, setUserData] = useState<UserDataTypes>({});


  useEffect(() => {
    fetchUserData(setUserData, "https://api.github.com/users/sorkofi");
  }, []);

  return (
    <div className="application">
      <div className="header">
        <div className="menubar">
          <input type="text"></input>
          <button>Find</button>
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