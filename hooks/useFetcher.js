import React, { useEffect, useState } from "react";

export default function useFetcher(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const foo = async () => {
    setLoading(true);
    try {
      const _d = await fetch(url);
      const res = await _d.json();
      setData(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };
  useEffect(() => {
    foo();
  }, []);
  return { loading, data, error };
}
