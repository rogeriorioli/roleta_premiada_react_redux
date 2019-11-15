import styled from 'styled-components';

import roleta from '../../assets/roleta.png';
export const Container = styled.div`
    width :  613px;
    height : 613px;
    background: url(${roleta});
    position : relative;
    transform:  rotate(${props =>  props.raio}deg) !important;
    transition: all 2s ;
    z-index : 7;
    .box-wrapper {
      width: 613px;
      }
      .box-discount {
        width: 305px;
        height : 305px;
        display : inline-block;

      }
`;