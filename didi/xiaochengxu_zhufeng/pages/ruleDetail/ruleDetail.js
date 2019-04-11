Page({
    data:{
        animationData: {}
    },
    onReady: function(){
        var animation = wx.createAnimation({
            duration: 1000,
            transformOrigin: '50% 60px',
            timingFunction: 'linear'
        })
        
        this.animation = animation

        var i =0
         setInterval(function() {
             console.log('go')
            animation.rotate(45 * (++i)).step()
            this.setData({
                animationData:animation.export()
            })
        }.bind(this), 500)

    }
})