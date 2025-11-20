"use client";

import { useState } from "react";

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    setImageUrl("");

    try {
      const response = await fetch("https://dollhouse-flux-backend.onrender.com/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setImageUrl(data.image_url);
    } catch (err) {
      console.error("Error generating image:", err);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Image Generator</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your image prompt..."
        style={{ width: "100%", height: 120, marginBottom: 20 }}
      />

      <button
        onClick={generateImage}
        style={{ padding: "10px 20px", fontSize: 16 }}
      >
        Generate
      </button>

      {loading && <p>Generating image...</p>}

      {imageUrl && (
        <div>
          <h3>Generated Image:</h3>
          <img src={imageUrl} alt="Generated" style={{ width: 300, marginTop: 20 }} />
        </div>
      )}
    </div>
  );
}
