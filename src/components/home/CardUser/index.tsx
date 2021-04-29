import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ContainerHeader } from './style';

interface CardProps{
    login:string;
    id: number;
    avatar:string;
}

export default function Card({
  login, id, avatar,
}:CardProps) {
  return (
    <ContainerHeader>
      <img src={avatar} alt="login" />

      <h3>{login}</h3>

      <Link
        to={`/${login}`}
        key={login}
      >
        <RiArrowRightSLine size={40} />
      </Link>

    </ContainerHeader>
  );
}
