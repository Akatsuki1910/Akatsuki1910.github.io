export const timeAwait = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
