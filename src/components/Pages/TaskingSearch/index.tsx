import React,{useState} from "react";
import styled from 'styled-components';
import { Logo } from '../../modules/Logo';
import { MainNav } from "../../modules/Mainnav";
import { TaskSearchForm } from "../../modules/TaskSearchForm";
import { Style } from '../Home/Style';
import {FloatingTable} from "./FloatingTable";
import { CreateNewAOI } from "../../modules/createNewAOI/";

export function TaskingSearch() {
  const activeNav = 'taskingSearch';
  const [show,setShow] = useState(false);
  const startHandler = ()=>{
    console.log("StrtHandler ...");
    setShow(false);
  }
  const uploadHandler = (event:React.MouseEvent) =>{
    console.log("uploadHandler :", event);
  }
  return (
    <>
    <Style>
      <div className='site'>
        <div className='firstCol'>
          <Logo />
          <MainNav active="tasking-search" />
        </div>
        <div className='secondCol'>
          <TaskSearchForm onNew={()=>setShow(true)} />
        </div>
        <div className='thirdCol'>
          <div className="mapHolder">

          </div>
          <FloatingTable />
        </div>

        {/* <h1>Hello, world!hhhh</h1>
    <Link href={"/reset"}>reset page</Link> */}
        {/* <HomepageCounter /> */}
      </div>
    </Style>
    <CreateNewAOI 
    show={show} 
    onStart={startHandler} 
    onUpload={uploadHandler} 
    onClose={()=>setShow(false)} 
    />
    </>
  );
}
