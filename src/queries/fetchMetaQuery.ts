export const FETCH_META_QUERY = "FETCH_META_QUERY";
export const fetchMetaQuery = async (query: string) => {
  const result = await fetch(`https://thdayw.deta.dev/?q=${query}`);
  return await result.json();
};
