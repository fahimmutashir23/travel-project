import PropTypes from 'prop-types';
import PageTitle from '../../components/Shared/PageTitle/PageTitle';

const PageTitleWithTotal = ({title, totalName, totalNumber}) => {
    return (
        <div className="flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold bg-blue-400 max-w-fit px-5 py-2 rounded-md text-white">
            Total {totalName} : <span>{totalNumber}</span>
          </h1>
        </div>
        <PageTitle title={title} />
        <div className="flex-1"></div>
      </div>
    );
};

PageTitleWithTotal.propTypes = {
    title: PropTypes.string,
    totalName: PropTypes.string,
    totalNumber: PropTypes.number,
};

export default PageTitleWithTotal;