// pages/animation/animation.js
Page({
  data: {
    animate: {}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var animate = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '50% 50% 0',
    });
    //每次执行好一次动画后调用一次step即可
    animate.skew(40).rotate(60).step();
    animate.skew(90).rotate(30).step();
    this.setData({
      animate: animate.export()
    });
    //export必须导出后才可以执行下一次的动画
    // setTimeout(() => {
    //   animate.translate(200, 200).step();
    //   this.setData({
    //     animate
    //   });
    // }, 3000)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})