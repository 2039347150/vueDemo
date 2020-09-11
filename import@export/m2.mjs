import { firstName, lastName } from './m1.mjs';

// 导入函数
import { sayLoveMe, sayLoveMe100Times as aaa } from './m1.mjs'
sayLoveMe();
// sayLoveMe100Times();
aaa();

// 导入设置别名
import { s as gender, a } from './m1.mjs';

console.log(lastName, firstName, gender, a);

import roleName from './m1.mjs';
console.log(roleName);