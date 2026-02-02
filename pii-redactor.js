const redactPII = (logs) => {
  return logs.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[EMAIL_REDACTED]")
             .replace(/\b\d{10}\b/g, "[PHONE_REDACTED]");
};
