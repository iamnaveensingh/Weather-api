let lastRequestTime = 0;

export const rateLimiter = (req, res, next) => {
  const now = Date.now();
  const elapsed = now - lastRequestTime;

  if (elapsed < 1000 * 10) {
    const deuration = Math.floor(11 - elapsed / 1000);
    // If less than 10 seconds have passed since the last request, respond with an error
    return res.status(429).json({
      message: `You can make another request after ${deuration} seconds.`,
    });
  }
  // If 10 seconds or more have passed, update the lastRequestTime and proceed with the request
  lastRequestTime = now;
  next();
};
