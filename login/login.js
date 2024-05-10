function calculateCharges() {
  const pickupInput = document.getElementById('pickup-datetime');
  const dropoffInput = document.getElementById('dropoff-datetime');

  // Extract the values from the input fields
  const pickupDateTime = new Date(pickupInput.value);
  const dropoffDateTime = new Date(dropoffInput.value);
  
  console.log(pickupDateTime);
  console.log(dropoffDateTime);
  console.log(pickupDateTime.getTime());
  console.log(dropoffDateTime.getTime());

  // Check if the dates are valid
  if (isNaN(pickupDateTime.getTime()) || isNaN(dropoffDateTime.getTime())) {
      alert('Please enter valid pickup and dropoff dates and times.');
      return;
  }

  if (dropoffDateTime <= pickupDateTime) {
      alert('Drop-off date must be after the pickup date.');
      return;
  }

  // Calculate the difference in milliseconds
  const diff = dropoffDateTime - pickupDateTime;
  console.log(diff);

  // Convert difference from milliseconds to hours
  const hours = diff / 3600000; // 1000 ms/sec * 60 sec/min * 60 min/hr
  console.log(hours);

  // Assuming a rate (you could also make this variable by car type or set it elsewhere)
  const hourlyRate = 15; // Example rate in dollars

  // Calculate total charge
  const totalCharge = hourlyRate * hours;

  // Display the total charge
  document.getElementById('total-charge').textContent = `Total Charge: $${totalCharge.toFixed(2)}`;
}
