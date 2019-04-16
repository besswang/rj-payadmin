import Mock from 'mockjs'
import { login } from './login'
import { setting } from './setting'
import { queryList } from './queryList'
import { toUpTypeList } from './toUpTypeList'
import { toUpMoneyList } from './toUpMoneyList'
import { toUpMethodList } from './toUpMethodList'
import { orderList } from './orderList'
let data = [].concat(login, setting, queryList, toUpTypeList, toUpMoneyList, toUpMethodList, orderList);
data.forEach(function (res) {
  if (res) {
    Mock.mock(res.path, res.data);
    // 输出结果
    //console.log(Mock.mock(res.data), null, 4)
  }
});

export default Mock;
