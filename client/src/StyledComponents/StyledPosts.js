import styled from 'styled-components'

export const StyledFeed = styled.div `

    form {
        display: flex;
        flex-direction: column;
        margin: 2%;
        width: 40%;
    }

    input {
        padding: 3%;
        margin: 1%;
    }

    textarea {
        padding: 15%;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
        color: white;
    }

    button {
        background-color: #1E90FF;
        border: none;
        color: white;
        padding: 5%;
        border-radius: 0.3rem;
        margin: 1%;

    }

    .postsContainer {
        display: flex;
        flex-wrap: wrap;
   }

`