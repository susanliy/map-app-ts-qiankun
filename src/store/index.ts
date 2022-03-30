import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';
import {   qiankunModule } from './modules';
import { AllState, RootState } from '@/store/interface';
export const key: InjectionKey<Store<RootState>> = Symbol();
export const APP_ONLINE_HOUR = 'ZDH_ONLINE_HOUR';

// 创建一个新的 store 实例
export default createStore({
  state() {
    return {
      onlineHour: 0,
    };
  },
  mutations: {
    setonLineHour(state: RootState, hour: number) {
      state.onlineHour = hour;
      localStorage.setItem(APP_ONLINE_HOUR, hour + '');
    },
  },
  getters: {
    keepAliveTime(state) {
      if (state.onlineHour == 0) {
        const hour = localStorage.getItem(APP_ONLINE_HOUR);

        if (hour) {
          return Number(hour);
        } else {
          return 2;
        }
      }
      return state.onlineHour;
    },
  },
  //每个模块的添加
  modules: {
    qiankunModule
  },
});

export function useStore<T = AllState>() {
  return baseUseStore<T>(key);
}
