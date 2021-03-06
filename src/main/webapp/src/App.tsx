import { Divider } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import { Project } from "./components/projects/Project";
import Projects from "./components/projects/Projects";
import BtButton from "./components/shared/BtButton";

function App() {
  const [projectState, setProjectState] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects/100", { method: "GET", redirect: "error" })
      .then((res) => res.json())
      .then((data) => {
        setProjectState(data);
      })
      .catch(console.log);
  }, [setProjectState]);

  return (
    <div className="App">
      <h1>Docusign Prototype</h1>
      <Login />
      <BtButton className="logoutButton" text="Logout" link="/logout" />
      <Divider />
      <Projects projects={projectState} setProjects={setProjectState} />
      <Divider />
    </div>
  );
}

export default App;
