import React from 'react';

import { Provider } from 'react-redux'
import { Container } from './styles';
import Roleta from '../Roleta';
import Boxtext from '../Box_text'
import Mother from '../Mother'
import Ball from '../Ball'
import Letter from '../Letter'
import Duck from '../Duck'
import store from '../../store'
import Animate ,{FadeIn , Pulse} from 'animate-css-styled-components'
import Close from '../Close';
 
export default function Main() {
  return (
    <Animate 
      Animation={[FadeIn, Pulse]}
      duration={["0", "1.5s"]}
      delay={["0.5s", "0.5s"]} 
    >
     <Container>
       <Close/>
       <Duck />
       <Letter />
       <Ball />
       <Provider store={store}>
        <Roleta/>
        <Boxtext />
       </Provider>
      <Mother/>
     </Container> 
    </Animate>
  );
}