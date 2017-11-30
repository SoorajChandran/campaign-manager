import React, {Component} from 'react';
import Sidebar from "../ui-elements/Sidebar";
import Header from "../ui-elements/Header";
import Funnel from "../ui-elements/Funnel";
import '../../App.css'

class Campaign extends  React.Component {

  constructor(props){
    super(props);
  }


  getData = (element) => {
    return element.id === this.props.match.params.id;
  }

  addGoals = (e) => {
    const elem =  document.getElementById("goalValue");
    const goalValue = elem.options[elem.selectedIndex].value;
    const data = this.props.data;
    for (let item of data) {
      if(item.id === this.props.match.params.id){
        item.goal = goalValue;
      }
    }
    this.props.updateData(data);
  }

  renderGoals = (goal) => {
    if (goal) {
      return <div> Goals: {goal} </div>
    }
    else
    {
      return <div> 
        <div> You have't added a goal yet! </div>
          <select className="form-control" id="goalValue">
           <option value="awareness"> Awareness </option>
           <option value="consideration"> Consideration </option>
           <option value="conversions"> Conversions </option>
          </select>
         <button className="btn btn-primary mt-2" onClick={this.addGoals}> Add goal now </button>
      </div>
    }

  }


  render(){

    const campaignData = this.props.data.find(this.getData);

    return(
      <div >
        <Sidebar/>
        <Header/>
        <div className="main">
        <div className="row">
          <div className="col-sm-8 mt-4">
          <div className="campaignCard">
          <h3 className="campaignTitle mb-1 mt-4 text-center"> {campaignData.title}</h3>
            <div className="campaignMetric text-center pt-4 pb-4">
             <Funnel {...campaignData} />
            </div>
            <div className="col-sm-12 campaignMetric bt1 mt-3">
              <div className="row">
              <div className="col-sm-3 br1 pt-4">
                <div className="muted metricTitle"> Created at </div>
                <div className="metricValue"> { Date(campaignData.created_at)} </div>
              </div>
              <div className="col-sm-3 br1 pt-4">
                <div className="muted metricTitle"> Start date </div>
                <div className="metricValue"> {campaignData.start_date}  </div>
                
              </div>
              <div className="col-sm-3 br1 pt-4">
                <div className="muted metricTitle">End date </div>
                <div className="metricValue"> {campaignData.end_date} </div>
              </div>
              <div className="col-sm-3 pt-4">
                <div className="muted metricTitle">Duration </div>
                <div className="metricValue"> {campaignData.days} days </div>
              </div>
              </div>
            </div>
            
          </div>
          </div>
          <div className="col-sm-4 mt-4">
          <div className="campaignCard">
          <div className="col-sm-12 campaignMetric pt-3">
              
              <div className="">
                <div className="muted metricTitle"> Lead conversion amount </div>
                <div className="metricValue large">

                  <span className="sign">$</span>
                  <span className="value"> { campaignData.lead_conversion_amount || ' - '} </span>
                 </div>
              </div>
              <div className="">
                <div className="muted metricTitle"> Lead conversion value </div>
                <div className="metricValue large"> 
                <span className="sign">$</span>
                 <span className="value"> {campaignData.lead_conversion_value_cents/100 || ' - '} </span>
                </div>  
              </div>

              <div className="">
                <div className="muted metricTitle"> Sales conversion amount </div>
                <div className="metricValue large"> 
                <span className="sign">$</span>
                 <span className="value"> {campaignData.sales_conversion_amount || ' - '} </span>
                </div>  
              </div>
              <div className="">
                <div className="muted metricTitle"> Sales conversion value </div>
                <div className="metricValue large"> 
                <span className="sign">$</span>
                 <span className="value"> {campaignData.sales_conversion_value_cents/100 || ' - '} </span>
                </div> 
              </div>
            </div>
            <div className="col-sm-12 pb-4">
              { this.renderGoals(campaignData.goal) }
            </div>
            
          </div>
          </div>
          
        </div>
         
          
        </div>
        
        

      </div>
    )
  }
}



export default Campaign;
