export type EInput = React.ChangeEvent<HTMLInputElement>;
export type EClick = React.MouseEvent;
export type ESubmit = React.FormEvent;
export type ETextArea = React.ChangeEvent<HTMLTextAreaElement>;
export type EFile = React.ChangeEvent<HTMLInputElement>;
export type VoidFunc = () => void;

export type GNBTableTypes = {
  label: string;
  path: string;
};

export type HomeItem = {
  id: number;
  type: string;
  image: string;
  name: string;
  price: number;
};

export type ItemList = {
  image: string;
  name: string;
  detail: string;
  quantity:number;
  choose:string;
  price:number;
}

export type List = {
  board_id:number;
  title:string;
  content:string;
  created_time:string;
  created_user_id:string;
}

export type CompanyData = {
  companyName: string;
  address: string;
  ceoName: string;
  companyId: string;
  phone: string;
  email: string;
  sellerId: string;
  protectName: string;
};

export type ItemInfo = {
  category: number;
  choose: string[];
  description: string;
  id: number;
  img: string[];
  price: number;
  title: string;
  user_id: string;
};

export type SelectedItem = {
  label: string;
  choose: string;
  quantity: number;
};

export type BagPost = {
  product_id: number;
  quantity: number;
  created_user_id: string;
  choose: string;
};
