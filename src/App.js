import Banner from "./components/Banner/Banner";
import Deliverydetails from "./components/DeliveryDetails/Deliverydetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Productcard from "./components/ProductCard/Productcard";


function App() {
  return (
    <div className="App">
     <Header/>
     <Productcard/>
     <Banner/>
     <Deliverydetails/>
     <Footer/>
    </div>
  );
}

export default App;
