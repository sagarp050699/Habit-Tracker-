import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="heading">Habit Tracker</h1>
      <h2 className="heading">Your Habit</h2>
      <div className="form">
        habits name
        <input type="text" placeholder="Enter Your Habits name" />
        <div>
          Frequency
          <input type="text" placeholder="Enter Enter Your Frequency" />
        </div>
      </div>
    </div>
  );
}
