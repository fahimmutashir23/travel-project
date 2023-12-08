import PopularDestination from '../../components/PopularDestination/PopularDestination';
import Banner from '../../components/Shared/Banner';
import WhyChoose from '../../components/WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularDestination/>
            <WhyChoose/>
        </div>
    );
};

export default Home;