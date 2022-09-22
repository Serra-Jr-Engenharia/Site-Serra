import styled  from "styled-components";

export const HeaderStyle = styled.div`
    .header-ul-li a{
        text-decoration: none;
        color: white;
        list-style: none;
        
    }

    .header-ul-li a:hover {
        color: lightgray;
    }

    .header {
        width: 100%;
        height: 12vh;
        min-height: 110px;
        background-color: #001830;
        display: flex;
    }

    .header ul{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .header ul li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        margin-left: 2rem;  
        text-decoration: none;
        list-style: none;
    
    }

    .header .logo{ 
        margin-left: 10%;
        margin-top: 1%;
    }

    .header img{ 
        width: 12rem;
    }

    .header-ul-container{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        margin-right: 10%;
        margin-top: 0%;
    }

    .Arrow {
        width: 1.4rem;
        height: 1.4rem;
        margin-top: 0.5rem;
    } 
`;
 