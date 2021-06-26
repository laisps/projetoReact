import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import "./styles.css";

function GitHub() {
  const [repositories, setRepositories] = useState([]);
  const [repositoreFilter, setFilter] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    async function Dados() {
      const response = await fetch("https://api.github.com/users/laisps/repos");
      const data = await response.json();

      setRepositories(data);
    }
    Dados();
  }, []);

  useEffect(() => {
    setFilter(
      repositories.filter((repo) => {
        return repo.name.includes(search);
      })
    );
  }, [search, repositories]);

  return (
    <div>
      <Menu />
      <input
        type="text"
        placeholder="Digite o nome do repositorio que deseja encontrar"
        onChange={(e) => {
          setsearch(e.target.value.toLowerCase());
        }}
      />
      <ul className="repos">
        {repositoreFilter.map((repo) => {
          return (
            <li className="repositores" key={repo.id}>
              {repo.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GitHub;
