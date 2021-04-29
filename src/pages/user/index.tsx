import React from 'react';
import { useParams } from 'react-router-dom';
import ListRepos from '../../components/user/ListRepos';
import Profile from '../../components/user/Profire';

interface RepositoryParams {
  id: string;
}

function Users() {
  const { id } = useParams<RepositoryParams>();

  return (
    <>
      <Profile />
      <ListRepos />
    </>
  );
}

export default Users;
