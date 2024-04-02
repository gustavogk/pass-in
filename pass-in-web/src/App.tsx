import { AttendeeList } from "./components/AttendeeList";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="bg-orange-400">
      <Header />
      <AttendeeList />
    </div>
  );
}
