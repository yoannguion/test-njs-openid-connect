const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware pour décoder un JWT à partir de l'en-tête Authorization
app.get('/', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send(`
      <html>
        <body>
          <h1>Authorization Error</h1>
          <p>Missing or invalid Authorization header. Use a Bearer token.</p>
        </body>
      </html>
    `);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.decode(token, { complete: true });
    if (!decoded) throw new Error("Invalid token format.");

    res.send(`
      <html>
        <body>
          <h1>Decoded JWT</h1>
          <h2>Header</h2>
          <pre>${JSON.stringify(decoded.header, null, 2)}</pre>
          <h2>Payload</h2>
          <pre>${JSON.stringify(decoded.payload, null, 2)}</pre>
          <h2>Signature</h2>
          <pre>${decoded.signature}</pre>
        </body>
      </html>
    `);
  } catch (err) {
    res.status(400).send(`
      <html>
        <body>
          <h1>Error</h1>
          <p>Unable to decode token: ${err.message}</p>
        </body>
      </html>
    `);
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
