import React, { useContext, useEffect, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useContextUsers } from '../../../reposContext';
import { ContainerList, ContainerHeader } from './style';

interface ReposProps{
  html_url:string;
  description:string | null;
  name:string;
  full_name:string;
  id:number;
}

export default function ListRepos() {
  const { repo } = useContextUsers();
  return (
    <>
      <ContainerList>
        {
         repo?.map((repo) => (
           <ContainerHeader key={repo.id}>
             <div>
               <strong>{repo.name}</strong>
               <p>{repo.full_name}</p>
             </div>
             <a target="_blank" href={repo.html_url} rel="noreferrer">
               <RiArrowRightSLine size={40} />
             </a>
           </ContainerHeader>
         ))
       }
      </ContainerList>
    </>
  );
}
