import React from 'react';

const Funnel = (data) => (
      <div>
        <div className="col-sm-12 mb-2">
            <div className={data.reach ? 'metricValue level1' : 'metricValue'}>
              Reach: {data.reach || `N.A`}
            </div>
          </div>
          <div className="col-sm-12">
            <span className="metricTitle muted">
              Capture Rate: 
            </span>
            <span className="metricValue">
              { ( data.capture_rate && ` ${data.capture_rate.toFixed(2)}% ` ) || ` N.A`}
            </span>
          </div>
          <div className="col-sm-12 mb-2 mt-2">
            <div className={data.reach ? 'metricValue level2' : 'metricValue'}>
              Views: {data.views || ` N.A`}
            </div>
          </div>
          <div className="col-sm-12">
            <span className="metricTitle muted">
              Interaction Rate: 
            </span>
            <span className="metricValue">
              { ( data.interaction_rate && ` ${data.interaction_rate.toFixed(2)}% ` ) || ` N.A`}
            </span>
          </div>
          <div className="col-sm-12 mt-2">
            <div className={data.reach ? 'metricValue level3' : 'metricValue'}>
              Interactions: {data.interactions || ` N.A`}
            </div>
          </div>
        </div>
)

export default Funnel;
