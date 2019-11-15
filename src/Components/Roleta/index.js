import React from 'react';

import { Container } from './styles';

import { connect } from 'react-redux'

import Pointer from '../Pointer'
const Roleta = ({discounts, activeState}) => 
(
  <> 
  <Pointer/>  
   <Container raio={activeState} >
     <div className="box-wrapper" >
       {discounts.map(box => 
           <div className="box-discount" 
                id={box.id} 
                key={box.id} > 
                 <input type="hidden"
                        value={box.cuppon} />
           </div> 
           ) 
       }
     </div>
   </Container>
   </>
);

export default connect(state => ({ discounts: state.discounts, activeState:state.activeState}))(Roleta);
