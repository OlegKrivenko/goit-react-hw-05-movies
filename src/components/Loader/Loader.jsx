import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <ThreeDots
        height="30"
        width="100"
        radius="8"
        color="#696969"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
