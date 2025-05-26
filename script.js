// Handle voice input
function startVoiceInput() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = async (event) => {
    const text = event.results[0][0].transcript;
    document.getElementById('result').innerText = `You said: ${text}`;
    await logTransaction(text, 'voice');
  };
}

// Handle image upload (simulate with fake OCR for now)
async function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    // Simulated OCR result
    const fakeText = "Expense ₦300 on drinks";
    document.getElementById('result').innerText = `Photo analyzed: ${fakeText}`;
    await logTransaction(fakeText, 'image');
  }
}

// Save to Supabase
async function logTransaction(description, method) {
  const { data, error } = await supabase
    .from('transactions')
    .insert([{ description, method }]);

  if (error) {
    alert('Error saving data');
    console.error(error);
  } else {
    fetchTransactions();
  }
}

// Display transactions
async function fetchTransactions() {
  const { data } = await supabase
    .from('transactions')
    .select('*')
    .order('created_at', { ascending: false });

  const list = data.map(tx => `<li>${tx.created_at.split('T')[0]} - ${tx.description}</li>`).join('');
  document.getElementById('transactions').innerHTML = `<ul>${list}</ul>`;
}

window.onload = fetchTransactions;
