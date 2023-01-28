import axios, { AxiosResponse } from "axios";

import { useState } from "react";
import { useQuery } from "react-query";

import { Button } from "./components/Button";
import { Panel } from "./components/Panel";
import { RepositoryPanel } from "./components/RepositoryPanel";
import { TextInput } from "./components/TextInput";

import { UserDataType } from "./types/UserDataType";
import { RepositoryType } from "./types/RepositoryType";
import { fetchRepositoryData, fetchUserData } from "./services/ApiClient";

function App() {
  const [input, setInput] = useState("");

  const {
    data: user,
    isFetching: isUserFetching,
    isLoading: isUserLoading,
    refetch: userRefetch,
  } = useQuery("user_data", () => fetchUserData(input), {
    enabled: false,
  });

  const {
    data: repos,
    isFetching: isRepoFetching,
    isLoading: isRepoLoading,
    refetch: repoRefetch,
  } = useQuery("repo_data", () => fetchRepositoryData(input), {
    enabled: false,
  });

  return (
    <div className="application">
      <div className="header">
        <div className="menubar">
          <TextInput event={setInput} />
          <button
            disabled={isUserFetching || isRepoFetching}
            onClick={() => {
              repoRefetch();
              userRefetch();
            }}
          >
            Find
          </button>
        </div>
      </div>
      <div className="body">
        <Panel suspend={true} data={user}>
          <>
            <img src={user?.avatar_url} />
            <h1>{user?.name}</h1>
            <h3>{user?.login}</h3>
            <p>{user?.bio}</p>
          </>
        </Panel>

        <div className="repository-container">
          {repos?.map((repo) => {
            return (
              <RepositoryPanel key={repo.id} data={repo} />
            );
          })}
        </div>

        <Panel>
          <h1>Hi, big text here.</h1>
          <p>Normal usual paragraph</p>
          <small>This is such a tiny text.</small>
        </Panel>
      </div>
    </div>
  );
}

export default App;
