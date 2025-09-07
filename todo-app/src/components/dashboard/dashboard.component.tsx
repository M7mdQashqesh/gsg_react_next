import { useMemo } from "react";
import type { ITodoItem } from "../../types";
import "./dashboard.css";

interface IProps {
  items: ITodoItem[];
}

function Dashboard(props: IProps) {
  const urgentCount: number = useMemo(() => {
    return props.items.filter((item) => item.isUrgent).length;
  }, [props.items]);
  const completedCount: number = useMemo(() => {
    return props.items.filter((item) => item.isDone).length;
  }, [props.items]);

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
