import AwardSection from "./AwardSection/AwardSection";
import Beaware from "./Beawaresection/Beaware";
import Benefits from "./Benefits/Benefits";
import Card from "./Cards/Card";
import CovidWarning from "./CovidWarning/CovidWarning";
import FindJob from "./FindJob/FindJob";
import Footer from "./Footer/Footer";

import Navbar from "./Navbar/Navbar";
import { Passion } from "./Passion/Passion";
import ReadyToMake from "./ReadyTomake/ReadyToMake";
import SearchSection from "./SearchSection/SearchSection";
import TopHeader from "./TopHeader/TopHeader";
import Videosection from "./Videosection/Videosection";

function App() {
  return (
    <div className="App">
      <TopHeader></TopHeader>
      <Navbar></Navbar>
      <FindJob></FindJob>
      <Beaware></Beaware>
      <ReadyToMake></ReadyToMake>
      <Passion></Passion>
      <Videosection></Videosection>
      <AwardSection></AwardSection>
      <Benefits></Benefits>
      <CovidWarning></CovidWarning>
      <Footer></Footer>
    </div>
  );
}

export default App;
