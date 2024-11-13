interface ButtonProps {
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}

const Button = ({ buttonText, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      className={`w-max py-3 px-5 text-center text-white text-base button-bg ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
