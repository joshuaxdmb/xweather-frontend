import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

interface TemperaturePlotProps {
  time: string[]; // Use string array for time labels
  temperature_2m: number[]; 
}

const TemperaturePlot: React.FC<TemperaturePlotProps> = ({
  time,
  temperature_2m,
}) => {
  // Generate an array of equally spaced indices based on the length of the time array
  const equallySpacedIndices = Array.from(
    { length: time.length },
    (_, index) => index
  );

  const data = {
    labels: time,
    datasets: [
      {
        label: 'Temperature at 2m',
        data: temperature_2m,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  const [displayLabels, setDisplayLabels] = useState(window.innerWidth >= 768);
  const [chartKey, setChartKey] = useState(1); // Key for forcing re-render
  const updateDisplayLabels = () => {
    setDisplayLabels(window.innerWidth >= 768);
  };
  useEffect(() => {
    const handleResize = () => {
      setDisplayLabels(window.innerWidth >= 768); // Adjust the breakpoint as needed
      setChartKey((prevKey) => prevKey + 1); // Update key to force re-render
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const options = {
    responsive:true,
    scales: {
      x: {
        ticks: {
          display: displayLabels,
        },
      },
    },
  };

  return <Line key={chartKey}  data={data} options={options}/>;
};

export default TemperaturePlot;
