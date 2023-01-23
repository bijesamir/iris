import React,{useState} from "react";
import { img } from "../../../assets/img";
import { Style } from "./Style"
interface objArr {
    id: number;
    value: string;
    label: string;
  }
interface ModalBoxProps {
    onClose:()=>void,
    onOK:()=>void,
    title:string,
    options:objArr[]
 }

export const ProductOption: React.FC<ModalBoxProps> = ({onClose,title,onOK,options}) => {
    const [selected,setSelected] = useState([]);
    const chooseHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.checked);
        if(e.target.checked){
            let cloneSelected = [...selected];
            let obj = options.find(item=>item.value === e.target.value);
            // @ts-ignore
            cloneSelected.push(obj);
            setSelected(cloneSelected);
        }else{
            let cloneSelected = [...selected];
            // @ts-ignore
            cloneSelected = cloneSelected.filter(item=>item.value !== e.target.value);
            // @ts-ignore
            setSelected(cloneSelected);

        }
    }
    const okHandler = ()=>{
        // @ts-ignore
        onOK(selected);
    }
    return (
        <Style>
            <div className="modalBox">
                <div className="box">
                    <div className="header">
                    <div className="left">
                            <div className="title">{title}</div>
                             </div>
                        <div className="right">
                            <button onClick={onClose}><img src={img.closeBtn} width="20" height="20" alt='Close' title='Close' /></button>
                        </div>
                    </div>
                    <div className="body">
                   <div className="label">Product option</div> 
                        <div className="options">Select product options</div>
                        {
                            options && options.length>0 && <ul className="optionList">
                            {
                                options.map(item=><li key={item.id}>
                                    <input type="checkbox" onChange={chooseHandler} value={item.value} name="productoption" id={item.value}  /> 
                                    <label htmlFor={item.value}><span>{item.label}</span></label> 
                                    </li>)
                            }
                            
                            
                        </ul>
                        }
                        
                    </div>
                    <div className="footer">
                        <button className="cancel" onClick={onClose}>Cancel</button>
                        <button className="ok" onClick={okHandler}>Preo-order tasking</button>
                    </div>
                </div>
            </div>
        </Style>
    );
};
