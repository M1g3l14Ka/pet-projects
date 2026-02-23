

export type FactionType = 'IDE' | 'Frontend' | 'Backend' | 'GameDev' | 'Tools'| 'Front + Back';

export interface IImages {
    id: number;
    src: string;
    x: number;
    y: number;
    rotate: number;
    categories: FactionType[];
}

export interface IMainBtns {
    id: number;
    text: FactionType;
}

export interface IMainContext {
    id: number;
    title: string;
    description: string;
    items:IMainContextItem[];
}

export interface IMainContextItem {
    id: number;
    categories: string;
    description: string;
}

export interface IFAQItem {
    id: number;
    title?: string;
    text?: string;
    url?: string;
}

export interface IFAQData {
    [key: string]: IFAQItem[];
}
