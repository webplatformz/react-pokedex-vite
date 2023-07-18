export async function fetcher<T>(uri: string): Promise<T> {
  const response = await fetch(uri);
  if (!response.ok) throw new Error("Could not fetch data!");
  return response.json();
}
