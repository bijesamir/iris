import React, { useState } from "react";
import { img } from "../../../assets/img";
import { Style } from "./Style"

interface ConfirmBoxProps {
    onCancel: () => void,
    onOK: () => void,
    title: string,
    cancelTxt?: string;
    okTxt?: string;
    message?: string;
}

export const ConfirmBox: React.FC<ConfirmBoxProps> = ({ onCancel, title, onOK, message, cancelTxt, okTxt }) => {
  

    return (
        <Style>
            <div className="layer" onClick={onCancel} ></div>
            <div className="modalBox" >
                <div className="box">
                    <div className="header">
                        <div className="left">
                            <div className="title">{title}</div>
                        </div>
                        <div className="right">
                            <button onClick={onCancel}><img src={img.closeBtn} width="20" height="20" alt='Close' title='Close' /></button>
                        </div>
                    </div>
                    {
                        message && <div className="body">
                            {message}
                        </div>
                    }

                    <div className="footer">
                        <button className="cancel" onClick={onCancel}>{cancelTxt ? cancelTxt : 'Cancel'}</button>
                        <button className="ok" onClick={onOK}>{okTxt ? okTxt : "OK"}</button>
                    </div>
                </div>
            </div>
        </Style>
    );
};
