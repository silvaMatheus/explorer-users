import React, { useEffect, useState } from 'react';
import { useContextUsers } from '../../../reposContext';
import Card from '../CardUser';
import { ContainerList } from './style';

interface ListUsers{
    login:string;
    id: number;
    avatar_url:string;
    repos_url:string
}

export default function ListUsers() {
  const { users } = useContextUsers();
  const [listUsers, setListUsers] = useState<ListUsers[]>();
  const [totalUsers, setTotalUsers] = useState<number>();
  const [noUser, setNoUser] = useState<boolean>(false);

  useEffect(() => {
    if (!users) {
      setNoUser(true);
      return;
    }
    setListUsers(users.items);
    setTotalUsers(users.totaAcount);
  }, [users]);

  return (
    <>
      <ContainerList>
        {
         listUsers?.map((user) => (
           <Card
             key={user.id}
             login={user.login}
             id={user.id}
             avatar={user.avatar_url}

           />
         ))
       }
      </ContainerList>
    </>
  );
}
