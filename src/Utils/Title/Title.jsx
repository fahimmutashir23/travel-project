
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const Title = ({title}) => {
    return (
        <div>
            <Helmet><title>{title}-Our Travels</title></Helmet>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string,
};

export default Title;