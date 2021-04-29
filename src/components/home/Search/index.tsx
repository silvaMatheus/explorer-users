import React, { useState, useEffect, FormEvent } from 'react';
import { useContextUsers } from '../../../reposContext';

import {
  Title, Form, Container,
} from './styles';

export default function Search() {
  const [userName, setUserName] = useState('');
  const { setUserKeywords } = useContextUsers();
  const [errorMessage, setErrorMessage] = useState('');

  async function getKeywords(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!userName) {
      setErrorMessage('Digite o usuario');
      return;
    }

    setUserKeywords(userName);
  }

  return (
    <>
      <Container>
        <Title>
          Explore usuarios
          {' '}
          <br />
          do Github.
        </Title>
        <Form onSubmit={getKeywords}>
          <input
            autoCorrect="false"
            placeholder="Usuario"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button type="submit">Buscar</button>
        </Form>
      </Container>

    </>

  );
}
