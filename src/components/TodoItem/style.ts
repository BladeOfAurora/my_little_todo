import styled from "styled-components";

export const TodoItem = styled.div<{ status: string }>`
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4{
    margin: 10px;
    font-size: 1.5rem;
    text-decoration: ${(props) => props.status === "completed" ? "line-through" : "none"};
  }
`

export const ItemActions = styled.div<{ status: string }>`
  margin: 5px;
  :hover {
    cursor: pointer;
  }
  color: #494949;
  button {
    transition: all 0.5s ease;
    margin: 5px;
    border: none;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background: ${(props) => props.status === "completed" ? "#494949" : "#12c712"};
    img {
      width: 18px;
      height: 18px;
    }
  }
`