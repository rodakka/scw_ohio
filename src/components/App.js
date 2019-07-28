import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../css/App.css';

import Header from './Header';
import HomePage from '../pages/HomePage';
import HallOfFame from '../pages/HallOfFame';
import News from '../pages/News';
import RosterPage from '../pages/RosterPage';
import Shows from '../pages/Shows';
import ResultsPage from '../pages/ResultsPage';
import StorePage from '../pages/StorePage';
import GalleryPage from '../pages/GalleryPage';
import ContactPage from '../pages/ContactPage';
import Footer from '../components/Footer';

import upcomingShows from '../upcomingShows.js';


function App() {
    return (
        <Router>
            <div id="page-container">
                <Header />
                <div id="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/hof' component={HallOfFame} />
                        <Route exact path='/news' component={News} />
                        <Route path='/roster' component={RosterPage} />
                        <Route path='/shows' render={props => <Shows {...props} shows={upcomingShows}/>} />
                        <Route path="/results/:date"
                            render={props =>
                                <ResultsPage {...props} shows={upcomingShows} />
                            }
                        />
                        <Route path="/store" component={StorePage} />
                        <Route path="/gallery" component={GalleryPage} />
                        <Route path='/contact' component={ContactPage} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
