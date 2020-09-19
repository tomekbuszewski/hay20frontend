export const FETCH_META_QUERY = "FETCH_META_QUERY";
export const fetchMetaQuery = async (query: string) => {
  const result = await fetch(
    `https://vercel-test.tomekbuszewski.vercel.app/api?q=${query}`,
  );
  return await result.json();
};
