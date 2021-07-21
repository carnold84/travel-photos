import Button from '../Button';
import './Layout.css';

const Layout = ({
  children,
  id,
  leftControls,
  noContentPadding = false,
  onBack,
  rightControls,
  title,
  ...rest
}) => {
  return (
    <div className="layout" {...rest}>
      <header className={'layout-header'}>
        <div className={'layout-left-controls'} {...rest}>
          {onBack && (
            <Button className={'layout-back-btn'} onClick={onBack}>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0.288025 7.00001L6.29802 13.01L7.71202 11.596L3.11202 6.99601L7.71202 2.39601L6.29802 0.990005L0.288025 7.00001Z" />
              </svg>
            </Button>
          )}
          {title && <h3 className={'layout-title'}>{title}</h3>}
          {leftControls}
        </div>
        <div className={'layout-right-controls'}>{rightControls}</div>
      </header>
      <main
        className={[
          'layout-content',
          noContentPadding ? 'no-padding' : null,
        ].join(' ')}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
