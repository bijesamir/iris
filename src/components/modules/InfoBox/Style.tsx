import styled from 'styled-components';
import { pxToRem } from '../../../lib';
export const Style = styled.div`
    min-width:${pxToRem(325)};
    display:flex; 
    background:#202928;
    position:fixed;
    right:${pxToRem(30)};
    top:${pxToRem(30)};
    justify-content:space-between;
    .inner{        
        justify-content:space-between;
        display:flex;
        &.success{
            border-left:solid ${pxToRem(2)} var(---success-color);
            border-top:solid ${pxToRem(1)} #25372e;
            border-right:solid ${pxToRem(1)} #25372e;
            border-bottom:solid ${pxToRem(1)} #25372e;
        }
        &.alert{
            border-left:solid ${pxToRem(2)} var(---alert-color);
            border-top:solid ${pxToRem(1)} #5b212f;
            border-right:solid ${pxToRem(1)} #5b212f;
            border-bottom:solid ${pxToRem(1)} #5b212f;
        }
    }
    .btnBlock{
        button{
            
            font-size: ${pxToRem(16)};
            color:var(---highlight-color);
            cursor:pointer;
            margin:${pxToRem(5)} 0 0 0;
            background:none;
            border:none;
            padding:${pxToRem(10)};

        }
        
    }
    .cont{
        padding:${pxToRem(16)} ${pxToRem(30)} ${pxToRem(8)} 0;
        max-width:${pxToRem(200)}
    }
    h4{
        font-size:${pxToRem(16)};
        font-weight:600;
        color:#ffffff;
        padding: 0;
        margin:0;
    }
    p{
        color:var(---form-text-color);
        padding:${pxToRem(10)} 0;
        margin:0;
        line-height:${pxToRem(20)};
    }
    .left{
       padding:${pxToRem(16)} ${pxToRem(14)};
    }
    .right{
        padding:${pxToRem(16)} ${pxToRem(14)};
        .closeBtn{
            padding:0;
            margin:0;
            background:transparent;
            border:none;
            cursor:pointer;
            width:10px;
                height:10px;
            img{
                width:10px;
                height:10px;
            }
        }
    }
`
