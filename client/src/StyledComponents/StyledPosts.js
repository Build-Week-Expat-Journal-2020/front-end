import styled from 'styled-components'

export const StyledFeed = styled.div `

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
        color: white;
    }

    .loadFeed {
        background-color: #1E90FF;
        border: none;
        color: white;
        padding: 2%;
        border-radius: 0.3rem;
        margin: 1%;
        width: 25rem;

    }

    .postsContainer {
        display: flex;
        flex-wrap: wrap;
   }

`