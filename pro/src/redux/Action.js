
var Action={
  add(text){
    return {
      type:"add",
      text:text,
    }
  },
  sub(text){
    return {
      type:"sub",
      text:text,
    }
  },
  atl(text){
    return {
      type:'atl',
      text:text,
    }
  }
}
export default Action;
