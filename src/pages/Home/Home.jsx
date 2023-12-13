
import PopularDestination from '../../components/PopularDestination/PopularDestination';
import Banner from '../../components/Shared/Banner';
import Weekly from '../../components/Weekly/Weekly';
import WhyChoose from '../../components/WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularDestination/>
            <WhyChoose/>
            <Weekly/>
        </div>
    );
};

export default Home;