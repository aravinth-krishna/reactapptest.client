import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./components/LandingPage.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Layout from "./layouts/Layout.jsx";
import Course from "./components/Course.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />

        <Route path="auth">
          <Route path="login" element={<Signin />} />
          <Route path="register" element={<Signup />} />
        </Route>

        <Route>
          <Route
            path="/course"
            element={
              <Layout>
                <Course />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
