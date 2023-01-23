import React, { useState } from "react";
import styled from 'styled-components';
import { Logo } from '../../modules/Logo';
import { MainNav } from "../../modules/Mainnav";
import { TaskSearchForm } from "../../modules/TaskSearchForm";
import { Style } from '../Home/Style';
import { FloatingTable } from "./FloatingTable";
import { CreateNewAOI } from "../../modules/createNewAOI/";
import { ProductOption } from "../../modules/ProductOption";
interface StateType {
  createNewAOIStatus: boolean,
  tableStatus: boolean,
  productionOptionStatus: boolean
}
export function TaskingSearch() {
  const activeNav = 'taskingSearch';
  const [show, setShow] = useState(false);
  const [tableStatus, setTableStatus] = useState(true);
  const [state, setState] = useState<StateType>({
    createNewAOIStatus: false,
    tableStatus: true,
    productionOptionStatus: true

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
        state.productionOptionStatus && <ProductOption
          options={productOptions}
          // @ts-ignore
          onOK={ok}
          // @ts-ignore
          onClose={() => setState({ ...state, "productionOptionStatus": false })} title="Product option" />
      }

      <CreateNewAOI
        show={state.createNewAOIStatus}
        onStart={startHandler}
        // @ts-ignore
        onUpload={uploadHandler}
        // @ts-ignore
        onClose={() => setShow({ ...state, "createNewAOIStatus": false })}
      />
    </>
  );
}
