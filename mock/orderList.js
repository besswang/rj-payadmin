import Mock from 'mockjs'
export const orderList = [{
  path: 'orderList',
  data: {
    code: "SUCCESS",
    data: {
      endRow: 10,
      firstPage: 1,
      hasNextPage: true,
      hasPreviousPage: false,
      isFirstPage: true,
      isLastPage: false,
      lastPage: 5,
      navigatePages: 8,
      navigatepageNums: [1, 2, 3, 4, 5],
      nextPage: 2,
      orderBy: null,
      pageNum: 1,
      pageSize: 10,
      pages: 5,
      prePage: 0,
      size: 10,
      startRow: 1,
      total: 41,
      'list|9':[
        {
          accountNotes: null,
          backTime: null,
          'channelId|+1': 1,
          gmt: '@date',
          'id|+1': 4,
          'money|1-1000': 10,
          orderNumber: "2019032848520",
          payNumber: null,
          payType: null,
          remarks: null,
          'serviceMoney|10.2-2': 1,
          'serviceRate|1.1-2': 1,
          type: "PENDING_PAYMENT",
          upt: 1553761608000,
          version: 1
        }
      ]
    },
    msg: "成功",
    success: true
  }
}]
