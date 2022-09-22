import React, { useEffect, useState } from "react";

export default function useFetcher(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const foo = async () => {
    setLoading(true);
    try {
      const _d = await fetch(url);
      const res = await _d.json();
      setData(res);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    foo();
  }, []);
  return { loading, data, error };
}
