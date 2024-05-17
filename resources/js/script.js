	
	function calculatePayment() {
  // Get user input values
  const loanAmount = document.getElementById("loan-amount").value;
  const interestRate = document.getElementById("interest-rate").value;
  const loanTerm = document.getElementById("loan-term").value;

  // Validate user input (optional)
  // ... (add validation logic here)

  // Calculate monthly interest rate (convert to decimal)
  const monthlyInterest = interestRate / (100 * 12);

  // Calculate loan term in months
  const totalMonths = loanTerm * 12;

  // Apply the home loan payment formula (replace with your preferred formula)
  const monthlyPayment = loanAmount * (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -totalMonths)));

  // Format the output (optional)
  const formattedPayment = monthlyPayment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

  // Display the calculated payment
  document.getElementById("payment-result").innerHTML = "Your estimated monthly payment is: " + formattedPayment;
}