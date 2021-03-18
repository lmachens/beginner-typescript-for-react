import { useCallback, useState } from "react";

const useAsync = (asyncFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const doFetch = useCallback(
    async (...args) => {
      try {
        setLoading(true);
        setError(null);
        setData(null);
        const newData = await asyncFunction(...args);
        setData(newData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );

  return {
    data,
    loading,
    error,
    doFetch,
  };
};

export default useAsync;
