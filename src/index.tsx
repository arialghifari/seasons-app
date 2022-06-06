import ReactDOM from "react-dom/client";
import "./style.css";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <div>Season App</div>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
