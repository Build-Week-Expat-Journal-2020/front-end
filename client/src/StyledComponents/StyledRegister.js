import styled from 'styled-components'

export const StyledRegister = styled.div`

    p, h3 {
        color: white;
    }

    .container {
        background-color: black;
        height: 100vh;
        color: white;
    }

    .addUserForm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
        color: white;
    }

    .addUserForm p {
        width: 25rem;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 2%;
        width: 25rem;
    }

    input, button {
        padding: 3%;
        margin: 1%;
    }

    button {
        background-color: #1E90FF;
        border: none;
        color: white;
        padding: 4%;
        border-radius: 0.3rem;
    }

`