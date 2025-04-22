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

  const token = localStorage.getItem('token'); // Get the token from local storage

  try {
      const response = await fetch('https://carbon-footprint-tracker-rqfh.onrender.com/api/activity', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` // Include the token here
          },
          body: JSON.stringify(data)
      });

      const result = await response.json();
      if (response.ok) {
          document.getElementById('result').innerText = `Your carbon footprint: ${result.footprint} kg CO₂`;
      } else {
          document.getElementById('result').innerText = `Error: ${result.msg}`;
      }
  } catch (error) {
      console.error(error);
      document.getElementById('result').innerText = 'Error connecting to backend.';
  }
});
