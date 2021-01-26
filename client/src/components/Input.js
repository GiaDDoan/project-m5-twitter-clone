import React from 'react';
import styled from 'styled-components';

const Input = ({ name, type, placeholder, handleChange, value}) => {
    return(
        <Wrapper>
            <input 
                className='textArea'
                name={name} type={type}
                placeholder={placeholder}
                onChange={(ev) => handleChange(ev.target.value, name)}
                value={value}
                />
        </Wrapper>
    );
    
}

const Wrapper = styled.div`
    width: 92%;

    .textArea{
            text-indent: 10px;
            padding-bottom: 130px;
            width: 100%;
            height: 100%;
            margin-left: 20px;
            font-size: 2em;
            border: none;
            outline: none;
            resize: none;
        }
`;

export default Input;
