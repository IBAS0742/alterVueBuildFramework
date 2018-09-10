/**
 * createTime: 2018-09-10T08:29:07.554Z
 */
import home from './home.vue'
import testOne from './pages/test1/testOne/testOne.vue';
import testTwo from './pages/test1/testTwo/testTwo.vue';
import testThree from './pages/test2/testThree/testThree.vue';
let routers = [
	{        path : '/',        component: home,        name: '主页'      },{          path: '/testOne',          component: testOne,          name: 'testOne'        },{          path: '/testTwo',          component: testTwo,          name: 'testTwo'        },{          path: '/testThree',          component: testThree,          name: 'testThree'        }
];
export default routers;