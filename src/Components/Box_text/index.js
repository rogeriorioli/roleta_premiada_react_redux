import React from 'react';
import { connect } from 'react-redux'
import useClipboard from "react-use-clipboard";
import { Container } from './styles';
import Button from '../Button';

const Boxtext = (activeState) => {
  const [isCopied, setCopied] = useClipboard(activeState.cuppon);

  const utm =  {
      source : 'ShopBack_Roleta',
      medium : `ShopBack_${activeState.cuppon}`
  }  

  const handleUtm = () => {
        const url = `${window.top.location}?&utm_source=${utm.source}&utm_medium=${utm.medium}`
        return  window.top.location.href = url
  }
  return (
    <>
    <Container>
      <div className="box-text">
        <p> 
          {activeState.frase }
        </p>
           <span className={`cuppon ${activeState.clase}`} onClick={setCopied}>
              {activeState.cuppon}
          </span> 
          {activeState.cuppon ?
            isCopied ?  <p className="text text-success">Copiado Com Sucesso </p> :
                <p className="text text-helper">clique no cuppon para copiar </p>
             : ''
            }
             {
                !isCopied ? <Button/> : <button className="btn-cta" onClick={handleUtm}> Contiunar no site</button> 
                
             }
      </div>
    </Container>
    </>
  );
}

export default connect(state => ({cuppon: state.cuppon, clase: state.clase, frase : state.frase }))(Boxtext);
