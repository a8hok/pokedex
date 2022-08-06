import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup';
function App() {
  return (
    <>
      <header className="bg-sky-900 rounded-br-3xl">
        <nav className="p-6 mx-auto container relative">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold uppercase">Poke-Catch</h1>
            </div>

            <div className="hidden md:flex space-x-8">

              <Link to="/" className="text-2xl font-medium text-white rounded-3xl px-6 pt-2 p-3 hover:bg-red-500 hover:text-black">
              login
              </Link>

              <Link to="signup/" className="text-2xl font-medium text-white rounded-3xl px-6 pt-2 p-3 hover:bg-red-500 hover:text-black">
                Signup
              </Link>

            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="signup/" element={<Signup />}/>
      </Routes>
    </>
  );
}

export default App;
