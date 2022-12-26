import React, { useState, useEffect} from 'react'
import veteransData from '../../data/veterans.json'

const Biographies = () => {
    const [veterans, setVeterans] = useState(veteransData);
    const [filteredVeterans, setFilteredVeterans] = useState(veteransData);
    const [militaryBranch, setMilitaryBranch] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await fetch('./data/veterans.json');
    //             const data = await res.json();
    //             setVeterans(data);
    //             setFilteredVeterans(data);
    //         } catch (error) {
    //             console.log(`ERROR: ${error}`)
    //         }
            
    //     }
    //     fetchData();
    // }, []);

    const handleMilitaryBranchChange = (event) => {
        const selectedBranch = event.target.value;
        setMilitaryBranch(selectedBranch);
        if (selectedBranch === 'All') {
            setFilteredVeterans(veterans);
        } else {
            setFilteredVeterans(veterans.filter(veteran => veteran.militaryBranch === selectedBranch));
        }
    }

    const handleSearchChange = (event) => {
        const searchInput = event.target.value;
        setSearchTerm(searchInput);
        setFilteredVeterans(veterans.filter(veteran => veteran.militaryBranch === militaryBranch && veteran.name.toLowerCase().includes(searchInput.toLowerCase())));
    }


  return (
    <div className='Biographies'>
      <h1>WWII Veterans</h1>
      <label htmlFor="military-branch-select">Filter by Mility Branch:</label>
      <select id="military-branch-select" value={militaryBranch} onChange={handleMilitaryBranchChange}>
        <option value="All">All</option>
        <option value="Army">Army</option>
        <option value="Navy">Navy</option>
        <option value="Air Force">Air Force</option>
        <option value="Marine Corps">Marine Corps</option>
      </select>
      <label htmlFor="search-input">Search by Name:</label>
      <input type="text" id="search-input" value={searchTerm} onChange={handleSearchChange}/>
      {filteredVeterans.map(veteran => (
        <div key={veteran.id} className="veteran">
            <img src={veteran.picture} alt={`Picture of ${veteran.name}`}/>
            <div>
                <h2>{veteran.name}</h2>
                <p>Date of Birth: {veteran.dateOfBirth}</p>
                <p>Military Branch: {veteran.militaryBranch}</p>
                <p>Rank: {veteran.rank}</p>
                {/* <button onClick={() => navigateToVeteranPage(veteran.id)}>View Full Details</button> */}
            </div>
        </div>

      ))}
    </div>
  )
}

export default Biographies
