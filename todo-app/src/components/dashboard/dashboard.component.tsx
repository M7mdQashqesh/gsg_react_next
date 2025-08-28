import type { ITodoItem } from "../../types";
import "./dashboard.css";

interface IProps {
  items: ITodoItem[];
}

function Dashboard(props: IProps) {
  const urgentCount: number = props.items.filter(
    (item) => item.isUrgent
  ).length;
  const completedCount: number = props.items.filter(
    (item) => item.isDone
  ).length;

  return (
    <div className="dashboard-wrapper">
      <div>
        <b>{props.items.length}</b>
        <span>Created Tasks</span>
      </div>
      <div>
        <b>{urgentCount}</b>
        <span>Urgent Tasks</span>
      </div>
      <div>
        <b>{completedCount}</b>
        <span>Completed Tasks</span>
      </div>
    </div>
  );
}

export default Dashboard;
