import React, {
  createContext, useState, useContext, ReactNode, useEffect, useRef,
} from 'react';
import { api } from './services/api';

interface UsersProps{
  totaAcount:number;
  items:[{
    login:string;
    id: number;
    avatar_url:string;
    url:string;
    repos_url:string
  }]
}

interface UserInfosProps{
  avatar_url:string;
  login:string;
  name:string;
  url:string;
  bio:string;
  public_repos:number;
  following:number;
  followers:number;
  repos_url:string;
}

interface ReposProps{
  html_url:string;
  description:string | null;
  name:string;
  full_name:string;
  id:number;
}

interface UsersProvider{
  children:ReactNode;
}
interface UsersContextData{
  users:UsersProps | undefined;
  userInfos:UserInfosProps | undefined;
  repo:ReposProps[] |undefined;
  setUserKeywords:(userKeywords:string) => void;
  setUserSelect:(userSelect:string) =>void;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

export function UsersProvider({ children } : UsersProvider) {
  const [users, setUsers] = useState<UsersProps>();
  const [userKeywords, setUserKeywords] = useState('');

  const [userSelect, setUserSelect] = useState('');
  const [userInfos, setUserInfos] = useState<UserInfosProps>();

  const [repo, setRepo] = useState<ReposProps[]>();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!userKeywords) return;

    async function getItems() {
      try {
        const { data: response } = await api.get(`/search/users?q=${userKeywords}`);
        setUsers(response);
      } catch (error) {
        console.log('Ocorreu um erro');
      }
    }
    setUserKeywords('');
    getItems();
  }, [userKeywords]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!userSelect) return;

    async function getInfo() {
      try {
        const { data: response } = await api.get(`/users/${userSelect}`);
        setUserInfos(response);
        const { data: repositories } = await api.get(`/users/${userSelect}/repos`);
        setRepo(repositories);
      } catch (error) {
        console.log(error);
      }
    }
    getInfo();
  }, [userSelect]);

  return (
    <UsersContext.Provider value={{
      users, setUserKeywords, userInfos, setUserSelect, repo,
    }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useContextUsers() {
  const context = useContext(UsersContext);
  return context;
}
