import logo1 from '../../assets/Logo/Logo3.png';

// eslint-disable-next-line react/prop-types
const Logo = ({width}) => {
    return (
        <div>
            <img src={logo1} alt="" className={`w-${width}`} />
        </div>
    );
};

export default Logo;