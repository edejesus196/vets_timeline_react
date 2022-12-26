import React, {useState} from 'react'

const AddVet = () => {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [militaryBranch, setMilitaryBranch] = useState('');
    const [rank, setRank] = useState('');
    const [picture, setPicture] = useState('');
    const [biography, setBiography] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitting(true);
        setSubmitSuccess(false);
        setSubmitError(null);
    
        try {
          const formData = new FormData();
          formData.append('name', name);
          formData.append('dateOfBirth', dateOfBirth);
          formData.append('militaryBranch', militaryBranch);
          formData.append('rank', rank);
          formData.append('picture', picture);
          formData.append('biography', biography);
          const res = await fetch('/submit-veteran', {
            method: 'POST',
            body: formData
          });
          if (!res.ok) {
            throw new Error(res.statusText);
          }
          setSubmitSuccess(true);
        } catch (error) {
          setSubmitError(error);
        } finally {
          setSubmitting(false);
        }
      }

  return (
    <form className="submit-veteran-form" onSubmit={handleSubmit}>
      <h1>Submit Veteran Information</h1>
      {submitSuccess && <p className="success">Successfully submitted veteran information!</p>}
      {submitError && <p className="error">{submitError.message}</p>}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
        required
      />
      <label htmlFor="date-of-birth">Date of Birth:</label>
      <input
        type="date"
        id="date-of-birth"
        value={dateOfBirth}
        onChange={event => setDateOfBirth(event.target.value)}
        required
      />
      <label htmlFor="military-branch">Military Branch:</label>
      <select
        id="military-branch"
        value={militaryBranch}
        onChange={event => setMilitaryBranch(event.target.value)}
        required
      >
        <option value="">Select a military branch</option>
        <option value="Army">Army</option>
        <option value="Navy">Navy</option>
        <option value="Air Force">Air Force</option>
        <option value="Marine Corps">Marine Corps</option>
      </select>
      <label htmlFor="rank">Rank:</label>
      <input
        type="text"
        id="rank"
        value={rank}
        onChange={event => setRank(event.target.value)}
        required
      />
      <label htmlFor="picture">Picture:</label>
      <input
        type="file"
        id="picture"
        accept="image/*"
        onChange={event => setPicture(event.target.files[0])}
      />
      <label htmlFor="biography">Biography:</label>
      <textarea
        id="biography"
        value={biography}
        onChange={event => setBiography(event.target.value)}
        required
      />
      <button type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  )
}

export default AddVet
