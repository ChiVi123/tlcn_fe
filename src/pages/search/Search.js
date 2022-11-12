import { useParams } from 'react-router-dom';

function Search() {
    const { id } = useParams();

    return <div>Search working {id}</div>;
}

export default Search;
