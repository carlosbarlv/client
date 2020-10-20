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

type NotificationParametersType = {
  title: string,
  description: string,
  type: NotificationType,
  onClick?: () => void
}

export const showNotification = (
  parameters: NotificationParametersType
): void => {
  notification[parameters.type]({
    message: parameters.title,
    description: parameters.description,
    onClick: parameters.onClick
  })
}

const date = new Date()
export const currentDate = `${
  date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
}/${
  date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
}/${date.getFullYear()} 
    ${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${
  date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
} ${date.getHours() - 12 > 0 ? 'pm' : 'am'}`
