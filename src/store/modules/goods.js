const goods = {
    namespaced: true,
    state(){
       return{
        count:100,
        num:200,
        price: 66
       } 
     },
     mutations:{
         add(state,value){
             state.count+=value
         },
         sub(state,value){
             state.count-=value
         },
         reset(state,value){
             state.count=value
         }
     },
     actions:{
         getServer(store,value){
             setTimeout(() => {
                 store.commit('reset',8888)
             }, 1000);
         }
     },
     getters:{
         all(state){
             return state.count * state.price * 0.85
         }
     }
}
export default goods