import './App.css';
import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import Team from './components/team/team.component';
import Contaact from './components/contact/contact.component';
import Faqs from './components/faqs/faqs.component';
import Carousel from './components/slider/slider.component';
import Footer from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Team />
      <Contaact />
      <Faqs />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
