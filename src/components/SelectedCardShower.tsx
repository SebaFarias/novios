'use client'

import { REGALOS } from '@/data/data'
import { FunctionComponent } from "react"
import RegaloCard, { Regalo } from "./RegaloCard"
import { useSearchParams } from "next/navigation"

export interface SelectedCardShowerProps{}


const SelectedCardShower: FunctionComponent<SelectedCardShowerProps> = props => {
  
  const regaloName = useSearchParams().get("regalo")
  const regalo: Regalo = REGALOS.filter(regalo=>regalo.nombre===regaloName)[0]
  
  return(
    <ul>
      <RegaloCard regalo={regalo} cortada={true}/>
    </ul>
  )
}

export default SelectedCardShower