import React from "react";
import { Route, Routes } from "react-router-dom";
import Ordenes from "./components/paginas/Ordenes";
import Menu from "./components/paginas/Menu";
import NuevoPlatillo from "./components/paginas/Platillo";
import SideBar from "./components/ui/SideBar";
import firebase, { FirebaseContext } from "./firebase";

function App() {
  return (
    <FirebaseContext.Provider value={firebase}>
      <div className="md:flex min-h-screen">
        <SideBar />
        <div className="md:w-2/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/" element={<Ordenes />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
