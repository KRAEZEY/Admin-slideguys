// Initialize Supabase
const supabase = window.supabase.createClient(
  'https://vaobmohukgcqfvnclqyh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhb2Jtb2h1a2djcWZ2bmNscXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NTcyNzksImV4cCI6MjA2MDMzMzI3OX0.6pl5QBTVUr8wu3bn4kXhI2kPE5qf97PrIbUw7-0382M'
);

// Login form handler
document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorEl = document.getElementById('error');

  const { user, session, error } = await supabase.auth.signIn({ email, password });

  if (error) {
    errorEl.textContent = error.message;
  } else {
    window.location.href = 'dashboard.html'; // Redirect after login
  }
});
