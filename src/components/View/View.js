import { motion } from 'framer-motion';
import './View.css';

const View = ({ children, id, isOver = true, level, ...rest }) => {
  const under = {
    hidden: { scale: 0.9, transition: { ease: 'easeOut', duration: 0.3 } },
    show: { scale: 1, transition: { ease: 'easeOut', duration: 0.3 } },
  };

  const over = {
    hidden: { y: '100%', transition: { ease: 'easeIn', duration: 0.3 } },
    show: { y: 0, transition: { ease: 'easeOut', duration: 0.3 } },
  };

  return (
    <motion.div
      animate={'show'}
      className={'view'}
      exit={'hidden'}
      initial={'hidden'}
      style={{
        zIndex: level,
      }}
      variants={isOver === true ? over : under}
      {...rest}>
      {children}
    </motion.div>
  );
};

export default View;
