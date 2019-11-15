import styled from 'styled-components';

export const Container = styled.div`

    position : absolute;
    top : 0;
    right : 0;
    button {
        background :  rgb(40,10,60);
        border : 2px solid #fff;
        width : 48px;
        height : 48px;
        text-align: center;
        line-height : 48%;
        border-radius : 50%;
        cursor: pointer;
        &:focus {
            outline : none;
        }
    }
  
`;
