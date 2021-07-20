import './Button.css';

const Button = ({ as = 'button', className, children, onClick, ...rest }) => {
  const Tag = as;

  return (
    <Tag
      className={['button', className].join(' ')}
      onClick={onClick}
      {...rest}>
      {children}
    </Tag>
  );
};

export default Button;
