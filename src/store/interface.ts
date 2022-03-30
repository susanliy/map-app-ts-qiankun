import { qiankunModule } from './modules/qiankun';

export interface RootState {
[x: string]: any;
  onlineHour: number;
}


export interface HeaderState {
  activeMenu: any;
}

export interface AppState {
  mainValue: any;
  visibleApply: boolean;
  shouldScrollIntoViewByGrowth: boolean;
  showLoading: boolean;
}

interface IUserInfo {
  name: string;
  merchantSSID: string;
}

export interface UserState {
  token: string;
  expiresTime: string;
  userName: string;
}
export interface AllState extends RootState {
  [x: string]: any;

  headerModule: HeaderState;
  appModule: AppState;
  qiankunModule:HeaderState
}
