
import News from '../../components/News/News';
import PopularDestination from '../../components/PopularDestination/PopularDestination';
import Banner from '../../components/Shared/Banner';
import Weekly from '../../components/Weekly/Weekly';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <PopularDestination/>
            <WhyChoose/>
            <Weekly/>
         <News/>
        </div>
    );
};

export default Home;