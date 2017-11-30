import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../ui-elements/Sidebar";
import Header from "../ui-elements/Header";
import CampaignCard from "../ui-elements/CampaignCard";
import '../../App.css';

class HomePage extends Component {

  constructor () {
    super();
  }

  render() {
    return (
      <div>
        <Sidebar/>
        <Header/>
        <div className="main">
          <CampaignCard campaignData = {this.props.data} />
        </div>
      </div>
    )
  }
}


export default HomePage;
