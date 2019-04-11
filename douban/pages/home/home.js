import { fetchData, starToArray } from '../../util/util.js';
Page({
  data: {
    inTheaters: {
      movies: [],
      name: '电影'
    },
    comingSoon: {
      movies: [],
      name: '即将上映'
    },
    top250: {
      movies: [],
      name: 'top250'
    }
  },
  onLoad: function (options) {
    // 默认返回20条数据  显示6条
    fetchData('https://api.douban.com/v2/movie/in_theaters?star=0&count=6').then(res => {
      this.processData(res, '电影', 'inTheaters');
    });
    fetchData('https://api.douban.com/v2/movie/coming_soon?star=0&count=6').then(res => {
      this.processData(res, '即将上映', 'comingSoon');
    });
    fetchData('https://api.douban.com/v2/movie/top250?star=0&count=6').then(res => {
      this.processData(res, 'top250', 'top250');
    });
  },
  bindToMore(e){
    var val = e.currentTarget.dataset.more;
    wx.navigateTo({
      url: 'detail/detail?type='+val,
    });
  },
  processData(res, name, type) {
    var datas = res.data.subjects;
    var arr = [];
    for (var i = 0; i < datas.length; i++) {
      var cur = datas[i];
      var tmpl = {
        images: cur.images.medium,
        title: cur.title.length>6?cur.title.slice(0,6)+'...':cur.title,
        rating: {
          stars: starToArray(cur.rating.stars),
          average: cur.rating.average
        }
      }
      arr.push(tmpl);
    };
    var obj = {};
    obj[type] = {
      movies: arr,
      name
    }
    this.setData(obj);
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