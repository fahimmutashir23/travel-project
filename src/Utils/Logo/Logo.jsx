import PropTypes from 'prop-types';
import logo1 from '../../assets/Logo/Logo3.png';


const Logo = ({width}) => {
    return (
        <div>
            <img src={logo1} alt="" className={`w-${width}`} />
        </div>
    );
};

Logo.propTypes = {
    width: PropTypes.string,
};

export default Logo;