import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    // 集中式存储
    state: {
        // demo1
        count: 99,
        // demo2
        x: 100,
        y: 100,
        w: 200,
        h: 300
    },
    // 定义修改规则(类似请假规则)
    mutations: {
        // demo1的修改规则
        increment(state) {
            state.count++;
        },
        // demo2的修改规则
        changeX(state, val) {
            state.x = val;
        },
        changeY(state, val) {
            state.y = val;
        },
        changeW(state, val) {
            state.w = val;
        },
        changeH(state, val) {
            state.h = val;
        }
    },
    // 动作(不能通过actions直接修改数据)
    // 可以包含多个commit或者异步操作代码
    actions: {
        drag(context, data) {
            context.commit("changeX", data.x)
            context.commit("changeY", data.y)
        },
        resize(context, data) {
            context.commit("changeX", data.x)
            context.commit("changeY", data.y)
            context.commit("changeW", data.w)
            context.commit("changeH", data.h)
        }
    },
    // 类似vue组件中的计算属性，并且数据不发生变化时会使用缓存
    getters: {
        x2(state) {
            return state.x + state.w
        },
        y2(state) {
            return state.y + state.h
        }
    },
    modules: {
        admin: {},
        other: {},
        bank: {
            // 根据命名空间分离
            namespaced: true,
            state: {
                zs: {
                    money: 1000,
                },
                ls: {
                    money: 500
                }
            },
            mutations: {
                transfer(state, data) {
                    // 扣款
                    state[data.from].money -= data.money
                        //存款
                    state[data.to].money += data.money
                }
            }
        }
    }
})

export default store;