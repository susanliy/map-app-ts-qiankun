<template>
<hr>
 子应用：
   <p>接收到的消息：{{mes}}</p>
    <button @click="butClick">点击向父应用发送消息</button>
  
</template>
<script setup lang="ts">
import {useQianKunProps}  from '@/hooks/useQianKun'
import {useStore} from '@/store';
import {computed} from 'vue'
import store1 from '@/store'


/***qiankun ***/
const store= useStore()
const mes = computed(()=>store1?.state?.qiankunModule?.activeMenu)

const {setGlobalState} = useQianKunProps()

  const butClick =()=>{
      store1.commit('qiankunModule/setActiveMenu',111)
    setGlobalState({ project_id: '项目99' })//改变全局状态
  }
</script>


