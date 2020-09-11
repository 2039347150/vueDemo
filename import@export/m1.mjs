// 声明赋值的同时导出
export var firstName = '三';
export var lastName = '张';

// 声明赋值之后导出
var sex = '男';
var age = 18;
// export { sex, age };
// 通过别名导出
export { sex as s, age as a };


// var role = '管理员';
// export default role;

// export default '启用';

export default {
    name: lastName + firstName,
    sex,
    age,
    role: '管理员',
    status: '启用',
    sayLoveMe,
    sayLoveMe100Times
}

// 导出函数
export function sayLoveMe() {
    console.log('I love you!!');
}

function sayLoveMe100Times() {
    console.log('I love you * 100');
}
export { sayLoveMe100Times }