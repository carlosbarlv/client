import { ResponseMetadata, TablePaginationData } from '../constants/types'

export const getTablePagination = ({
  currentPage,
  totalRows,
  pageSize,
}: ResponseMetadata): TablePaginationData => {
  return {
    current: currentPage,
    pageSize,
    total: totalRows,
  }
}
