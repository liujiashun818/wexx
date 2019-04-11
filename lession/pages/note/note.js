// pages/note/note.js
Page({
  data: {
    notes: [
    ],
    index: 1,
    flag: false
  },
  bindToDetail() {
    wx.navigateTo({
      url: 'note-detail/note-detail',
    })
  },
  clearEvent() {
    //用来处理界面反馈的
    //不会阻塞用户处理，只有提示作用
    // wx.showToast({
    //   title:'删除成功'
    // })
    // wx.showModal({
    //   title: '是否删除么',
    //   content: '你确定么亲',
    //   success:  (res)=>{
    //     if (res.confirm) {
    //       wx.clearStorageSync();
    //       this.setData({
    //         notes: []
    //       })
    //     }
    //   }
    // })

    wx.showActionSheet({
      itemList: ['删除'],
      success: (res)=>{
        if(res.tapIndex==0){
           wx.clearStorageSync();
          this.setData({
            notes: []
          })
        }
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })

  },
  onLoad: function (options) {

  },
  onPullDownRefresh() {
    wx.showNavigationBarLoading()
    setTimeout(function () {
      wx.stopPullDownRefresh();
       wx.hideNavigationBarLoading()
    }, 1000);
  },
  lazyLoad() {
    this.setData({
      flag: true
    })
    var index = this.data.index + 1;
    var notes = wx.getStorageSync('lists') || [];
    setTimeout(() => {
      this.setData({
        notes: notes.slice(0, index * 5).reverse(),
        index,
        flag: false
      });
    }, 1000)
  },
  onReady: function () {
    // 页面渲染完成
    console.log('onReady')
  },
  onShow: function () {
    var notes = wx.getStorageSync('lists') || [];
    this.setData({
      notes: notes.slice(0, this.data.index * 5).reverse()
    });
  },
  onHide: function () {
    // 页面隐藏
    console.log('onHide')
  },
  onUnload: function () {
    // 页面关闭
    console.log('onUnload');
  },
   onShareAppMessage: function () {
     //分享图片是自动截取的
    return {
      title: '这个是一个简单的标题',
      desc: '分享我吧亲',
      path: '/pages/home/home'
    }
  }
})