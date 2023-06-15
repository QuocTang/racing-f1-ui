import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale);
const BarChart = ({ data, type, notAll }: any) => {
  let key = "Winner";
  let rate = "Laps";
  if (!data || notAll !== "") return null;

  if (type === "drivers") {
    key = "Driver";
    rate = "PTS";
  }
  if (type === "team") {
    key = "Team";
    rate = "PTS";
  }
  if (type === "fastest-laps") {
    key = "Driver";
    rate = "Time";
    return null;
  }

  const handleData = (data: any) => {
    let result = [];
    if (type === "team") {
      result = data.map((item: any) => item[key]);
    } else {
      result = data?.map(
        (item: any) =>
          item[key]
            ?.split("\n")
            .filter((item: string) => item.trim() !== "" && item)[2]
      );
    }
    return result;
  };
  const handleRate = (data: any) => {
    let result = [];
    if (type === "fastest-laps") {
      result = data?.map((entry: any) => {
        console.log("entry: ", entry);
        const [minutes, seconds] = entry[rate]?.split(":");
        const value = parseFloat(minutes) + parseFloat(seconds) / 100;

        return value.toFixed(2);
      });
    } else {
      result = data.map((item: any) => item[rate]);
    }
    return result;
  };

  const dataSet = {
    labels: handleData(data),
    datasets: [
      {
        label: "data",
        data: handleRate(data),
        borderWidth: 1,
        backgroundColor: "red",
      },
    ],
  };
  const options = {
    maintainAspectratio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="w-full h-[600px] flex justify-center mt-[5rem]">
      <Bar data={dataSet} width={1000} height={1000} options={options} />
    </div>
  );
};

export default BarChart;
