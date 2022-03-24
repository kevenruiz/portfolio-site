import { useEffect, useState } from "react";
import { fetchAllPoems, fetchOnePoem } from '../services/ApiCalls'


export const poemDetail = (id) => {

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchOnePoem(id)
      .then(setDetails)
      .finally(() => setLoading(false));
  }, [id]);

  return { details, loading };
};

export const listPoem = () => {
  const [loading, setLoading] = useState(true);
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    fetchAllPoems()
      .then(setPoems)
      .finally(() => setLoading(false));
  }, []);
};