import pT from 'prop-types';

const Advert = ({message}) => {
  return (
    <div className="loginPage-error">{message}</div>
  );
};

Advert.propTypes = {
    message: pT.string.isRequired
}

export default Advert;