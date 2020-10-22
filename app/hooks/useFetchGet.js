import { use, useState, useEffect } from "react";
import instance from "../utils/axios.conf";
import get from "lodash.get";

export default (url, path, dependencies = []) => {
  const [state, setState] = useState({ data: null, loading: false });

  useEffect(() => {
    setState({ data: null, loading: true });
    instance
      .get(url)
      .then((response) => get(response.data, path, []))
      .then((data) => setState({ data, loading: true }));
  }, dependencies);

  return state;
};
