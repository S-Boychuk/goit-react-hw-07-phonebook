import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '200px',
  };
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#a4133c"
      visible={true}
      ariaLabel="three-circles-rotating"
      wrapperStyle={wrapperStyles}
    />
  );
};

export default Loader;
