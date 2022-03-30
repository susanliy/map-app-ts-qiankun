import type { Module } from 'vuex';
import { RootState, HeaderState } from '@/store/interface';

export const qiankunModule = {
  namespaced: true,
  state: () => ({
    activeMenu: [],
  }),
  actions: {},
  mutations: {
    setActiveMenu(state: { activeMenu: any; }, payload: any) {
      state.activeMenu = payload;
    },
  },
  getters: {},
};
