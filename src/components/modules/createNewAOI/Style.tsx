import styled from 'styled-components';
import { pxToem } from '../../../lib';
export const Style = styled.div`
   
    .createAOI{
        position:fixed;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.9);
        top:0px;
        left:0px;
        color:#ffffff;
        &.show{
            display:flex;
        }
        &.hide{
            display:none;
        }
    }
    .hide{
        display:none;
    }
   .box{
    width:495px;
    display:block;
    height:auto;
    padding:${pxToem(16)} ;
    background:#22282a;

    .header{
        display:flex;
        justify-content:space-between;
        .left{
            .title{
                color:#ffffff;
                font-size:${pxToem(25)};
                padding:${pxToem(10)} 0;
            }
            .desc{
                color:#ffffff;
                padding:${pxToem(10)} 0;
                
            }
        }
        .right{
            button{
                border:none;
                background:none;
                padding:0px;
                margin:0px;
                cursor:pointer;
                img{
                    width:${pxToem(20)};
                    height:${pxToem(20)};
                }
            }
            
        }
       
       }
       
        .aoi{
            padding:${pxToem(40)} 0 0 0;
            display:flex;
            justify-content:space-between;
            .areaText{
                font-size:${pxToem(20)};               
                display:flex;               
            }
            .areaTitle{
                display:flex;
                font-weight:700;
            }
            .description{
                padding:${pxToem(20)} 0;
                color:#9da3a6;
            }
            .uploadFile{
                padding-right:${pxToem(16)};
            }
            .drawArea,.uploadFile{
                width:210px;
                button {
                    cursor:pointer;
                    height: 48px;                    
                    border: none;
                    color: #fff;
                    text-align: left;
                    padding: 0px 0 0 15px;
                    width: 170px;
                    margin-top: 10px;
                    font-size: 14px;
                    color:#ffffff;
                    background:#6b7178;
                    &.primaryBtn{
                        background: var(---highlight-color);
                    }   color:#ffffff;
                }
                
            }
        }
       

   
   }
`
