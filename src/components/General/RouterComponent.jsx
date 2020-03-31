import React, { Component } from 'react'
import HeaderComponent from '../HeaderAndFooter/HeaderComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeComponent from './WelcomeComponent';
import HomeComponent from './HomeComponent';
import NikonComponent from '../Nikon/NikonComponent';
import NikonUpdateComponent from '../Nikon/NikonUpdateComponent';
import NikonAddComponent from '../Nikon/NikonAddComponent';
import CanonComponent from '../Canon/CanonComponent';
import CanonUpdateComponent from '../Canon/CanonUpdateComponent';
import CanonAddComponent from '../Canon/CanonAddComponent';
import SonyComponent from '../Sony/SonyComponent';
import SonyUpdateComponent from '../Sony/SonyUpdateComponent';

class RouterComponent extends Component {
    render() {
        return(
            <div>
            <Router>
                <>
                <HeaderComponent />
                <Switch>
                    <Route path="/" exact component={WelcomeComponent} />
                    <Route path="/home" exact component={HomeComponent} />
                    <Route path="/nikon" exact component={NikonComponent} />
                    <Route path="/nikonUpdatePart/:id?/:partName?/:partNumber?/:partPrice" exact component={NikonUpdateComponent} />
                    <Route path="/nikonAddPart" exact component={NikonAddComponent} />
                    <Route path="/canon" exact component={CanonComponent} />
                    <Route path="/canonUpdatePart/:id?/:partName?/:partNumber?/:partPrice" exact component={CanonUpdateComponent} />
                    <Route path="/canonAddPart" exact component={CanonAddComponent} />
                    <Route path="/sony" exact component={SonyComponent} />
                    <Route path="/sonyUpdatePart/:id?/:partName?/:partNumber?/:partPrice" exact component={SonyUpdateComponent} />
                    
                </Switch>
                </>
            </ Router>
            </div>
        )
    }
}

export default RouterComponent