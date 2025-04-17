window.addEventListener('DOMContentLoaded', () => {
  // ✅ Safely create client AFTER window load
  const supabase = window.supabase.createClient(
    'https://vaobmohukgcqfvnclqyh.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhb2Jtb2h1a2djcWZ2bmNscXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NTcyNzksImV4cCI6MjA2MDMzMzI3OX0.6pl5QBTVUr8wu3bn4kXhI2kPE5qf97PrIbUw7-0382M'
  );

  document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      alert('Logged in!');
    }
  });
});
