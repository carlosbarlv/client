import { ResponseMetadata, TablePaginationData } from '../constants/types'
import { notification } from 'antd'

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

export const updateObjectArray = <T, K extends keyof T>(
  targetArray: T[],
  updatedElement: T,
  targetKey: K
): T[] => {
  const targetIndex = targetArray.findIndex(
    (arrayElement: T) => arrayElement[targetKey] === updatedElement[targetKey]
  )

  targetArray[targetIndex] = updatedElement

  return [...targetArray]
}

type NotificationType = 'success' | 'error' | 'info' | 'warning'

export const showNotification = (
  title: string,
  description: string,
  type: NotificationType,
  onClick?: () => void
): void => {
  notification[type]({
    message: title,
    description,
    onClick,
  })
}
