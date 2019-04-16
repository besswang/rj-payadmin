import Mock from 'mockjs'
export const toUpMethodList = [{
  path: 'toUpMethodList',
  data: {
    code: "SUCCESS",
    data: [
      {
        gmt: 1553754213000,
        id: 3,
        name: "线下扫码支付",
        sort: 3,
        status: false,
        type: "LINE_SCAN_CODE",
        upt: 1554792338000,
        version: 1
      },
      {
        gmt: 1553754200000,
        id: 2,
        name: "支付宝支付",
        sort: 4,
        status: false,
        type: "AILI_PAY",
        upt: 1554792334000,
        version: 1
      },
      {
        gmt: 1553754190000,
        id: 1,
        name: "微信支付",
        sort: 51,
        status: true,
        type: "WX",
        upt: 1554792304000,
        version: 1
      }
    ],
    msg: "成功",
    success: true
  }
}]
