interface ArchiveSearchProps { }
interface ArchiveStateType {
	aoi: string,
	start_date: string,
	end_date: string,
	imaging_mode: string,
	product_format: string,
	offnadir_from: number,
	offnadir_to: number,
	looking_direction: string,
	flight_direction: string
}

import React, { useEffect } from 'react';
import { Style } from "./Style";
import { useState } from "react";

export const ArchiveSearch: React.FC<ArchiveSearchProps> = () => {
	useEffect(() => {
		// Initial
	}, [])
	const [state, setState] = useState<ArchiveStateType>({
		aoi: "one",
		start_date: "",
		end_date: "",
		imaging_mode: "two",
		product_format: "three",
		offnadir_from: 15,
		offnadir_to: 20,
		looking_direction: "both",
		flight_direction: "single"
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
	const offnadirList = [0, 5, 10, 15, 20];
	const directionList = ["Single", "Both"]
	const aoiHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setState({ ...state, "aoi": event.target.value });
	}
	const offnadirFromHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setState({ ...state, "offnadir_from": parseInt(event.target.value) });
	}
	const offnadirToHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setState({ ...state, "offnadir_to": parseInt(event.target.value) });
	}
	const lookingDirectionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setState({ ...state, "looking_direction": event.target.value });
	}
	const flightDirectionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setState({ ...state, "flight_direction": event.target.value });
	}
	const productFormatHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setState({ ...state, "product_format": event.target.value });
	}
	const imagingModeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setState({ ...state, "imaging_mode": event.target.value });
	}
	const startDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, "start_date": event.target.value });
	}
	const endDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, "end_date": event.target.value });
	}
	const searchArchive = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log({ ...state });
		console.log("React to HTML API");
	}

	return (
		<Style>
			<header>
				<h2>Archive Search</h2>				
			</header>
			<div className='sectionInner'>
				<div className="formrow">
					<label>Select your AOI</label>
					<select value={state.aoi} onChange={aoiHandler} name="aoi">
						<option>Choose an option</option>
						{
							aoiList && aoiList.length > 0 && aoiList.map((item) => <option key={item.id} value={item.value}>{item.label}</option>)
						}

					</select>
				</div>
				<h3>Aquisition date</h3>
				<div className="formrow">
					<div className="multiform">
						<div className="startDateFormEle">
							<label>Start date</label>
							<div className="calendar">
								<input type='date' name="start_date" onChange={startDateHandler} className="startDate" value={state.start_date} />
								<img
									src='assets/img/calendar.svg'
									className="calendaricon"
									width='13'
									height='13'
								/>
							</div>
						</div>
						<div className="endDateFormEle">
							<label>End date</label>
							<div className="calendar">
								<input type='date' name="end_date" onChange={endDateHandler} className="endDate" value={state.end_date} />
								<img
									src='assets/img/calendar.svg'
									className="calendaricon"
									width='13'
									height='13'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="formrow">
					<label>Imaging mode</label>
					<select className='formControl' onChange={imagingModeHandler} value={state.imaging_mode}>
						<option>Choose an option</option>
						{
							imagingModeList && imagingModeList.length > 0 && imagingModeList.map((item) => <option key={item.id} value={item.value}>{item.label}</option>)
						}
					</select>
				</div>
				<div className="formrow">
					<label>Product format</label>
					<select onChange={productFormatHandler} value={state.product_format} className='formControl'>
						<option>Choose an option</option>
						{
							productFormatList && productFormatList.length > 0 && productFormatList.map((item) => <option key={item.id} value={item.value}>{item.label}</option>)
						}
					</select>
				</div>
				<div className="formrow">
					<h3 className='label'>Offnadir angle</h3>
					<div className="multiform">
						<div className="formEle">
							<select className='formControl' onChange={offnadirFromHandler} value={state.offnadir_from}>
								{
									offnadirList && offnadirList.length > 0 && offnadirList.map((item) => <option key={item} value={item}>{item}°</option>)
								}
							</select>
						</div>
						<div className="midDivider">-</div>
						<div className="formEle">
							<select className='formControl' onChange={offnadirToHandler} value={state.offnadir_to}>
								{
									offnadirList && offnadirList.length > 0 && offnadirList.map((item) => <option key={item} value={item}>{item}°</option>)
								}
							</select>
						</div>
					</div>
				</div>
				<div className="formrow">
					<div className="multiform">
						<div className="formEle">
							<label>Looking direction</label>
							<select onChange={lookingDirectionHandler} className='formControl' value={state.looking_direction}>
								{
									directionList && directionList.length > 0 && directionList.map((item) => <option key={item} value={item}>{item}°</option>)
								}
							</select>
						</div>
						<div className="midDivider"></div>
						<div className="formEle">
							<label>Fight direction</label>
							<select onChange={flightDirectionHandler} className='formControl' value={state.flight_direction}>
								{
									directionList && directionList.length > 0 && directionList.map((item) => <option key={item} value={item}>{item}°</option>)
								}
							</select>
						</div>
					</div>
				</div>
				<div className="formrow">
					<button className="submit" onClick={searchArchive} type='button'>
						Search
					</button>
				</div>
			</div>

		</Style>
	);
};
