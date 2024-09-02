import styled from "styled-components";


export const Button = styled.button`
border: ${(props) =>
        props.theme === 'primary' ? 'none' : 'solid  1px #fff'} ;

background: ${(props) =>
        props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%,#ff6378 100%)' : 'transparent'
    };
font-size: 16px;
color: #fff;
padding: 16px 32px;
width: fit-content;
cursor: pointer;
border-radius: 30px;

&:hover{ 
    ${(props) => props.theme === 'primary' ? 'opacity: 0.8' : 'background: #fff;color:#181f36'
    } ;

}
&: active{
transform: scale(0.9);
}

`;