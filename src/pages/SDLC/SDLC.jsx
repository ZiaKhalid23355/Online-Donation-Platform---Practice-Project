import '../../pages/AllLinks/AllLinksCss/AllLinks.css';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from 'recharts';
import '../../pages/AllLinks/AllLinksCss/AllLinks.css';

const phaseData = [
  {
    phase: 'Requirement',
    time: .3,
    color: '#8884d8',
  },
  {
    phase: 'Design',
    time: 1.7,
    color: '#82ca9d',
  },
  {
    phase: 'Implementation',
    time: 1.5,
    color: '#ffc658',
  },
  {
    phase: 'Testing',
    time: 2.5,
    color: '#ff8042',
  },
  {
    phase: 'Deployment',
    time: .2,
    color: '#8dd1e1',
  },
  {
    phase: 'Maintenance',
    time: .8,
    color: '#a4de6c',
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <strong>{label} Phase</strong>
        <p>Duration: {payload[0].value} days</p>
      </div>
    );
  }
  return null;
};


const SDLC = () => {
  return (
    <div className="sdlc-page">
      <h1>Software Development Life Cycle (Waterfall Model)</h1>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={phaseData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="phase" />
          <YAxis label={{ value: 'Days', angle: -90, position: 'insideLeft' }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="time">
            <LabelList dataKey="time" position="top" />
            {phaseData.map((entry, index) => (
              <cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
        
      </ResponsiveContainer>

      {phaseData.map((item, idx) => (
        <section className="sdlc-section" key={idx}>
          <h2>{idx + 1}. <strong>{item.phase}</strong></h2>
          <p><em>This phase took approximately {item.time} days and contributed significantly to the overall flow of the project.</em></p>
        </section>
      ))}
    </div>
  );
};

export default SDLC;
