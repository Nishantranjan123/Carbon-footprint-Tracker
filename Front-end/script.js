document.getElementById('activityForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const travel = document.getElementById('travel').value;
    const food = document.getElementById('food').value;
    const energy = document.getElementById('energy').value;
  
    const data = {
      travel: parseFloat(travel),
      food,
      energy: parseFloat(energy)
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/add-activity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      document.getElementById('result').innerText = `Your carbon footprint: ${result.footprint} kg CO₂`;
    } catch (error) {
      console.error(error);
      document.getElementById('result').innerText = 'Error connecting to backend.';
    }
  });
  