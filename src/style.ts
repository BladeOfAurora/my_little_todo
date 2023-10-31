import styled from "styled-components";

export const RootContainer = styled.div<{theme: string | undefined}>`
  transition: all 0.5s ease;
  background-color: ${(props: { theme: string | undefined}) => props.theme === 'dark' ? '#1E1B1B' : '#F2F2F2'};
  color: ${(props: { theme: string | undefined}) => props.theme === 'dark' ? '#F2F2F2' : '#1E1B1B'};
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Container = styled.div<{theme: string | undefined}>`
  width: 410px;
  border-radius: 6px;
  margin: 0 auto;
  box-shadow: 0 0 35px 15px rgba(126, 126, 126, 0.2);

  :last-of-type {
    border-bottom: none;
  }
`