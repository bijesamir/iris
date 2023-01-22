interface TaskSearchProps {
	onNew:()=>void,
 }
interface TaskStateType {
    tab : string,
	aoi: string,
    elevation:string,
    satellite:string,
    customer:string,
    priority:string,
	
}

import React, { useEffect } from 'react';
import { Style } from "./Style";
import { useState } from "react";

export const TaskSearchForm: React.FC<TaskSearchProps> = ({onNew}) => {
	useEffect(() => {
		// Initial
	}, [])
	const [state, setState] = useState<TaskStateType>({
        tab : "select-aoi",
		aoi: "one",
        elevation :"",
        satellite:"",
        customer:"",
        priority:"",
	
	})
	const aoiList = [
		{ id: 1, value: "one", label: "One" },
		{ id: 2, value: "two", label: "Two" },
		{ id: 3, value: "three", label: "Three" }
	]
	const imagingModeList = [
		{ id: 1, value: "one", label: "One" },
		{ id: 2, value: "two", label: "Two" },
		{ id: 3, value: "three", label: "Three" }
	]
	const productFormatList = [
		{ id: 1, value: "one", label: "One" },
		{ id: 2, value: "two", label: "Two" },
		{ id: 3, value: "three", label: "Three" }
	]
    const satelliteList = [
        { id: 1, value: "one", label: "One" },
		{ id: 2, value: "two", label: "Two" },
		{ id: 3, value: "three", label: "Three" }
    ]
    const customerList = [
        { id: 1, value: "one", label: "One" },
		{ id: 2, value: "two", label: "Two" },
		{ id: 3, value: "three", label: "Three" }
    ]
	const offnadirList = [0, 5, 10, 15, 20];
	const directionList = ["Single", "Both"]
	
    const selectBoxHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setState({ ...state, [event.target.name]: event.target.value });
	}
    const textBoxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, [event.target.name]: event.target.value });
	}

	const searchArchive = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log({ ...state });
		console.log("React to HTML API");
	}

	return (
		<Style>
			<header>
				<h2>Tasking Search and Registration</h2>				
			</header>
			<div className='sectionInner'>
                <div className="topBlock">

                
                <div className="formrow">
                    <div className="groupBtn">
                        <button className={`${state?.tab === "select-aoi" ? "active" : ""}`}>Select AOI</button>
                        <button onClick={onNew}>New AOI</button>
                    </div>
                </div>
				<div className="formrow">
					<label>Select your AOI</label>
					<select value={state.aoi} onChange={selectBoxHandler} name="aoi">
						<option>Choose an option</option>
						{
							aoiList && aoiList.length > 0 && aoiList.map((item) => <option key={item.id} value={item.value}>{item.label}</option>)
						}

					</select>
				</div>
                <div className="formrow">
					<label>Elevation</label>
					<input type="text" onChange={textBoxHandler} placeholder='Placeholder text' value={state.elevation} name="elevation" />
				</div>
                <div className="formrow">
					<label>Satellite</label>
					<select value={state.satellite} onChange={selectBoxHandler} name="satellite">
						<option>Choose an option</option>
						{
							satelliteList && satelliteList.length > 0 && satelliteList.map((item) => <option key={item.id} value={item.value}>{item.label}</option>)
						}

					</select>
				</div>
                <div className="formrow">
					<label>Customer</label>
					<select value={state.customer} onChange={selectBoxHandler} name="customer">
						<option>Choose an option</option>
						{
							customerList && customerList.length > 0 && customerList.map((item) => <option key={item.id} value={item.value}>{item.label}</option>)
						}

					</select>
				</div>
                <div className="formrow">
					<label>Priority</label>
					<input type="text" onChange={textBoxHandler} placeholder='Placeholder text' value={state.priority} name="priority" />
				</div>
				</div>
                <div className="bottomBlock">
                <div className="formrow">
					<button className="submit" onClick={searchArchive} type='button'>
						Search
					</button>
				</div>
                </div>
				
			</div>

		</Style>
	);
};
