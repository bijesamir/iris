
import styled from 'styled-components';
import {floatingTable} from "../../../../styles/floatingTable";
import { pxToRem } from '../../../../lib';
export const Style = styled.div`
    ${floatingTable}
    .table {
        overflow:auto;
        .throw{
            display:grid;
            grid-template-columns: 50px 150px 150px 11% 10% 10% 10% 10% 10% auto;
            font-size: ${pxToRem(16)};
            font-weight:700;
            .tcol{
                display:flex;
                padding:0 ${pxToRem(10)};
                text-align:center;
                height:${pxToRem(50)};
                justify-content:center;
                align-items:center;
                .sortCol{
                    display:flex;
                    justify-content: space-between;
                }
                &.align-left{
                    text-align:left;
                }
                &.selected{
                    background:#343a3f;
                }
            }
        }
        .trow{
            display:grid;
            border-top:solid 1px #293032;
            grid-template-columns: 50px 150px 150px 11% 10% 10% 10% 10% 10% auto;
            font-size: ${pxToRem(16)};
            font-weight:300;
            &:hover,&.selected{
                .tcol{
                    background:#343a3f;
                }
            }
            .tcol{
                display:flex;
                padding:0 ${pxToRem(10)};
                text-align:center;
                height:${pxToRem(50)};
                justify-content:center;
                align-items:center;
                .checkData{
                    display:flex;
                    text-align:left;
                    justify-content:start;
                    input{
                        margin:0 ${pxToRem(10)} 0 0;
                    }

                }
                .badge{
                    height:22px;
                    width:22px;
                    
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border-radius:22px;
                    background:#111111;
                    color:#ffffff;
                }
            }
        }
    }
`
