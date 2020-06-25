import React from "react";

import { useNewsQuery } from "src/ui/hooks/useNewsQuery";
import Home from "src/ui/page_components/Home";

const index = () => {
  const { state, api } = useNewsQuery();
  const { data, error, loading } = state;
  const { submitHandler } = api;

  return (
    <Home
      submitHandler={submitHandler}
      loading={loading}
      error={error}
      data={data}
    />
  );
};

export default index;
