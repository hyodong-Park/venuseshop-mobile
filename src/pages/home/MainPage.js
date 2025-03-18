import Headers from '../../components/Header';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import PopupBanner from '../../components/PopupBanner';
import 'swiper/css';

function MainPage() {

    return (
        <div className="MainPage">
            {/* <ThemeColor/> */}
            <Headers/>
            <Body/>
            <Footer/>
            <PopupBanner/>
        </div>
    );
}

export default MainPage;
