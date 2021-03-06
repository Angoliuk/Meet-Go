import { useState, useCallback } from "react";

export const useHttp = () => {
  const [xTotalCount, setXTotalCount] = useState(0);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }

        const response = await fetch(`http://localhost:5000${url}`, {
          method,
          body,
          headers,
        });

        setXTotalCount(Number(response.headers.get(["X-Total-Count"])));

        const data = await response.json();

        if (!response.ok) {
          const newError = new Error(`${data}` || "Unknown error");
          newError.name = `Error status ${response.status}`;
          throw newError;
        }

        return data;
      } catch (e) {
        throw e;
      }
    },
    []
  );

  return { request, xTotalCount };
};
