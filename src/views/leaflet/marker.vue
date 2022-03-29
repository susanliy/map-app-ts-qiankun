<template>
<hr>
 子应用：
   <p>接收到的消息：{{mes}}</p>
    <button @click="butClick">点击向父应用发送消息</button>
  
</template>
<script setup lang="ts">
import {useQianKunProps}  from '@/hooks/useQianKun'
import { ref} from 'vue'
/***qiankun ***/
const {onGlobalStateChange,setGlobalState} = useQianKunProps()
    let mes = ref("")
    
      onGlobalStateChange((state: any) => {
        console.log('state111',state)
      //监听全局状态
      mes = state
      });

  const butClick =()=>{
    setGlobalState({ project_id: '项目99' })//改变全局状态
  }
</script>


