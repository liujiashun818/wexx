// pages/jsonp/jsonp.js
Page({
  data:{
    val:'',
    lists:[],
    
  },
  val(e){
    this.setData({
      val:e.detail.value
    })
  },
  search(){
    wx.request({
      url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?&cb=a',
      data: {
        wd:this.data.val
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res)=>{
       var data = res.data.slice(19,-3);
       this.setData({
         lists: JSON.parse(data)
       })
      
      },
     
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