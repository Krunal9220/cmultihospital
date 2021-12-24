import styled from 'styled-components';
import { Button } from 'reactstrap';

const BaseButton = styled(Button)`
    border-radius: 50px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
    border: none;
`;

export const PrimaryButton = styled(BaseButton)`
    background: #FF6337;
    color: #fff;
    padding: 8px 25px;
`;

export const LinkButton = styled(BaseButton)`
    background: none;
    color: #0000ff;
`;