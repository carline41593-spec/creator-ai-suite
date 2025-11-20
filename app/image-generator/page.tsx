const response = await fetch("https://dollhouse-flux-backend.onrender.com/generate", {
  method: "POST",
  body: JSON.stringify({ prompt }),
  headers: { "Content-Type": "application/json" }
});
