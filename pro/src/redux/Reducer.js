import pic1 from "../img/1.jpg";
var Reducer = (state=[{list:[{
  id:"111",
  total:'99.00',
  sum:1,
  src:pic1,
  price:"99"}]},],action)=>{
  switch(action.type){
    case "add":
    var newstate = [...state];
    newstate[0].list[action.text].sum++;
    return newstate;
    case "sub":
    var newstate = [...state];
    newstate[0].list[action.text].sum--;
    if(newstate[0].list[action.text].sum==0){
      newstate[0].list.splice(action.text,1);
    }
    return newstate;
    case "atl":
    var newstate = [...state];
    for(let i = 0;i<newstate[0].list.length;i++){
      if(action.text==newstate[0].list[i].id){
        newstate[0].list[i].sum++;
        return newstate;
      }
    }
    newstate[0].list.push({id:action.text,
    total:'99.00',
    sum:1,
    src:pic1,
    price:"99"})
    return newstate;
    default:
    return state;
  }
}
export default Reducer;
