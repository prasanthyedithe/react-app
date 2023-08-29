//rafce

interface Props{
    children: String;
    color?: 'primary' | 'secondary' | 'danger'; 
    // ? indicates as its optional and we can select the above colors only
    onClick: () => void;

}


const Button = ({children, color, onClick}: Props) => {
  return (
    <button type="button" className={'btn' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
