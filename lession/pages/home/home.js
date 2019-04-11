var list = require('../../data/data.js');
Page({
  data:{
    imgs:[
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg',
      '/images/banner4.jpg'
    ],
    msg:'hello',
    lists:[]
  },
  bindToDetail(e){
   console.log(e.currentTarget.dataset.uid)
    //e事件源源 e.currentTarget
    wx.navigateTo({
      url: 'detail/detail?id='+e.currentTarget.dataset.uid
    });
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //设置数据到data中中
    this.setData({
      lists:list
    });
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