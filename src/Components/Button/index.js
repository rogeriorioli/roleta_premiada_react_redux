
import React from 'react';
import { connect } from 'react-redux'
import { Container } from './styles';

function sendRaio(discount, cuppon, clase, frase) {
  return {
    type: 'SEND_RAIO',
    discount,
    cuppon,
    clase,
    frase 
  }
}
const randomOfDiscounts = Math.random();
const Discounts = (discounts) => discounts[Math.floor(randomOfDiscounts * discounts.length)]

const Button = ({discounts, dispatch }) => (

  <Container>
      {
      <button 
              key={Discounts(discounts).id}
              onClick={() => dispatch(
                             sendRaio(Discounts(discounts).raio , 
                                      Discounts(discounts).cuppon,
                                      Discounts(discounts).clase, 
                                      Discounts(discounts).frase ))}>
                 Roda a roleta!
      </button>
    }
  </Container>

)
export default connect(state => ({ 
      discounts: state.discounts ,
      cuppon : state.cuppon,
      clase : state.clase,
      frase : state.frase
    }))(Button);


