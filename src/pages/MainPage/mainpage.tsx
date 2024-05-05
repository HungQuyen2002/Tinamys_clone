
import React from 'react';
import Benefit from './components/Benefit/benefit';
import Nav from './components/Nav/nav';
import Home from './components/Home/home';
import Feedback from './components/Feedback/feedback';
import Question from './components/Question/question';
import Contact from './components/Contact/contact';
import Groupcontroll from './components/GroupControll/groupcontroll';
import Footer from './components/Footer/footer';

const MainPage: React.FC = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Benefit />
      <Feedback />
      <Question />
      <Contact />
      <Footer />
      <Groupcontroll />
    </div>
  );
};

export default MainPage;
