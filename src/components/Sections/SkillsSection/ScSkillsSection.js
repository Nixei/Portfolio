import styled from "styled-components";

export const SkillsWrapper = styled.div`
    height: fit-content;
    min-height: 584px;
    position: absolute;
    top: 208px;
    left: 108px;
    right: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SkillsContainer = styled.div`
    min-height: 608px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({ justifyContent }) => justifyContent };

    div {
        display: flex;
        flex: row;
        justify-content: center;
        align-items: center;
    }
`;

export const SkillIconContainer = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80px;
`;

export const SkillDescriptionContainer = styled.div`
    width: 560px;
    height: 120px;
    padding: 10px 16px;
    text-align: justify;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.4rem;
    line-height: 2rem;
    margin: 16px;
    
    p > span {
        color: #801DFF;
    }
`;