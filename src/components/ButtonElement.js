// ButtonElement.js

import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01bf71' : 'defaultNonPrimaryBackgroundColor')}; // Green when primary
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ primary }) => (primary ? '#010606' : 'defaultNonPrimaryTextColor')}; // Black text when primary
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${({ primary }) => (primary ? '#fff' : 'hoverNonPrimaryBackgroundColor')}; // White background on hover when primary
        color: ${({ primary }) => (primary ? '#010606' : 'hoverNonPrimaryTextColor')}; // Black text on hover when primary
    }
`;
