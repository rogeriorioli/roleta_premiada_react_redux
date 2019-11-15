import { createStore } from 'redux';

const roll = (360 * 6);

  const INITIAL_STATE = {
        activeState: 44, 
        cuppon: '',
        clase:  'cuppon',
        frase : `GIRE A ROLETA
        PARA GANHAR UM PRESENTE ESPECIAL E FICAR AINDA MAIS BELA!`,
        discounts : [
          {
            id : Math.random(),
            value : '10% de desconto',
            cuppon : '15saudavel',
            raio: roll + 360,
            clase: 'dashed',
            frase: `que legal você ganhou 10% de desconto`
          },
          {
            id : Math.random(),
            value : '7% de desconto',
            cuppon : '30saudavel',
            raio :  roll + 270,
            clase: 'dashed',
            frase: `que legal você ganhou 7% de desconto`

          },
          {
            id : Math.random(),
            value : '2 pares de absorvente de seios ',
            cuppon : '60saudavel',
            raio :  roll + 90,
            clase: 'dashed',
            frase: `que legal você ganhou 2 pares de absorvente de seios `
          },
          {
            id : Math.random(),
            value : '5% de desconto',
            cuppon : '18saudavel',
            raio : roll + 180,
            clase: 'dashed',
            frase: `que legal você ganhou 5% de desconto`
          }
        ]
    }
   
function reducer(state = INITIAL_STATE, action) {
  if(action.type === 'SEND_RAIO') {
    return { 
      ...state ,
      activeState : action.discount, 
      cuppon : action.cuppon, 
      clase : action.clase,
      frase : action.frase
     }
  }
  return state
}

const store = createStore(reducer);


export default store;