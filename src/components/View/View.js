import { motion } from 'framer-motion';
import Layout from '../Layout';
import './View.css';

const View = ({
  children,
  id,
  isAnimated = true,
  leftControls,
  noContentPadding = false,
  onBack,
  rightControls,
  title,
  ...rest
}) => {
  return (
    <Layout
      id={id}
      leftControls={leftControls}
      noContentPadding={noContentPadding}
      onBack={onBack}
      rightControls={rightControls}
      title={title}
      {...rest}>
      {children}
    </Layout>
  );
};

export default View;
