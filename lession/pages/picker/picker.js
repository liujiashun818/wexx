// pages/picker/picker.js
Page({
  data:{
    date:"14:00",
    time:'2016-12-01',
    array:["吃","喝","玩"],
    val:'',
    foods:['面包','馒头','米饭'],
    drinks:['可乐','水']
  },
  timeEvnt(e){
    this.setData({
      time:e.detail.value
    })
  },
  selector(e){
    this.setData({
      val:this.data.array[e.detail.value]
    })
     
  },
  picks(e){
      console.log(e.detail.value)
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})