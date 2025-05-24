import { Bar as RechartsBar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

export function Bar({ data, options }: { data: any; options: any }) {
  return (
    <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <RechartsBar dataKey="value" fill="#8884d8" />
    </BarChart>
  )
}
