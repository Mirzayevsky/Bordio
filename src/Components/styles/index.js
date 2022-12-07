import {
  ButtonWrapper,
  DropDownItem,
  DropDownWrapper,
  InputInner,
} from "./styles";

export const Button = ({
  width,
  height,
  bg,
  color,
  text,
  Icon,
  DownSvg,
  isDropDown,
  children,
}) => {
  return (
    <ButtonWrapper
      style={{
        color: `${color}`,
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${bg}`,
      }}
    >
      {children}
      {Icon ? <Icon /> : ``}
      {text} {DownSvg ? <DownSvg className="down" /> : ``}
      {isDropDown === "true" ? (
        <DropDownWrapper className="drop_true">
          <DropDownItem> Board view</DropDownItem>
          <DropDownItem> Table view</DropDownItem>
          <DropDownItem> Kanban</DropDownItem>
        </DropDownWrapper>
      ) : (
        ""
      )}
    </ButtonWrapper>
  );
};

export const Input = ({
  width,
  height,
  name,
  action,
  value,
  type = "text",
  bg,
  color,
  placeholder,
}) => {
  return (
    <InputInner
      onChange={action}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      style={{
        color: `${color}`,
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${bg}`,
      }}
    />
  );
};
