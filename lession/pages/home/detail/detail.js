var data = require('../../../data/data.js');
var app = getApp();
Page({
  data: {
    item: {},
    flag:true,
  },
  playMusic() {
    //如果true就是播放  false就是需要暂停
    if(this.data.flag){
        wx.playBackgroundAudio({
          dataUrl: 'http://thirdparty.gtimg.com/C400000pxiwn3bfwf3.m4a?vkey=B4A3488C99AA2F0FA553F7EFCD4E02EEFD53FA815FA66066E32969460E0C67795D8DA24A66FB012D0AAA0BF536B9085CEEC98A8A70742733&guid=4644219857&fromtag=30',
          success:(res)=>{
            app.flag = false;
            this.setData({
                flag:false
            })
          },
        })
    }else{
        wx.pauseBackgroundAudio({
          success: (res)=>{
             app.flag = true;
             this.setData({
                flag:true
            })
          }
        })
    }
  },
  onLoad: function (options) {
    this.setData({
      flag:app.flag
    })
    // 页面初始化 options为页面跳转所带来的参数
    //页面传递的id
    var id = options.id;
    // 如果内部方法中返回true 则item代表的就是返回true的那一项，找到后不会在继续查找
    var item = data.find((item) => {
      return item.id == id;
    });
    this.setData({
      item: item
    });
    //防止用户使用自带的播放，可能导致图片显示不同步
    wx.onBackgroundAudioPlay(()=> {
      app.flag = false;
       this.setData({
          flag:false
      })
    })
    wx.onBackgroundAudioPause(()=>{
      app.flag = true;
       this.setData({
          flag:true
      })
    })
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