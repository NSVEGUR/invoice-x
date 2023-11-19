import { useCallback, useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sort from "@/components/svg/sort";

const Sorter = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSearchParams = useCallback(
    (debouncedValue: string) => {
      let params = new URLSearchParams(window.location.search);
      if (debouncedValue.length > 0) {
        params.set("sort", debouncedValue);
      } else {
        params.delete("sort");
      }
      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, router]
  );

  // EFFECT: Set Initial Params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sortQuery = params.get("sort") ?? "";
    setInputValue(sortQuery);
  }, []);

  // EFFECT: Set Mounted
  useEffect(() => {
    if (debouncedValue.length > 0 && !mounted) {
      setMounted(true);
    }
  }, [debouncedValue, mounted]);

  // EFFECT: Debounce Input Value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  // EFFECT: Search Params
  useEffect(() => {
    if (mounted) handleSearchParams(debouncedValue);
  }, [debouncedValue, handleSearchParams, mounted]);

  const handleSort = (type: "recipient" | "dueDate" | "amount" | "status") => {
    if (inputValue.includes(type)) {
      const types = inputValue.split(",");
      const filtered = types.filter((current) => current != type);
      setInputValue(filtered.join(","));
    } else {
      const types = inputValue.split(",");
      types.push(type);
      setInputValue(types.join(","));
    }
  };

  return (
    <thead className="text-heading bg-muted-secondary">
      <tr>
        <th scope="col" className="px-6 py-3">
          <button
            className="flex items-center gap-1"
            onClick={() => {
              handleSort("recipient");
            }}
          >
            Recipient
            <Sort />
          </button>
        </th>
        <th scope="col" className="px-6 py-3">
          <button
            className="flex items-center gap-1"
            onClick={() => {
              handleSort("amount");
            }}
          >
            Amount
            <Sort />
          </button>
        </th>
        <th scope="col" className="px-6 py-3">
          <button
            className="flex items-center gap-1"
            onClick={() => {
              handleSort("dueDate");
            }}
          >
            Due Date
            <Sort />
          </button>
        </th>
        <th scope="col" className="px-6 py-3">
          <button
            className="flex items-center gap-1"
            onClick={() => {
              handleSort("status");
            }}
          >
            Status
            <Sort />
          </button>
        </th>
        <th scope="col" className="relative px-6 py-3">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default Sorter;
