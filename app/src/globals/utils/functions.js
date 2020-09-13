export function finishedSuccessfully(previous, current) {
  if (!previous || !current) return;

  return previous.loading && !current.loading && !current.error;
}
