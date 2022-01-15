import styled from 'styled-components';

export const Container = styled.header`
background: var(--blueB);

`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 11rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


    button {
        background: var(--blue-light);
        color: white;

        font-size: 1rem;
        padding: 0 2rem;
        height: 3rem;
        border-radius: 0.25rem;
        border: none;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(90%);
        }
    }

`