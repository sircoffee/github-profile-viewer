import axios from "axios";

import { UserDataType } from "../types/UserDataType";
import { RepositoryType } from "../types/RepositoryType";

export const apiClient = axios.create({
  baseURL: "https://api.github.com/users/",
});

export const fetchUserData = async (input: string) => {
  const response = await apiClient.get<UserDataType>(
    `https://api.github.com/users/${input}`
  );
  return response.data;
};

export const fetchRepositoryData = async (input: string) => {
  const response = await apiClient.get<RepositoryType[]>(
    `https://api.github.com/users/${input}/repos`
  );
  return response.data;
};