import styled from "styled-components";

export const HeadersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 56px;
    bottom: 230px;
    width: min-content;

    #headersRow {
        display: flex;
        flex-direction: row;
        margin-bottom: 16px;
        width: max-content;
    }

    #headersColumn {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        margin-right: 14px;
    }

    h1 {
        text-align: left;
        font-family: 'Arya', sans-serif;
        font-size: 112px;
        line-height: 88px;
        color: #801DFF;
    }

    h2 {
        text-align: right;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 28px;
        line-height: 28px;
    }

    p {
        width: 100%;
        text-align: justify;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 28px;
        line-height: 32px;
    }
`;

