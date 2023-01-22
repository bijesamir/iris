import React, { useEffect } from 'react';
import {Style} from "./Style"
import { img } from "../../../../assets/img";

interface FloatingTableProps {}

export const FloatingTable: React.FC<FloatingTableProps> = () => {
	const [selected,setSelected] = React.useState([]);
	const data = [
		{
			id:1,
			utc_date:"2022-10-17 00:27:01",
			jst_date:"2022-10-17 00:27:01",
			satellite_name:"Strix alpha",
			imaging_mode:"Stripmap",
			offnadir_ang:"28.7",
			flight_direction:"Decending",
			looking_direction:"Left",
			coverage:"95%",
			conflict_status:"No conflict"
		},
		{
			id:2,
			utc_date:"2022-10-17 00:27:01",
			jst_date:"2022-10-17 00:27:01",
			satellite_name:"Strix alpha1",
			imaging_mode:"Stripmap",
			offnadir_ang:"28.7",
			flight_direction:"Decending",
			looking_direction:"Left",
			coverage:"95%",
			conflict_status:"No conflict"
		},
		{
			id:3,
			utc_date:"2022-10-17 00:27:01",
			jst_date:"2022-10-17 00:27:01",
			satellite_name:"Strix alpha2",
			imaging_mode:"Stripmap",
			offnadir_ang:"28.7",
			flight_direction:"Decending",
			looking_direction:"Left",
			coverage:"85%",
			conflict_status:"Conflict"
		},
		{
			id:4,
			utc_date:"2022-10-17 00:27:01",
			jst_date:"2022-10-17 00:27:01",
			satellite_name:"Strix alpha2",
			imaging_mode:"Stripmap",
			offnadir_ang:"28.7",
			flight_direction:"Decending",
			looking_direction:"Left",
			coverage:"85%",
			conflict_status:"Conflict"
		},
		{
			id:5,
			utc_date:"2022-10-17 00:27:01",
			jst_date:"2022-10-17 00:27:01",
			satellite_name:"Strix alpha2",
			imaging_mode:"Stripmap",
			offnadir_ang:"28.7",
			flight_direction:"Decending",
			looking_direction:"Left",
			coverage:"85%",
			conflict_status:"Conflict"
		}
	]
	const rowClickHandler = (event:React.MouseEventHandler<HTMLDivElement>) =>{
		event.preventDefault();
		
		const div: HTMLDivElement = event.currentTarget;
		let tempSelected = [...selected];
		let id:number = parseInt(div.dataset.id);
		if(selected.includes(id)){
			// Need to remove
			setSelected(tempSelected.filter(item=>item!==parseInt(id)));
		}else{
			setSelected([...selected,parseInt(div.dataset.id)]);
		}
		}

	return (
		<>
		<Style>
			<div className="topbar">
				<div className="left">
				<h2>Upcoming tasking opportunities</h2>
            <div className="headerDesc">
				You'll fine below the opportunities fitting the criteria you entered </div>
			</div>
			<div className="right">
				<button className="closeBtn"><img src={img.closeBtn} width="20" height="20" /></button>
			</div>
				</div>
            
			<div className="tableControl">
				<div className="left">

				</div>
				<div className="right">
					<button>Order Tasks</button>
				</div>
				
			</div>
			<div className="table">
			<div className="throw">
				<div className="tcol">

				</div>
				<div className="tcol align-left">
					Observation date (UTC)
				</div>
				<div className="tcol align-left selected">
					<div className="sortCol">
						<div >
						Observation date (JST)
						</div>
						<img src={img.arrowDown} width='10' height="18" />
					</div>
					
				</div>
				<div className="tcol">
					Satellite Name
				</div>
				
				<div className="tcol">
					Imaging mode
				</div>
				<div className="tcol">
					Offnadir Ang
				</div>
				<div className="tcol">
					Flight Direction
				</div>
				<div className="tcol">
					Looking Direction
				</div>
				<div className="tcol">
					Coverage 
				</div>
				<div className="tcol">
					Conflict status
				</div>
			</div>

			{
				data.map((item,index)=><div data-id={item.id} key={item.id} className={`trow ${selected.includes(item.id) ? 'selected' :''}`} onClick={rowClickHandler}>
				
				<div className="tcol">
					<div className="badge">{index+1}</div>
				</div>
				<div className="tcol">
					<div className="checkData">
						<div>
							{item.utc_date}
						</div>
					</div>
				</div>
				<div className="tcol">
				<div className="checkData">
				<input type="checkbox"  />
						
						<div>
							{item.jst_date}
						</div>
					</div>
				</div>
				<div className="tcol">{item.satellite_name}</div>
				<div className="tcol">{item.imaging_mode}</div>
				<div className="tcol">{item.offnadir_ang}°</div>
				<div className="tcol">{item.flight_direction}</div>
				<div className="tcol">{item.looking_direction}</div>
				<div className="tcol">{item.coverage}</div>
				<div className="tcol">{item.conflict_status}</div>

				
		</div>)
			}
			<div className="tfoot">
				<div className="left">

				</div>
				<div className="right">
					<div className="pageNo">Page 1</div>
					<button className="prevBtn"> <img src={img.prevBtn} width="12" height="12" /> </button>
					<button className="nextBtn"> <img src={img.nextBtn} width="12" height="12" /> </button>
				</div>
			</div>
			</div>
					</Style>
					
					</>
	);
};
