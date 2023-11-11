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
  type: string;
  image: string;
  name: string;
  price: number;
};
