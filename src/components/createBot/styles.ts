import styled from 'styled-components/macro';

export const CheckBoxWrapper = styled.div`
  position: absolute;
  right: 4px;
  top: -3px;
  display: flex;
  align-items: center;
  font-weight: bold;
  input {
    height: 30px;
    width: 30px;
    margin-left: 10px;
  }
`;

export const IntentListContainer = styled.div`
  width: 90%;
  position: relative;
  margin: 0 auto;
  z-index: 20;
  margin-top: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 30px;
`;

export const IntentCardContainer = styled.div`
  width: 100%;
  height: 320px;
  margin-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  border: 2px solid #e6efff;
  cursor: pointer;
  .card__tooltip--hidden {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #e6efff;
    padding: 20px;
    border-radius: 10px;
    z-index: 10;
    text-align: center;
    p {
      font-weight: 400;
      font-size: 15px;
      line-height: 0;
      color: #3a3939;
    }
  }
  &:hover {
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
    .card__tooltip--hidden {
      display: block;
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding: 0 10px;
  height: 26%;
  border-radius: 10px;
  border-bottom: 1px solid #d8d5d5;
  input {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  h3 {
    font-weight: 600;
    font-size: 23px;
    letter-spacing: 3px;
  }
  h6 {
    opacity: 0.6;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  line-height: 10px;
  border-bottom: 1px solid #d8d5d5;
  font-size: 14px;
  & > div:first-child {
    flex: 1;
    line-height: 17px;
    img {
      margin-right: 10px;
    }
    & > div {
      display: flex;
      padding: 8px 0;
    }
  }
  & > div:last-child {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    & > span:first-child {
      font-weight: bold;
    }
    & > span:last-child {
      font-weight: 600;
      font-size: 12px;
      color: #5956e9;
    }
  }
`;
export const CardFooter = styled.div`
  display: flex;
  padding: 10px;
  font-size: 12px;
  align-items: center;
  margin-bottom: 8px;
  img {
    margin-right: 10px;
  }
`;
