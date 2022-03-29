export function useQianKunProps(){
    const emptyAction = ()=>{
        console.warn('Current execute action is empty!');  
    }
   let actions ={ 
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction,}
    /**
     * 设置 actions
     */
        const setActions=(val:any)=> {actions=val}


    /**
     * 映射
     */
    let onGlobalStateChange=(args: any)=> {
        actions.onGlobalStateChange= args ;
        return;
    
    }
  
   /**
     * 映射
     */
    const setGlobalState=(args:any)=> {
        return;
 
        actions.setGlobalState=args;
    }

return{actions,onGlobalStateChange,setGlobalState,setActions}
}