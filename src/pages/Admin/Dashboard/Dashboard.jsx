/* eslint-disable react/prop-types */
import { FaUsers } from "react-icons/fa6";
import { LuPackagePlus } from "react-icons/lu";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import Loader from "../../../Utils/Loader/Loader";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import useStat from "../../../Hooks/useStat";
import { FaHome } from "react-icons/fa";


const Dashboard = () => {
  const [statistics, statLoading] = useStat()


  const data = [
    { name: "users", value: parseInt(statistics?.users) },
    { name: "TotalBookings", value: parseInt(statistics?.totalBookings) },
    { name: "TotalPackages", value: parseInt(statistics?.totalPackages) },
    { name: "TotalRevenue", value: parseInt(statistics?.revenue / 1000) },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const data1 = [
    {
      name: "users",
      uv: statistics?.users,
      pv: statistics?.totalBookings,
      amt: statistics?.revenue / 1000,
    },
    {
      name: "Bookings",
      uv: statistics?.totalBookings,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Packages",
      uv: statistics?.totalPackages,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "TotalRevenue",
      uv: statistics?.revenue / 1000,
      pv: 3908,
      amt: 2000,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  if (statLoading) {
    return <Loader width="20" center="center" />;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <div className="border flex justify-between items-center w-56 h-20 rounded-lg">
          <div className="h-full text-center bg-violet-700 p-6">
            <FaUsers className="text-white text-center w-16 h-9" />
          </div>
          <div className="p-5">
            <small className="text-sm font-bold">Total users</small>
            <br />
            {statistics.users}
          </div>
        </div>
        <div className="border flex justify-between items-center w-64 h-20 rounded-lg">
          <div className="h-full text-center bg-pink-700 p-6">
          <FaHome className="text-white text-center w-16 h-9" />
          </div>
          <div className="p-8">
            <small className="text-sm font-bold">Total Hotel</small>
            <br />
            {statistics.totalHotel}
          </div>
        </div>
        
        <div className="border flex justify-between items-center w-64 h-20 rounded-lg">
          <div className="h-full text-center bg-blue-700 p-6">
            <FaCartPlus className="text-white text-center w-16 h-9" />
          </div>
          <div className="p-4">
            <small className="text-sm font-bold">Total Bookings</small>
            <br />
            {statistics.totalBookings}
          </div>
        </div>

        <div className="border flex justify-between items-center w-64 h-20 rounded-lg">
          <div className="h-full text-center bg-pink-700 p-6">
            <LuPackagePlus className="text-white text-center w-16 h-9" />
          </div>
          <div className="p-5">
            <small className="text-sm font-bold">Total Package</small>
            <br />
            {statistics.totalPackages}
          </div>
        </div>
        <div className="border flex justify-between items-center w-56 h-20 rounded-lg">
          <div className="h-full text-center bg-green-500 p-6">
            <FaHandHoldingUsd className="text-white text-center w-16 h-9" />
          </div>
          <div className="p-5">
            <small className="text-sm font-bold">Revenue</small>
            <br />
            {statistics.revenue}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around md:mt-24">
        <div className="">
          <PieChart width={500} height={390}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={170}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
        <div>
          <BarChart
            width={600}
            height={400}
            data={data1}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
