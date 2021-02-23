import { useState } from "react";
import { useActions } from "../hooks/useAction";
import { useSelector } from "react-redux";
export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector(
    (state: any) => state.repositories
  );
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => {
            const { value } = e.target;
            setTerm(value);
          }}
        />
        <button>Search</button>
      </form>
    </div>
  );
};
