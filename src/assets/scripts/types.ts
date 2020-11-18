import { Card } from "./classes";

export type IIcon = {
    src: string
    alt: string
}

export type ICatergories = {
    id: number
    name: string
    icon: IIcon
}

export type ICard = {
    id: number
    title: string
    subtitle?: string
}


export type Service = {
    getCardsById: (id: number) => Card;
    getCategories: () => Array<ICatergories>;
}


export interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }

  export type IOrderMapState = {
      id: number
      value: IOrderState
  }

  export type IOrderState = {
      count: number
      name: string
  }