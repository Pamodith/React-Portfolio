import { Dispatch, SetStateAction } from "react"

export type typographyProp = {
    routename ?: string
    content: string
    className ?: string
  }

export type navtextProp = {
  id: number
  routeName : string
  name:string
}

export type cardProp = {
  content:string
  cardClassName:string
}


export type RoundCardProp = {
  componentName?:string
  alert?: boolean
  setAlert: Dispatch<SetStateAction<boolean>>
}


// export type MenuRoundedIconProp = {
//   className?:string
// }