import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

const CustomIcon = styled(AiOutlineArrowLeft)`
    color: #01b6f5;
    width: 23px;
    height: 23px;
`;

export const GoBack = ({ url }) => {
    const history = useHistory();
    return (
        <div
            style={{ display: 'flex', flexDirection: 'row' }}
            onClick={() => {
                history.push(url);
            }}
        >
            <button style={{ marginLeft: '20px', marginTop: '13px', marginRight: '10px' }}>
                <CustomIcon />
            </button>
            <span
                style={{
                    marginTop: '15px',
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#000'
                }}
            >
                Wróć
            </span>
        </div>
    );
};
