import styled from 'styled-components'

export const StyledPost = styled.div `

    .container {
        display: flex;
        flex-wrap: wrap;
    }

    .usersPosts {
      display: flex;
      flex-wrap: wrap;
    }

    .story {
        padding: 2rem;
        padding-left: 1rem;
        color: black;
    }
    .bigContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5%;
        color: white;
    }
    .postContainer {
      width: 55%;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .userName {
      background-color: white;
      padding: 2%;
      color: black;
    }

    Link, a {
      text-decoration: none;
    }

    .postImg {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 2%;
    }

    .postImg img {
      height: 60vh;
      width: 100%;
    }

    .postedBy {
        color: white;
        margin: 5%;
    }

    @media (max-width: 700px) {
        .post-container {
            width: 100%;
            border-radius: 0;
        }
    }

`