export const formStyle = `padding: 0 15px;
color: var(---form-text-color);
height: calc(100vh);
overflow:auto;
&::-webkit-scrollbar-track {
background-color: transparent;		
border-radius: 0px;
display:flex;
flex-direction:column;
}

&::-webkit-scrollbar-thumb {
border: 1px solid transparent;
border-radius: 0px;
background-color: var(---dark-color);
background-clip: content-box;
}

&::-webkit-scrollbar {
width: 10px;
}
header{
h2 {
    font-size: 1.250em;
    line-height:1.563em;
    font-weight: normal;
    padding: 20px 0;
    margin: 0px;
    text-align: left;
  }
}
.sectionInner{
    display:flex;
    flex-direction:column;
    .topBlock{
        flex:1;
    }
    .bottomBlock{
        flex:0 1 auto;
    }
      h3 {
        font-size: 14px;
        font-weight: 600;
        padding: 16px 0 0 0;
        margin: 0px;
        text-align: left;
      }
      .formrow {
        display: flex;
        flex-direction: column;
        padding-top: 5px;
        select,
        input[type='text'],input[type='date']  {
          height: 39px;
          background: #21272a;
          color: #ffffff;
          border: none;
          border-bottom: solid 1px #696f77;
          padding-left: 15px;
        }
      .groupBtn{
        display:flex;
        button{
            flex:1;
            border-radius:3px;
            height:2.5em;
            line-height:2.5em;
            padding:0em;
            margin:0em;
            border:none;
            background:#21272a;
            color:#ffffff;
            &.active{
                background:#ffffff;
                color:var(---darkest-color);
            }
            &:first-child{
                border-radius : 0.188em 0 0 0.188em;
            }
            &:last-child{
                border-radius : 0 0.188em 0.188em 0;
            }
        }
      }
        label,
        .label {
          margin: 0px;
          padding: 10px 0 10px 0;
          font-weight: normal;
          text-align: left;
        }
      }
      .calendar {
        position: relative;
        input {
          width: 100%;
        }
      }
      .calendaricon {
        position: absolute;
        right: 5px;
        top: 15px;
      }
      .midDivider {
        display: flex;
        min-width: 23px;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
      }
      .multiform {
        display: flex;
      }
      .formEle {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-top: 5px;
        text-align: left;
        &.endDate {
          margin-left: 7px;
        }
      }
      .startDateFormEle{
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-top: 5px;
        text-align: left;
        overflow: hidden;
      }
      .endDateFormEle{
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-top: 5px;
        text-align: left;
        overflow: hidden;
        margin-left:2px;
      }
      .startDate {
        position: relative;
        border:none;
        &:focus-visible,&:focus{
          
          outline:none;
        }
      }
      .endDate {
        position: relative;
        border:none;
        &:focus-visible,&:focus{
        
          outline:none;
        }
      }
      .submit {
        height: 48px;
        background: var(---highlight-color);
        border: none;
        color: #fff;
        text-align: left;
        padding: 0px 0 0 15px;
        width: 100%;
        margin-top: 10px;
        font-size: 14px;
      }
}
.selectbox{
border:none;
height:40px;
.css-13cymwt-control{
    height:40px;
    .css-1fdsijx-ValueContainer, css-1fdsijx-ValueContainer{
        height:40px;
        .css-qbdosj-Input{
            height:30px;
        }
    }
}
}
`