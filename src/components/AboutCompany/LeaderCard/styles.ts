import styled from "styled-components";

export const CardLeader = styled.div`
    width: calc(100vw*0.6/4);
    height: 330px;
    @media (max-width: 768px){
        height: auto;
        width: 100%;
    }
`
export const NameTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #272727;
    text-align: center;
`

export const NameSubitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: #272727;
    text-align: center;
`