export const capitalize = (text: string): string =>
  text
    .split(" ")
    .map((e: string) => e[0].toUpperCase() + e.substring(1).toLowerCase())
    .join();

// export default { capitalize };
