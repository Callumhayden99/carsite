import { app } from './server.js';

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
