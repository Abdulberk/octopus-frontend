
type Status = 'working' | 'done' | 'cancelled' | 'online' | 'offline';

export interface RowData {
  id?: number;
  name?: string;
  function?: string;
  status?: Status | undefined
  employed?: string;
  img?: string;
  email?: string;
  department?: string;
  company?: string; 
  budget?: number;
  icon?: React.ReactNode | undefined | null | string;
  completion: number;
}



export interface TableCaptionProps {
  caption: string;
  done?: number | undefined;
}

export interface TableProps {
  data: RowData[];
  columns: Column[];
  caption: string;
  done?: number | undefined;
  pt?:number | string;
  pb?:number | string;
  headerSpacing?: number | string;
}

  
  export interface Column {
    header: string;
    render: (data: RowData) => React.ReactNode;
  }

  
  