import CareersLayout from 'layouts/CareersLayout';
import HelpLayout from 'layouts/HelpLayout';
import RootLayout from 'layouts/RootLayout';
import About from 'pages/About';
import CareerDetails, { careerDetailsLoader } from 'pages/careers/CareerDetails';
import CareerErrors from 'pages/careers/CareerErrors';
import Careers, { careersLoader } from 'pages/careers/Careers';
import Contact, { contactAction } from 'pages/help/Contact';
import Faq from 'pages/help/Faq';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />}/>
        <Route path='contact' element={<Contact />} action={contactAction}/>
      </Route>
      <Route path='careers' element={<CareersLayout />} 
          errorElement={<CareerErrors />}>
        <Route
          index
          loader={careersLoader}
          element={<Careers />}
        />"
        <Route
          path=":id"
          loader={careerDetailsLoader}
          element={<CareerDetails />}
        />
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
