import styled from 'styled-components'

export const Heading=styled.div`
display: flex;
justify-content:space-between;
align-items:center;
width:100%;
background-color: white;
box-shadow: 0px 3px #888888;
opacity: 20%;

.logo{
    color:black;
    margin-left:4%;
}
.logo:hover{
color: silver;
transition: all 0.4s ease;
}

.icons{
    display:flex;
    width: 20%;
    justify-content:space-around;
}
.icons div:hover{
    color:silver;
    transition: all 0.4s ease;
}
.fa:hover{
    color:silver;
    transition: all 0.4s ease; 
}

span{
    font-size: 1.5em;
    font-weight: 600;
}

@media(max-width:550px){
    span{
        font-size: 1.2em;
    }
    .logo{
        font-size: 0.7em;
    }
    
}
@media(max-width:760px){
   .icons{
       width: 30%;
   }
   span{

   }
    }
`