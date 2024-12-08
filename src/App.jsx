import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";

import Header from "./components/Header";
import { VideoProvider } from "./context/videoContext.jsx";
import Detail from "./pages/Detail/index.jsx";
import SearchResults from "./pages/SearchResults.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <VideoProvider>
              <Feed />
            </VideoProvider>
          }
        />
        <Route path="/watch" element={<Detail />} />
        <Route path="/result" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
