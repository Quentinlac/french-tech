'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Legend,
} from 'recharts';

const CroatianFundingChart = () => {
  const data = [
    { year: '2018', funding: 250, label: '€250M' },
    { year: '2019', funding: 350, label: '€350M' },
    { year: '2020', funding: 500, label: '€500M', milestone: 'Infobip Unicorn' },
    { year: '2021', funding: 700, label: '€700M' },
    { year: '2022', funding: 985, label: '€985M', milestone: 'Rimac Unicorn' },
    { year: '2023', funding: 800, label: '€800M', milestone: 'Photomath €500M Exit' },
    { year: '2024', funding: 300, label: '€300M (proj)', milestone: 'Verne €100M' },
  ];

  const milestones = [
    { year: '2020', funding: 500, event: 'Infobip Unicorn ($1B+)', color: '#0055A4' },
    { year: '2022', funding: 985, event: 'Rimac Unicorn ($2.2B)', color: '#E4002B' },
    { year: '2023', funding: 800, event: 'Photomath Exit (€500M)', color: '#FFD700' },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
          <p className="font-bold text-lg mb-1">{data.year}</p>
          <p className="text-secondary-500 font-semibold">{data.label}</p>
          {data.milestone && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 border-t pt-2">
              🎯 {data.milestone}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Croatian Tech Funding Growth</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Year-over-year venture capital investment with major milestones (2018-2024)
        </p>
      </div>

      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.3} />
            <XAxis
              dataKey="year"
              stroke="#6B7280"
              style={{ fontSize: '14px', fontWeight: 500 }}
            />
            <YAxis
              stroke="#6B7280"
              style={{ fontSize: '14px' }}
              tickFormatter={(value) => `€${value}M`}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* Main funding line */}
            <Line
              type="monotone"
              dataKey="funding"
              stroke="#E4002B"
              strokeWidth={3}
              dot={{ fill: '#E4002B', r: 6 }}
              activeDot={{ r: 8 }}
            />

            {/* Milestone markers */}
            {milestones.map((milestone, index) => (
              <ReferenceDot
                key={index}
                x={milestone.year}
                y={milestone.funding}
                r={8}
                fill={milestone.color}
                stroke="#fff"
                strokeWidth={2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>

        {/* Milestone Legend */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50"
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: milestone.color }}
              />
              <div>
                <p className="text-sm font-semibold">{milestone.year}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {milestone.event}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Data Note */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <strong>Sources:</strong> The Recursive, Crunchbase, CVCA. 2024 figures are projected based on H1 data.
            Historical data calculated from 40% CAGR (2018-2022).
          </p>
        </div>
      </div>
    </div>
  );
};

export default CroatianFundingChart;
