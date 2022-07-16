import styled from 'styled-components';

export const SectionFrame = styled.section`
    padding: 16px;
    height: 100vh;
`;

export const SectionContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const SectionTitleContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 0;
    position: absolute;
    top: ${({ top }) => top };
    left: ${({ left }) => left };
    right: ${({ right }) => right };

    h1 {
        text-align: end;
        font-size: 96px;
        line-height: 72px;
        font-family: 'Roboto Mono', monospace;
        font-weight: normal;
        letter-spacing: -.2rem;
    }
`;