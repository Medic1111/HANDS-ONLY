import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeHero from "./components/HomeHero/HomeHero";
import MainModal from "./components/MainModal/MainModal";
import Over from "./components/Over/Over";
import dummyData from "./dummyDatabase/dummyDatabase";
import quizCtx from "./store/quizCtx";
import modalCtx from "./store/modalCtx";
import overCtx from "./store/overCtx";
import { useState, useEffect } from "react";

function App() {
  const [currentLesson, setCurrentLesson] = useState({});
  const [isModal, setIsModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [correct, setCorrect] = useState(true);
  const fetchApi = () => {
    axios
      .get("/api")
      .then((serverRes) => {
        dummyData.push(serverRes.data);
        setHasLoaded(true);
      })
      .catch((err) => console.log(err.response.status));
  };

  useEffect(fetchApi, []);

  return (
    <div className="App">
      <overCtx.Provider value={{ isOver, setIsOver }}>
        <quizCtx.Provider
          value={{
            currentLesson,
            setCurrentLesson,
            currentIndex,
            setCurrentIndex,
            hasLoaded,
            setHasLoaded,
            correct,
            setCorrect,
          }}
        >
          <modalCtx.Provider value={{ isModal, setIsModal }}>
            {isOver && <Over />}
            {isModal && <MainModal />}
            <Header />
            <HomeHero />
            <Footer />
          </modalCtx.Provider>
        </quizCtx.Provider>
      </overCtx.Provider>
    </div>
  );
}

export default App;
