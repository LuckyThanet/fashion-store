import Header from "../components/Header";
import Hero from "../components/Hero";
import ValueProp from "../components/ValueProp";
import NewArrivals from "../components/NewArrivals";
import Lookbook from "../components/Lookbook";
import CuratedCollections from "../components/CuratedCollections";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ValueProp />
        <NewArrivals />
        <Lookbook />
        <CuratedCollections />
      </main>
      <Footer />
    </div>
  );
}
