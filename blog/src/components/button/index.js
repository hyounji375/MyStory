import { MainBtnST, SubBtnST } from "./style";

export const MainBtn = ({ children, onClick, disabled, onKeyPress }) => {
  return (
    <MainBtnST onClick={onClick} disabled={disabled} onKeyPress={onKeyPress}>
      {children}
    </MainBtnST>
  );
};

export const SubBtn = ({ children, onClick }) => {
  return <SubBtnST onClick={onClick}>{children}</SubBtnST>;
};
