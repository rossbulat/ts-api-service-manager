export type ApiHeader = {
  key: string;
  value: string;
};

export type KeyValue<T, U> = {
  key: T,
  value: U,
};

export type ApiMethod = "POST" | "GET";

export type ArticleCategory = "Typescript" | "React" | "Rust";

export type ApiRequestAuthor = {
  author: string,
  category: ArticleCategory,
};

export type ApiResult = "success" | "failure";

export type ApiError = {
  ErrorCode: string,
  Description: string,
};

export type ApiResponse<T> = {
  Result: ApiResult,
  Response: T | ApiError,
};

export type ApiArticleResponse = {
  author: string,
  category: ArticleCategory,
  description: string,
  is_active: boolean,
};
