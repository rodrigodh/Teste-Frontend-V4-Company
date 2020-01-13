import styled from 'styled-components';
import posed from 'react-pose';

const BackdropProps = posed.div({
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

const ContentProps = posed.div({
  init: {
    opacity: 0,
    y: -20,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
});

export const Backdrop = styled(BackdropProps)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export const Content = styled(ContentProps)`
  position: relative;
  max-width: 700px;
  width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 10px 10px 50px;
  overflow: auto;
  z-index: 4;
`;

export const Form = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  padding: 20px 25px 50px;
  border-radius: 8px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-top: 10px;
  font-size: 24px;
  text-align: left;
  letter-spacing: 0.52px;
  font-family: Questrial, sans-serif;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 15px;
  text-align: left;
  letter-spacing: 0.52px;
  font-family: Questrial, sans-serif;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 80%;
  height: 42px;
  background: #F5F4F6 0% 0% no-repeat padding-box;
  border: 1px solid #EBEAED;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 18px;
  font-family: Questrial, sans-serif
`;

export const Button = styled.button`
  padding: 10px 10px 10px;
  border: 0;
  border-radius: 5px;
  width: 100px;
  height: 42px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  cursor: pointer;
  text-align: center;
`;

export const DarkButton = styled.button`
  padding: 10px 10px 10px;
  border: 0;
  border-radius: 5px;
  width: 100px;
  height: 42px;
  font-size: 16px;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  cursor: pointer;
  text-align: center;
  background: rgba(1,1,1, 0.2);
  margin-right: 0.5rem;
`;

export const Inputs = styled.div`
  padding: 10px 0px 20px;
  display: flex;
  flex-direction: column
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  
`;

