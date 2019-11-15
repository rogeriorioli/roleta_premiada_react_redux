import React from 'react';
import { MdClose  } from 'react-icons/md'
import { Container } from './styles';

const Close = () => {
    return(
        <Container>
            <button>
                <MdClose size={24} color="#fff"/>
            </button>    
        </Container>
    )
}

export default Close