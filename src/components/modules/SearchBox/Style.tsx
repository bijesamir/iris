import styled from 'styled-components';
import { pxToRem } from '../../../lib';
export const Style = styled.div`
        width: 100%;
        background: #343a3f;
        height: 100%;
        display: flex;
        align-items: center;
        position:relative;
        display:flex;
        overflow:hidden;
        input[type=text]{
            height:100%;
            background: #343a3f;
            border:none;
            color:var(---table-text-color);
          
            border:solid 1px #343a3f;
            border-radius:0px;
            padding:0px 0 0 35px;
            margin:0px;
            outline:none;
            &:focus,&:focus-visible{
                border:solid 1px #343a3f;
                border-radius:0px;
                outline:none;
            }
        }
        svg.searchIcon{
            fill: #ffffff;
            position: absolute;
            left: 15px;
            top: 50%;
            margin-top: -8px;
        }
        svg.closeIcon{
            fill: #ffffff;
            
        }
        button{
            color: #ffffff;
            font-size: 0.875em;
            background: #343a3f;
            border: none;
            background: red;
            width: 38px;
            margin: 0px;
            padding: 0px;
            cursor:pointer;

            
        }
    }
`
