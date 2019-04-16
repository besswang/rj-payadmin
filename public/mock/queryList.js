import Mock from 'mockjs'
export const queryList = [{
  path: 'queryList',
  data: {
    code: "SUCCESS",
    data: {
      endRow: 10,
      firstPage: 1,
      hasNextPage: true,
      hasPreviousPage: false,
      isFirstPage: true,
      isLastPage: false,
      lastPage: 2,
      navigatePages: 8,
      navigatepageNums: [1, 2],
      nextPage: 2,
      orderBy: null,
      pageNum: 1,
      pageSize: 10,
      pages: 2,
      prePage: 0,
      size: 10,
      startRow: 1,
      total: 18,
      'list|9':[
        {
          gmt: '@date',
          'id|+1': 1,
          name: '@cname',
          'status|1': [true,false],
          upt: 1555392279000,
          url: "www.baidu.com"
        }
      ]
    },
    msg: "成功",
    success: true
  }
}]
