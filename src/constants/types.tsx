export type Nullable<T> = T | null

export type ResponseMetadata = {
  currentPage: number
  totalPages: number
  count: number
  totalRows: number
  pageSize: number
  links?: PaginationLinks
}

export type PaginationLinks = {
  nextPage: Nullable<string>
  previousPage: Nullable<string>
}

export type TablePaginationData = {
  current: number
  pageSize: number
  total: number
}
