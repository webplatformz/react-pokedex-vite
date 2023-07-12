import { Link } from "react-router-dom";

type PokeListEntryProps = {
  name?: string;
};
export function PokeListEntry({ name = "Bulbasaur" }: PokeListEntryProps) {
  return (
    <li>
      <Link to={`./${name}`}>{name}</Link>
    </li>
  );
}
