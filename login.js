const supabaseUrl = 'https://vaobmohukgcqfvnclqyh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhb2Jtb2h1a2djcWZ2bmNscXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NTcyNzksImV4cCI6MjA2MDMzMzI3OX0.6pl5QBTVUr8wu3bn4kXhI2kPE5qf97PrIbUw7-0382M';

const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { user, session, error } = await supabase.auth.signIn({ email, password });

  const errorEl = document.getElementById('error');
  if (error) {
    errorEl.textContent = "Error: " + error.message;
    console.error("Login failed:", error.message);
  } else {
    errorEl.textContent = '';
    alert('Login successful!');
    // window.location.href = '/admin/dashboard.html';
  }
});
