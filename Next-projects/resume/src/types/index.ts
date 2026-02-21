
export type CategoryType = 'Work' | 'Pet' | 'About Me';

export interface ITimelineItem {
  id: number;
  category: CategoryType;
  date: string;
  title: string;
  subtitle: string; 
  description: string;
  code?: string;
  link?: string; 
  img: string;
  isInProgress?: boolean;
}


export interface IHeaderTitleBtns {
  id: string;
  label: string;
}

export interface IHeaderTiles {
  id: number;
  src: string;
  alt: string;
}

export interface ILinkBtns {
  id: number;
  title: string;
  url: string;
}