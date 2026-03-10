import AboutView from "./views/AboutView";
import AddLocationView from "./views/AddLocationView";
import Header from "./components/Header";
import LocationDetailView from "./views/LocationDetailView";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import Error404View from "./views/Error404View";
import ContactView from "./views/ContactView";
import { Route, Switch } from "wouter";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

register();

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/About-me" component={AboutView} />
          <Route path="/Contact" component={ContactView} />
          <Route path="/404" component={Error404View} />
          <Route path="/AddLocation" component={AddLocationView} />
          <Route path="/:locationName" component={LocationDetailView} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
