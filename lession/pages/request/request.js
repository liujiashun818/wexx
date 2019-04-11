// pages/request/request.js
Page({
  data:{
    val:'',
    express:[]
  },
  bindVal(e){
    var data = e.detail.value;
    this.setData({
      val:data
    })
  },
  search(){
  
    wx.request({
      url: 'http://apis.baidu.com/kuaidicom/express_api/express_api?&muti=0&order=desc',
      data: {
        nu:this.data.val
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {
         apikey:'09e0a91d7ff0088e9ccf9ac995592df8'
       }, // 设置请求的 header
      success:(res)=>{
        console.log(res.data.data)
        this.setData({
          express:res.data.data
        })
      }
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