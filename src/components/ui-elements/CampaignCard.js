import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Funnel from "./Funnel";
import '../../App.css'

class CampaignCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      perPage: 8,
      data: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.sortList = this.sortList.bind(this);
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }



  filterFunction = (filterValue) => (a) => {
    if(a[filterValue] != null && a[filterValue] != 0){
      return true;
    }
  };
  
  filterList = () => {
    const elem =  document.getElementById("filter");
    const filterValue = elem.options[elem.selectedIndex].value;
    if(filterValue == "null") return;
    let campaignData = this.state.data;
    campaignData = campaignData.filter(this.filterFunction(filterValue));
    this.setState({ 
      data: campaignData
    });
  }

  sortList = () => {
    const elem =  document.getElementById("sort");
    const sortValue = elem.options[elem.selectedIndex].value;
    if(sortValue == "null") return;
    let campaignData = this.state.data;
    campaignData.sort(this.compare(sortValue));
    this.setState({ 
      data: campaignData
    });
  }


  render() {  

    let { campaignData } = this.props;
    const { currentPage, perPage } = this.state;
    campaignData = Array.from(campaignData);

    if(!this.state.data){
      this.state.data = campaignData;
    }

    let campaignDataGrid = this.state.data.map((data, i) => {

      return <div key={i} className='col-sm-6 mt-4'>
      <div className="campaignCard">
        <div className="campaignTitle bb1 col-sm-12">
          <Link to={`campaign/${data.id}`}> {data.title || `N.A`}  </Link>   
        </div>
        <div className="campaignMetric col-sm-12 row"> 
          <div className="col-sm-4 br1 pt-4 pb-4">
            <div className="metricTitle muted">
              Sales conversion
            </div>
            <div className="metricValue large">
              <span className="sign">$</span>
              <span className="value"> { data.sales_conversion_value_cents/100 || ` - - ` } </span>
            </div>

            <div className="metricTitle muted">
              Leads conversion
            </div>
            <div className="metricValue large">
              <span className="sign">$</span>
              <span className="value"> { data.lead_conversion_value_cents/100 || ` - - ` } </span>
            </div>
          </div>
          <div className="col-sm-8 pt-4 pb-4 text-center">
            <Funnel {...data} />
          </div>
          
        </div>
        <div className="cardFooter mt-6 col-sm-12 pt-2"> 
          <div className="row">
          <div className="col-sm-4">
           <span className="muted"> Goal: </span> { data.goal || `Not set`}
          </div>
          <div className="col-sm-4">
           <span className="muted"> Duration: </span> { ( data.days && `${data.days} days` ) || `N.A`}
          </div>
          <div className="col-sm-4 text-right">
          <Link to={`campaign/${data.id}`}> View more </Link>   
          </div>
          </div>
          
        </div>
      </div>
      </div>
    })


    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentItems = campaignDataGrid.slice(indexOfFirst, indexOfLast);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(campaignDataGrid.length / perPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="pageNumber"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });



    return (
      <div className="row">
        <div className="col-sm-12 pt-2">
          <div className="row">
            <div className="col-sm-1">
              Sort by:
            </div>
            <div className="col-sm-2">
              <select id="sort" className="form-control" onChange={this.sortList}>
                <option value="null">Select a value</option>
                <option value="reach">Reach</option>
                <option value="views">Views</option>
                <option value="interaction">Interaction</option>
                <option value="sales_conversion_value_cents">Sales conversion</option>
                <option value="days">Duration</option>
                <option value="lead_conversion_value_cents">Leads conversion</option>
              </select>
            </div>

            <div className="col-sm-1">
              Filter by:
            </div>
            <div className="col-sm-2">
              <select id="filter" className="form-control" onChange={this.filterList}>
                <option value="null">Select a value</option>
                <option value="reach">Reach</option>
                <option value="views">Views</option>
                <option value="interaction">Interaction</option>
                <option value="goal">Goals</option>
                <option value="lead_conversion_value_cents">Leads conversion</option>
                <option value="sales_conversion_value_cents">Sales conversion</option>
              </select>
            </div>
          </div>
          
        </div>
        {currentItems}
        <div className="col-sm-12">
          <ul className="pageNumberWrapper">
            {renderPageNumbers}
          </ul>
        </div>
      </div>
      
    );
  }
compare = (propName) => (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? 1 : -1;
}

export default CampaignCard;