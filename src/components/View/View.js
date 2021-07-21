import { motion } from 'framer-motion';
import './View.css';

const View = ({ children, level, ...rest }) => {
  return (
    <motion.div
      animate={{ y: 0, transition: { ease: 'easeOut', duration: 0.3 } }}
      className={'view'}
      exit={{ y: '100%', transition: { ease: 'easeIn', duration: 0.3 } }}
      initial={{ y: '100%' }}
      style={{
        zIndex: level,
      }}
      {...rest}>
      {children}
    </motion.div>
  );
};

export default View;
