import * as React from "react";
import { img } from "../../../assets/img";
import { Style } from "./Style"

interface InfoBoxProps {
    title: string,
    description: string,
    mode?:"alert" | "success",
    btn?:"string",
    onBtnClick : ()=>void,
    onClose ?: ()=>void
}

export const InfoBox: React.FC<InfoBoxProps> = ({ title, description,mode,btn,onBtnClick,onClose }) => {
    React.useEffect(()=>{
        setTimeout(()=>{
            onClose();
        },5000)
    },[])
    return (
        <Style>
            <div className={`inner ${mode ? mode : 'success'}`}>
            <div className="left">
                <img src={img.checkIcon} width="20" height="20" alt="" title="" />
            </div>
            <div className="cont">
                {title && <h4>{title}</h4>}
                {description && <p>
                    {description}
                </p>}

            </div>
            <div className="btnBlock"><button onClick={onBtnClick}>{btn}</button></div>
            
            <div className="right">
                    <button className="closeBtn" onClick={onClose}> <img src={img.closeBtn} width="10" height="10" alt="" title="" /></button>
            </div>
            </div>
        </Style>
    );
};
