import styled from 'styled-components'

export const StyledLogin = styled.div`

    p, h3 {
        color: white;
    }

    .span {
        display: flex;
        width: 25rem;
    }

    .signUpLink {
        text-decoration: none;
        color: #1E90FF;
        display: inline;
    }

    .container {
        background-color: black;
        height: 100vh;
        color: white;
    }

    .loginForm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
        color: white;
    }

    .loginForm p {
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