import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const defaultOptions = {
    
}

const defaultData = {

}

export default function BarChart({ options = {defaultOptions}, data= {defaultData} }) {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Earnings',
                data: data.values,
                backgroundColor: 'rgba(77,255,86,1)',
            },
        ],
    };

    return <Bar options={options} data={chartData} />;
}
