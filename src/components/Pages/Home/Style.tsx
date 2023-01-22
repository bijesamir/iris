import styled from 'styled-components';
export const Style = styled.div`
    .site {display:flex; height: 100%; height:100vh; overflow: hidden;}
    .firstCol {
        background:var(---darkest-color);
        border-right:solid 1px var(---dark-color);
        flex:0 1 auto;
        max-width: 57px;
    }
    .secondCol{
        background:var(---second-col-bg); 
        min-width:330px;
        flex:0 1 auto;
        max-width:330px;
    }
    .thirdCol{
        flex:1;
        
        .mapHolder{
            height:100%;
        }
    }
`