import styled from 'styled-components';
export const Container = styled.div`
  width: 347px;
  padding : 20px;
  background : #fff;
  border-radius : 20px;
  z-index: 6;
  position:relative;
  right: 30px;

  &:after {
    background : #fff;
    height : 308px;
    border-top-left-radius : 90px;
    border-bottom-left-radius : 90px;
    content: '';
    position : absolute;
    width: 50px;
    left: -50px;
    top: 20%;
    z-index: 8;
  }
  .box-text {
    border-radius : 20px;
    background-color: rgb(40, 10, 60);
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 452px;
    margin : auto;
    position: relative ;
    z-index : 8;
    display : flex;
    align-items : center;
    justify-content :center;
    padding : 10px;
    flex-wrap :wrap;
    p {
    font-family: novecento-sans-condensed, sans-serif;
    font-weight: 100;
    font-style: normal;
    text-transform : uppercase;
    font-size: 35px;
    line-height: 1.2;
    color : #fff;
    letter-spacing : 3px;  
      span {
        color : #f5b9ae;
      }
    }
    .text {
      font-size : 12px;
      text-transform : none;
      transition : all 0.5s;
      color : #fff;
      opacity : 0;
      margin-top : 40px;
      font-family : sans-serif;
      &-helper {
          color : #fff;
          margin-top : 50px;
          opacity : 1;
      }
      &-success {
        color : green;
        margin-top : 50px;
        opacity : 1;
      }
    } 
  }
    .cuppon{
        padding : 10px; 
        color : #FFF;
        font-family: sans-serif;
        text-align: center;
        text-transform : uppercase;
        margin: auto;
        width : 200px;
        border :  1px dashed transparent; 
        transition : border 0.5s;
        position : absolute;
        top:40%;
        opacity : 0;
        transition : all 0.5s;
        &.dashed {
           border : 1px dashed #fff ;
           position : absolute;
           top: 52%;
           z-index: 99999;
           cursor : copy;
           opacity : 1;
            transition : all 0.5s;
      }
    }
      .btn-cta {
          padding : 15px;
          text-align :center;
          margin: auto;
          width : 200px;
          border : 0;
          border-radius: 4px;
          background-color: rgb(64, 199, 129);
          color : #fff;
          cursor : pointer;
      }   
`;
