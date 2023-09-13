import '../styles/searchBar.css'

function SearchForm() {
    function FormSubmit(event) {
        let searchValue = ((document.getElementById('searchName').value));
        event.preventDefault();
        console.log(searchValue)
    }
    return (
        <form name="searchForm" id="searchBarForm" onSubmit={FormSubmit}>
        <input type="text" id="searchName" placeholder="Enter location here..." />
        </form>
    )
}

export default SearchForm