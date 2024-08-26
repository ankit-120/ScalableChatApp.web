import { Select } from "antd";
import axios from "axios";
import debounce from "lodash.debounce";
import React, { useCallback, useState } from "react";
import { User } from "../types";

const DebounceSelect = ({
  url,
  handleSelect,
  value,
}: {
  url: string;
  handleSelect: (value: string) => void;
  value: string | undefined;
}) => {
  const [options, setOptions] = useState<
    [{ key: string; value: string }] | undefined
  >();

  const debouncedSearch = useCallback(
    debounce(async (searchString: string) => {
      const data = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/searchUsers?query=${searchString}`,
        {
          withCredentials: true,
        }
      );
      console.log({ data });
      setOptions(
        data.data.data.map((el: User) => ({
          label: el.name,
          value: JSON.stringify(el),
        }))
      );
    }, 500),
    []
  );

  const handleSearch = (searchString: string) => {
    if (searchString.length != 0) {
      debouncedSearch(searchString);
    } else {
    }
  };

  return (
    <div className="mx-4 my-2">
      <Select
        showSearch={true}
        onSearch={handleSearch}
        options={options}
        value={value}
        size="large"
        onChange={handleSelect}
        style={{ width: "100%" }}
        // onChange={}
      />
    </div>
  );
};

export default DebounceSelect;
