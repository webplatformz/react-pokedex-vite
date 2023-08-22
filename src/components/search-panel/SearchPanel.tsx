type Props = {
  searchTerm: string;
  onSearchChanged: (searchTerm: string) => void;
};

function SearchPanel({ searchTerm, onSearchChanged }: Props) {
    
  return (
    <div>
      <label htmlFor="searchTerm">Search</label>
      <input
        type="text"
        id="searchTerm"
        value={searchTerm}
        placeholder="Pokemon name"
        onChange={(e) => {
          onSearchChanged(e.target.value);
        }}
      />
    </div>
  );
}

export { SearchPanel };
