import React from "react";

const CampaignMetric = data => (
  <div>
    <div>
      <div className="muted metricTitle"> Lead conversion amount </div>
      <div className="metricValue large">
        <span className="sign">$</span>
        <span className="value"> {data.lead_conversion_amount || " - "} </span>
      </div>
    </div>
    <div>
      <div className="muted metricTitle"> Lead conversion value </div>
      <div className="metricValue large">
        <span className="sign">$</span>
        <span className="value">
          {" "}
          {data.lead_conversion_value_cents / 100 || " - "}{" "}
        </span>
      </div>
    </div>

    <div>
      <div className="muted metricTitle"> Sales conversion amount </div>
      <div className="metricValue large">
        <span className="sign">$</span>
        <span className="value"> {data.sales_conversion_amount || " - "} </span>
      </div>
    </div>
    <div>
      <div className="muted metricTitle"> Sales conversion value </div>
      <div className="metricValue large">
        <span className="sign">$</span>
        <span className="value">
          {" "}
          {data.sales_conversion_value_cents / 100 || " - "}{" "}
        </span>
      </div>
    </div>
  </div>
);

export default CampaignMetric;
