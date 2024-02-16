import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { ChartData } from '../../types/ChartData';

type Props = {
  data: ChartData[];
};

const LineChart: React.FC<Props> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const chartCanvas = chartRef.current?.getContext('2d');

    if (chartCanvas) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const timeLabels = data.map((entry) => {
        const timestamp = entry[0];
        const date = new Date(timestamp);
        return new Intl.DateTimeFormat('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }).format(date);
      });

      chartInstance.current = new Chart(chartCanvas, {
        type: 'line',
        data: {
          labels: timeLabels,
          datasets: [
            {
              data: data.map((entry) => entry[1]),
              pointRadius: 0,
              tension: 0.5,
              fill: true,
              borderColor: 'rgba(64, 150, 247, 1)',
              borderWidth: 1.5,
              backgroundColor: 'rgba(64, 150, 247, 0.2)',
            },
          ],
        },
        options: {
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas className="chart" ref={chartRef} height={160} />;
};

export default LineChart;
