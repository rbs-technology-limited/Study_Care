import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

export default isFetchBaseQueryError;
