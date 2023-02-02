import { ThreeCircles } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <>
      <h1 className={css.message}>Loading ...</h1>
      <ThreeCircles
        wrapperStyle={{}}
        wrapperClass={css.loader}
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#3f51b5"
        innerCircleColor="yellow"
        middleCircleColor="#3f51b5"
      />
    </>
  );
};
