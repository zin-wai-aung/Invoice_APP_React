// Utility function to generate a unique invoice number
function generateInvoiceNumber() {
  // Get the current date
  const date = new Date();

  // Format the date as YYYYMMDD
  const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

  // Generate a random number between 1000 and 9999
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  // Combine the formatted date and the random number
  const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;

  return invoiceNumber;
}

export default generateInvoiceNumber;