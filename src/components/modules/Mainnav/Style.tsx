import styled from 'styled-components';
export const Style = styled.div`
ul {
    margin:0px; padding:0px; list-style:none;
    li {
        margin:0px; padding:0px; list-style:none; border-left:solid 3px transparent;
        &:hover,&.active{
            background:var(---dark-color); border-color:var(---highlight-color)
        }
    }
}`
