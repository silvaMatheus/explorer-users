import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ProfileImg, Rates } from './style';
import { useContextUsers } from '../../../reposContext';

interface Parms{
  user:string ;
}

export default function Profile() {
  const { user } = useParams<Parms>();

  const { userInfos, setUserSelect, repo } = useContextUsers();

  useEffect(() => {
    setUserSelect(user);
  }, [user]);

  return (
    <>
      <Container>
        <ProfileImg>
          <img src={userInfos?.avatar_url} alt="" />
          <div>
            <strong>{userInfos?.name}</strong>
            <p>{userInfos?.login}</p>
            <p>{userInfos?.bio}</p>
          </div>

        </ProfileImg>

        <Rates>
          <ul>
            <li>
              <strong>
                {userInfos?.public_repos}
              </strong>
              <span> Repositories </span>

            </li>
            <li>
              <strong>
                {userInfos?.following}
              </strong>
              <span> Following </span>
            </li>
            <li>
              <strong>
                {userInfos?.followers}
              </strong>
              <span> Followers </span>
            </li>
          </ul>

        </Rates>

      </Container>
    </>
  );
}
