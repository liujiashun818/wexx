// pages/note/note-detail/note-detail.js
Page({
  data:{
    title:'',
    content:''
  },
  val1(e){
   this.setData({
     title:e.detail.value
   })
  },
  val2(e){
   this.setData({
     content:e.detail.value
   })
  },
  addEvent(){
    var obj = {title:this.data.title,content:this.data.content};
    var lists = wx.getStorageSync('lists')||[];
    lists.push(obj);
    wx.setStorageSync('lists', lists);
    wx.navigateBack({})
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