import React from 'react';

const CampaignData = (data) => (
      <div className="row">
        <div className="col-sm-3 br1 pt-4">
          <div className="muted metricTitle"> Created at </div>
          <div className="metricValue"> { Date(data.created_at)} </div>
        </div>
        <div className="col-sm-3 br1 pt-4">
          <div className="muted metricTitle"> Start date </div>
          <div className="metricValue"> {data.start_date}  </div>
          
        </div>
        <div className="col-sm-3 br1 pt-4">
          <div className="muted metricTitle">End date </div>
          <div className="metricValue"> {data.end_date} </div>
        </div>
        <div className="col-sm-3 pt-4">
          <div className="muted metricTitle">Duration </div>
          <div className="metricValue"> {data.days} days </div>
        </div>
      </div>
)

export default CampaignData;
