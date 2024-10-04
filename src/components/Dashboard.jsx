import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  Users,
  BookOpen,
  Clock,
  BarChart2,
  ShoppingBag,
  Tag,
  PlusCircle,
} from "lucide-react";

ChartJS.register(ArcElement, ChartTooltip, Legend);

const data = [
  { name: "2021-02-03", users: 0 },
  { name: "2021-02-04", users: 0 },
  { name: "2021-02-05", users: 0 },
  { name: "2021-02-06", users: 0 },
  { name: "2021-02-07", users: 0 },
  { name: "2021-02-08", users: 0 },
  { name: "2021-02-09", users: 1 },
];

const blogPosts = [
  {
    title: "Blended Learning: What It Is, Why It Matters & How to Apply",
    daysAgo: 7,
  },
  {
    title: "Join the Course Sales Bootcamp [Free Live Workshops]",
    daysAgo: 12,
  },
  { title: "12 Steps to Creating Awesome Live Classes in 2021", daysAgo: 20 },
  {
    title: "Guy Kawasaki on the Future of Business in the Midst of a Pandemic",
    daysAgo: 22,
  },
  {
    title:
      "What is Educational Marketing & How to Use It to Grow with Examples",
    daysAgo: 23,
  },
];

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invites, setInvites] = useState(50);
  const [duration, setDuration] = useState(2);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    const basePrice = 10;
    const pricePerInvite = 2;
    const pricePerHour = 5;
    return basePrice + invites * pricePerInvite + duration * pricePerHour;
  };

  useEffect(() => {
    setTotalPrice(calculatePrice());
  }, [invites, duration]);

  const chartData = {
    labels: ["Base Price", "Invites", "Duration"],
    datasets: [
      {
        data: [10, invites * 2, duration * 5],
        backgroundColor: ["#14b8a6", "#3b82f6", "#ef4444"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex space-x-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
            <PlusCircle className="inline-block mr-2" />
            Create course
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
            Preview home page
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
            Preview after login page
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
            View welcome screen
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
          >
            Invite
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your school</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
              <button className="text-teal-500 font-medium">New signups</button>
              <button className="text-gray-500">Revenue</button>
              <button className="text-gray-500">Product sales</button>
              <button className="text-gray-500">Active learners</button>
            </div>
            <select className="border rounded p-2">
              <option>Last 7 days</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#14b8a6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2" />
            New users
            <button className="ml-auto text-teal-500 text-sm">see all</button>
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
              😊
            </div>
            <div>
              <p className="font-medium">hubx</p>
              <p className="text-sm text-gray-500">24 minutes</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" />
            How to sell courses blog
            <button className="ml-auto text-teal-500 text-sm">see all</button>
          </h2>
          <ul className="space-y-2">
            {blogPosts.map((post, index) => (
              <li key={index} className="flex items-center">
                <span className="text-teal-500 mr-2">+</span>
                <span className="flex-grow">{post.title}</span>
                <span className="text-sm text-gray-500">
                  {post.daysAgo} days ago
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2" />
            Events Log
            <button className="ml-auto text-teal-500 text-sm">see all</button>
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
              😊
            </div>
            <div>
              <p className="font-medium">hubx</p>
              <p className="text-sm text-gray-500">Logged in</p>
              <button className="text-teal-500 text-sm">more info</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <Users className="text-4xl text-gray-400 mr-4" />
          <div>
            <p className="text-3xl font-bold">1</p>
            <p className="text-sm text-gray-500">All users</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <BarChart2 className="text-4xl text-gray-400 mr-4" />
          <div>
            <p className="text-3xl font-bold">0%</p>
            <p className="text-sm text-gray-500">Conversions</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <ShoppingBag className="text-4xl text-gray-400 mr-4" />
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">30 days sales</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <Clock className="text-4xl text-gray-400 mr-4" />
          <div>
            <p className="text-3xl font-bold">0 min</p>
            <p className="text-sm text-gray-500">Avg time</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <BookOpen className="text-4xl text-gray-400 mr-4" />
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">Courses</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex items-center">
          <Tag className="text-4xl text-gray-400 mr-4" />
          <div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">Course categories</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow col-span-2">
          <h2 className="text-xl font-semibold mb-4">Trial period</h2>
          <div className="flex items-center justify-between">
            <div className="w-24 h-24 rounded-full border-8 border-teal-500 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold">30</p>
                <p className="text-xs">DAYS LEFT</p>
              </div>
            </div>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
              Upgrade now! »
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-2xl h-[600px] w-[1400px] flex gap-10 ">
            <div className="flex-3">
              <h2 className="text-2xl font-bold mb-6">Invite to Event</h2>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Number of Invites: {invites}
                </label>
                <div className="flex justify-between items-center">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={invites}
                    onChange={(e) => setInvites(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4">{invites}</span>
                </div>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Duration of Event: {duration} hours
                </label>
                <div className="flex justify-between items-center">
                  <input
                    type="range"
                    min="0"
                    max="24"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4">{duration} hrs</span>
                </div>
              </div>
              <div className="mb-6 w-[260px]">
                <h3 className="text-xl font-semibold mb-4">Price Breakdown</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Base Price:</span>
                    <span>$10</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Invites ({invites} × $2):</span>
                    <span>${invites * 2}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Duration ({duration} hours × $5):</span>
                    <span>${duration * 5}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t border-gray-300">
                    <span>Total Price:</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
                >
                  Confirm
                </button>
              </div>
            </div>
            <div className=" flex-1">
              <Doughnut
                data={chartData}
                options={{ plugins: { legend: { position: "bottom" } } }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
