import styled from 'styled-components';
import { Button } from 'reactstrap';

const BaseButton = styled(Button)`
    border-radius: 50px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
    border: none;

    :active:focus {
        box-shadow: none;
        background-color: none;
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background: #FF6337;
    color: #fff;
    padding: 8px 25px;

    :hover {
        background: #ffffff;
        border: 1px solid #FF6337;
        color: #FF6337;
    }
    :focus {
        box-shadow: none;
    }
`;

export const LinkButton = styled(BaseButton)`
    background: none;
    color: #0000ff;

    :hover {
        background: none;
        color: blue;
        border-color: none;
    }
    :focus {
        background: none;
        color: blue;
        box-shadow: none;
        border: none;
    }
    :active {
        box-shadow: none;
        border: none;
        background: none;
        color: blue;
    }
`;