const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// serve static build
app.use(express.static('dist'));
app.get('/health', (_, res) => res.send('ok'));

// SPA fallback (for React Router)
app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});