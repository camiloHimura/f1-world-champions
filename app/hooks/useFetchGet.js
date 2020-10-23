import { useState, useEffect } from "react";
import instance from "../utils/axios.conf";
import get from "lodash.get";

export default ({ url, path, dependencies = [], map = (data) => data }) => {
  const [state, setState] = useState({ data: null, loading: false });

  useEffect(() => {
    const validDependency =
      dependencies.length == 0 ||
      dependencies.some((element) => Boolean(element));

    if (!validDependency) {
      return;
    }

    setState({ data: null, loading: true });
    instance
      .get(url)
      .then((response) => get(response.data, path, []))
      .then((data) => map(data))
      .then((data) => setState({ data, loading: false }));
  }, dependencies);
  console.log(state);
  return state;
};
