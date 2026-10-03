import { useState } from 'react'
import './App.css'

function App() {
  const [age, setAge] = useState(30)

  return (
    <main style={{ maxWidth: 480, margin: '4rem auto', fontFamily: 'system-ui', textAlign: 'center' }}>
      <h1>Hack Dry Run</h1>
      <p>Sundai Hack 143 · Biomarkers of Aging · 2026-10-04</p>
      <label>
        Your age: <strong>{age}</strong>
        <br />
        <input
          type="range"
          min="18"
          max="90"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          style={{ width: '100%', marginTop: '1rem' }}
        />
      </label>
      <p style={{ marginTop: '2rem', color: '#666' }}>
        If you can read this on a public URL, the pipeline works.
      </p>
    </main>
  )
}

export default App
