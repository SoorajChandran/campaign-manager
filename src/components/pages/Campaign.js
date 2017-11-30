import React from 'react';
import Sidebar from "../ui-elements/Sidebar";
import Header from "../ui-elements/Header";
import Funnel from "../ui-elements/Funnel";
import CampaignData from "../ui-elements/CampaignData";
import CampaignMetric from "../ui-elements/CampaignMetric";
import '../../App.css'

class Campaign extends  React.Component {

  getData = (element) => {
    return element.id === this.props.match.params.id;
  }

  addGoals = () => {
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
                <CampaignData {...campaignData} />
              </div>
            </div>
          </div>
          <div className="col-sm-4 mt-4">
            <div className="campaignCard">
            <div className="col-sm-12 campaignMetric pt-3">
                <CampaignMetric {...campaignData} /> 
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
