import { createContext, lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { fakeFetchCourses } from "./API/DummyCourses";

import Navbar from './components/Navbar.component'
import Footer from './components/Footer.component'

import { Blog } from './pages/Blog.page'
import { lookInSession } from "./common/session";
import Loader from './components/Loader'

import UserAuthForm from './pages/UserAuthForm'

const Home = lazy(() => import("./pages/Home.page"));
const About = lazy(() => import("./pages/About.page"));
const Courses = lazy(() => import("./pages/Courses.page"));  
const Contact = lazy(() => import("./pages/Contact.page")); ;

export const UserContext = createContext({})



function App() {

  const [userAuth, setUserAuth] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(()=>{

    let userInSession = lookInSession("user");

    userInSession
      ? setUserAuth(JSON.parse(userInSession))
      : setUserAuth({ access_token: null }); 

  }, [])


  return (
    <UserContext.Provider value={{userAuth, setUserAuth, showPopup, setShowPopup}}>
      <div>
        <Navbar />
        <Routes>
          <Suspense fallback={<Loader />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<UserAuthForm type="sign-in" />} />
          <Route path="/signup" element={<UserAuthForm type="sign-up" />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/courses"
            element={<Courses fakeFetch={fakeFetchCourses} />}
            />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          </Suspense>
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App
