export const errorMiddleWare = (err, req, res, next) => {
  // Check if err is an instance of Error (which it should be)
  const statusCode = err?.statusCode || 500;
  const message = err?.message || 'Internal Server Error';

  // Ensure that the stack trace is available only in development mode
  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === 'development' ? err?.stack : undefined,
  });
}


