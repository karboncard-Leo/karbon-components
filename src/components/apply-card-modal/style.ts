import styled from 'styled-components';

export const Title = styled.div`
  display: grid;
  justify-content: center;
  margin-bottom: 18px;
  margin-top: 10px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: white;
    font-size: 25px;
    text-align: center;
    background-color: #ffab00;
    border-radius: 50%;
  }
`;
export const Content = styled.div`
  font-size: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
`;
