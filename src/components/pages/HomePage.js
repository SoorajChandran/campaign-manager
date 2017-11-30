import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from "../ui-elements/Sidebar";
import Header from "../ui-elements/Header";
import CampaignCard from "../ui-elements/CampaignCard";
import '../../App.css';

class HomePage extends Component {

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

HomePage.propTypes = {
  data: PropTypes.shape.isRequired
}



export default HomePage;
