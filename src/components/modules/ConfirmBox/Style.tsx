import styled from 'styled-components';
import { pxToRem } from '../../../lib';
export const Style = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    &.show{
        display:flex;
    }
    &.hide{
        display:none;
    }
    .layer{
        position:fixed;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.5);
        top:0px;
        left:0px;
        color:#ffffff;
    }
    .modalBox{
        width: 495px;
        display: flex;
        height: auto;
        background: #22282a;
        color: #ffffff;
        position: absolute;
        align-items: center;
        top: 36%;
      
        .box{
            
            .header{
                display:flex;
                padding:${pxToRem(16)} ${pxToRem(16)} 0 ${pxToRem(16)} ;
                justify-content:space-between;
                .left{
                    .title{
                        color:#ffffff;
                        font-size:${pxToRem(20)};
                        padding:${pxToRem(10)} 0;
                    }
                    .desc{
                        color:#ffffff;
                        padding:${pxToRem(10)} 0;
                        
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
                            width:${pxToRem(20)};
                            height:${pxToRem(20)};
                        }
                    }
                    
                }
                
               
               }
               .body{
                min-height:${pxToRem(60)};
                padding:  ${pxToRem(16)} ${pxToRem(16)} ${pxToRem(16)};
                 ul.optionList {
                    margin:0;
                    padding:0;
                    list-style:none;
                    color: var(---form-text-color);
                    li{
                        padding:${pxToRem(5)} 0;
                        span {
                            padding-left: ${pxToRem(10)};
                        }
                    }
                 }
                 .label{
                    color: var(---form-text-color);
                    font-size:${pxToRem(16)};
                    padding-bottom:${pxToRem(20)};
                 }
                 .options{
                    padding-bottom:${pxToRem(10)}
                 }
               }
               .footer{
                display:flex;
                button{
                    flex:1;
                    height: 48px;
                    background: var(---highlight-color);
                    border: none;
                    color: #fff;
                    text-align: left;
                    padding: 0px 0 0 15px;
                    width: 100%;
                    margin-top: 10px;
                    font-size: 14px;
                    background:#6b7178;
                    cursor:pointer;
                    &.ok{
                        background: var(---highlight-color);
                    }
                }
            }
        }
    }
`
