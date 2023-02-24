import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Logo } from '../../modules/Logo';
import { MainNav } from "../../modules/Mainnav";
import { TaskSearchForm } from "../../modules/TaskSearchForm";
import { Style } from '../Home/Style';
import { FloatingTable } from "./FloatingTable";
import { CreateNewAOI } from "../../modules/createNewAOI/";
import { ProductOption } from "../../modules/ProductOption";
import { InfoBox } from "../../modules/InfoBox";
import {ConfirmBox} from "../../modules/ConfirmBox";
import SearchBox from "../../modules/SearchBox/";
interface StateType {
  createNewAOIStatus: boolean,
  tableStatus: boolean,
  productionOptionStatus: boolean,
  infoBoxStatus: boolean,
  confirmBoxStatus:boolean
}
export function TaskingSearch() {
  const activeNav = 'taskingSearch';
  const [show, setShow] = useState(false);
  const [tableStatus, setTableStatus] = useState(true);
  const [state, setState] = useState<StateType>({
    createNewAOIStatus: false,
    tableStatus: true,
    productionOptionStatus: false,
    infoBoxStatus: false,
    confirmBoxStatus :false,

  })

  const startHandler = () => {
    console.log("StrtHandler ...");
    setShow(false);
  }
  const productOptions = [
    {
      id: 1,
      label: 'SLC CEOS',
      value: 'slc-ceos'

    },
    {
      id: 2,
      label: 'SLC CICD',
      value: 'slc-cicd'

    },
    {
      id: 3,
      label: 'GRD GeoTIFF',
      value: 'grd-deotiff'

    }
  ]
  const uploadHandler = (event: React.MouseEvent) => {
    console.log("uploadHandler :", event);
  }
  const ok = (data: []) => {
    console.log("OK", data)
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
            <TaskSearchForm onNew={() => setShow(true)} />
          </div>
          <div className='thirdCol'>
            <div className="mapHolder">
             
            </div>
            {
              tableStatus && <FloatingTable onClose={() => setState({ ...state, "tableStatus": false })} />
            }

          </div>
        </div>
      </Style>
      {
        state.productionOptionStatus === true && <ProductOption
          options={productOptions}
          // @ts-ignore
          onOK={ok}
          // @ts-ignore
          onClose={() => setState({ ...state, "productionOptionStatus": false })} title="Product option" />
      }
      {
        state.infoBoxStatus && <InfoBox
          title="Archive pre-ordered"
          description="Your request was handled
  successfully. An email was send
  to the client for review"
          mode="alert"
          // @ts-ignore

          btn="Cancel Task"
          onClose={() => setState({ ...state, "infoBoxStatus": false })}
          onBtnClick={() => console.log("asdf")} />
      }
    {
      state.createNewAOIStatus === true && <CreateNewAOI
      show={state.createNewAOIStatus}
      onStart={startHandler}
      // @ts-ignore
      onUpload={uploadHandler}
      // @ts-ignore
      onClose={() => setShow({ ...state, "createNewAOIStatus": false })}
    />
    }
      {
        state.confirmBoxStatus && <ConfirmBox 
        title="Pre-order archive" 
        message="You are about to pre-order this tasking. An email will be  send to the client for confirmation of the order." 
        okTxt="Preo-order tasking"         
        onCancel={()=>setState({...state,"confirmBoxStatus":false})}         
        onOK={()=>console.log("Ok triggered")} 
        />
      }
    </>
  );
}
