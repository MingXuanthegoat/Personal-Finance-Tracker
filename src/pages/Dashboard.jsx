// rrd imports
import { useLoaderData } from "react-router-dom";

//  helper functions
import { fetchData } from "../Helpers";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return (
    <div>
      <h2>Hello</h2>
      Username: {userName}
    </div>
  );
};
export default Dashboard;
