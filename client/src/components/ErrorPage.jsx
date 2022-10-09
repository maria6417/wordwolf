import React from 'react';
import styled from 'styled-components';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage({  }) {
  const error = useRouteError();
  return (
    <CenterContainer>
      <h1>Oops!</h1>
      <div
        style={{
          padding: '10px',
        }}
      >
        Sorry, an unexpected error has occured.
      </div>
      <div
        style={{
          padding: '10px',
          color: 'grey',
        }}
      >
        {error.statusText || error.message }
      </div>
    </CenterContainer>
  )
}

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;