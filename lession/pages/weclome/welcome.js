// pages/weclome/welcome.js
Page({
  data:{},
  bindToHome(){
    // 重定向 没有返回按钮
    // wx.redirectTo({
    //   url: '../home/home',
    // });
    // wx.navigateTo({
    //   url: '../home/home',
    // });
    //如果有tabbar只能使用switchTab方式切换
    wx.switchTab({
      url: '../home/home',
    })
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