import './App.css'

function App() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch(`http://${window.location.hostname}:5000/silviu`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert('Successfully inserted into Silviu table!');
        e.currentTarget.reset();
      } else {
        alert('Error inserting data');
      }
    } catch (error) {
      console.error(error);
      alert('Network error');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Insert into Silviu Table</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" name="age" />
        </div>
        <div>
          <label>Address: </label>
          <input type="text" name="address" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
