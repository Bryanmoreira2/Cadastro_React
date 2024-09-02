import styled from "styled-components";

export const Container = styled.div`
background: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
`;

export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  margin-top: 30px;`;

export const ConteinerUsers = styled.div`
display: grid;
grid-template-columns: 1fr  1fr;
gap:20px;
margin: 40px 0 ;


@media:( max-width:750px ;){
    grid-template-columns: 1fr;
}
    


`;

export const CardUsers = styled.div`
 background-color: #252d48;
 padding: 16px;
 border-radius: 32px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap:20px;
 max-width: 380px;
 ;
 h3{
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize;

 }
 p{
    color:#fff;
    font-size: 12px;
    font-weight: 200;
 }
`;

export const TrashIcon = styled.img`
cursor: pointer;
padding-left: 30px;
&:hover{
    transform: scale(1.2);
    filter: invert(43%) sepia(90%) saturate(4992%) hue-rotate(1deg) brightness(104%) contrast(101%);

}
&:active{
    opacity: 0.5;
}`;

export const AvatarUser = styled.img`
height:80px`;
