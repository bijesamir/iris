import {pxToem} from "../lib";
export const floatingTable =`
display: block;
position: absolute;
bottom: 0px;
height: auto;
width:calc(100vw - 388px);
background:#22282a;
color:var(---table-text-color);
padding-top : ${pxToem(15)};
.topbar{

    display:flex;
    justify-content:space-between;
    .left{

    }
    .right{
        .closeBtn {
            border:none;
            background:none;
            padding:0 ${pxToem(16)} 0 0;
            margin:0;

            img{
                width: ${pxToem(40)};
                height: ${pxToem(40)};
            }
        }
    }
}
   h2{
    font-size:${pxToem(22)};
    padding:${pxToem(10)} ${pxToem(16)};
    font-weight:normal;
    color:#f2f4f8;
    margin:0;
   }
   .headerDesc{
    font-size:1em;
    padding:0 0 ${pxToem(20)} ${pxToem(18)};
   }
   .tableControl{
    background:#0f62fe;
    height:${pxToem(50)};
    display:flex;
    justify-content: space-between;
    align-item:center;
    button{
        color:#ffffff;
        font-size:${pxToem(14)};
        background:none;
        border:none;
        
    }
    .right{
        display:flex;
        padding-right:${pxToem(16)}
    }
    
   }
   .tfoot{
    border-top:solid ${pxToem(1)} #293032;
    display:flex;
    height:${pxToem(40)};
    justify-content:space-between;
    .right{
        display:flex;
        .pageNo{
            align-items: center;
            padding: 0 ${pxToem(10)};
            justify-content: center;
            display:flex;
        }
        button{
            background: none;
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            border-left:solid ${pxToem(1)} #293032;
        }
    }
   }
` 