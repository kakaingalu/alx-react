import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyNotifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
    html: null,
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available',
    html: null,
  },
  {
    id: 3,
    type: 'urgent',
    value: null,
    html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
  },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <MyNotifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
