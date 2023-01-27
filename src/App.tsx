import axios from "axios";


import { useDebugValue, useEffect, useState } from "react";
import { useQuery } from "react-query";

import { Button } from "./components/Button";
import { Panel } from "./components/Panel";
import { RepositoryPanel } from "./components/RepositoryPanel";
import { TextInput } from "./components/TextInput";

interface UserDataTypes {
  avatar_url?: string;
  login: string;
  bio?: string;
  followers?: number;
  following?: number;
  html_url?: string;
  name?: string;
  repos_url?: string;
}

interface Repos {
  owner: string;
}

function App() {
  const [input, setInput] = useState("");

  const { data, isFetching, refetch } = useQuery<UserDataTypes>("repositories", async () => {
      const response = await axios.get(`https://api.github.com/users/${input}`)
      return response.data;
    
  }, {
    enabled: false,
  });

  return (
    <div className="application">
      <div className="header">
        <div className="menubar">
          <TextInput event={setInput} />

          <Button disabled={isFetching} title="Find" event={refetch} login={input} />
        </div>
      </div>
      <div className="body">
        <Panel suspend={true} data={data}>
          <>
            <img src={data?.avatar_url} />
            <h1>{data?.name}</h1>
            <h3>{data?.login}</h3>
            <p>{data?.bio}</p>
          </>
        </Panel>

        <div className="repository-container">
          <RepositoryPanel data={data?.bio} />
          <RepositoryPanel data={data?.bio} />
          <RepositoryPanel data={data?.bio} />
        </div>

        <Panel data={data}>
          <h1>Hi, big text here.</h1>
          <p>Normal usual paragraph</p>
          <small>This is such a tiny text.</small>
        </Panel>
      </div>
    </div>
  );
}

export default App;
