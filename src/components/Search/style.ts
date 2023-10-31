import styled from "styled-components";
import search from "../../assets/search.svg"
import lightActive from "../../assets/light_active.svg"
import darkActive from "../../assets/dark_active.svg"
export const Search = styled.input<{show: number | undefined}>`
  outline: none;
  background-color: white;
  border: none;
  height: 34px;
  background-image: ${props => !props.show ? `url(${search})` : 'none'};
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 16px;
  border-radius: 6px;
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding-left: 16px;
  ::placeholder{
    padding-left: 26px;
    color: var(--grey, #9394AA);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }


`

export const Theme = styled.div<{current: string | undefined}>`
  transition: all 0.5s ease;
  background-color: ${(props: { current: string | undefined}) => props.current === 'light' ?
    'white' : 'black'};
  height: 30px; 
  width: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
    cursor: pointer;
  }
  border: 1px solid lightgray;
  div{
    width: 24px !important;
    height: 24px !important;
    border-radius: 50px;
    margin: 2px;
    padding: 2px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${(props: { current: string | undefined}) => props.current === 'light' ?
            lightActive : darkActive});
  }
`