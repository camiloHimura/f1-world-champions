import * as ERROR_MESSAGES from "./ErrorMessages.js";

const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || `http://ergast.com/api/f1/`;
const API_TIMEOUT = 5000;

export { PORT, API_URL, ERROR_MESSAGES, API_TIMEOUT };
