import styled from 'styled-components';

import bg from '../../assets/bg_main.png';

export const Container = styled.div`
  position : relative;
  width : 930px;
  height : 630px;
  display : flex;
  justify-content : center;
  align-items : center;
  background : url(${bg});
  background-size: contain;
  background-repeat : no-repeat;
  background-position-y: 15px;
  background-position-x: -1px;
`;
