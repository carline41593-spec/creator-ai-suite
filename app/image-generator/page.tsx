const response = await fetch("https://dollhouse-flux-backend.onrender.com/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: prompt,
  }),
});
