import * as React from "react";
import {Style} from "./Style"
import {img} from "../../../assets/img/index";
interface CreateNewAOIProps {
    show:boolean,
    onStart:() => void,
    onUpload:() => void,
    onClose:()=>void,
}

export const CreateNewAOI: React.FC<CreateNewAOIProps> = ({show=false,onClose=()=>{},onUpload,onStart}) => {
    const uploadCSV = React.useRef(null);
    const uploadFileHandlder = (event: React.FormEvent<HTMLInputElement>): void => {
      // @ts-ignore
        onUpload(event);
      }
    const uploadTriggerHandler = (event: React.MouseEvent<HTMLButtonElement>):void =>{
       console.log(uploadCSV);
       // @ts-ignore
       uploadCSV.current.click();
    }
	return (
		<Style> 
                
            <div className={`createAOI ${show ? 'show' :'hide'}`}>   
			<div className="box">
                <div className="header">
                 
                    <div className="left">
                        <div className="title">Create a nwe AOI</div>
                        <div className="desc">Create an AOI by uploading your own shape file or by <br />drawing a polygon on the map</div>
                    </div>
                    <div className="right">
                        <button onClick={onClose}><img src={img.closeBtn} width="20" height="20" alt='Close' title='Close' /></button>
                    </div>
                </div>
                <div className="aoi">
                        <div className="drawArea">
                            <div className="areaTitle">
                                <div className="areaText">Draw area</div>
                                <img src={img.drawIcon} width="20" height="20" alt="Draw area" title="Draw area" />
                                </div>    
                            <div className="description">
                                You can draw your AOI directly
                                on the map with the polygon
                                drawing tool
                                </div>
                                <button className="primaryBtn" onClick={onStart}>Start drawing</button>
                            
                        </div>
                        <div className="uploadFile">
                        <div className="areaTitle">
                                <div className="areaText">Upload shape file</div>
                                <img src={img.uploadIcon} width="20" height="20" alt="Draw area" title="Draw area" />
                                </div>
                                        <div className="description">
                                You can upload a CSV-shape file which can then be added to your AOIs
                                </div>
                                <input className="hide" ref={uploadCSV} type="file" onChange={uploadFileHandlder} />
                                <button onClick={uploadTriggerHandler} >Upload file ...</button>
                          
                        </div>
                    </div>
            </div>
            </div>
		</Style>
	);
};
