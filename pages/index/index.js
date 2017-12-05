Page({
    data: {
        activeInfo: {}
    },
    onLoad: function() {
        wx.getStorage({
            key: 'activeData',
            success: function(res) {
                // console.log(res);
                that.setData({
                    activeInfo: res.data,
                })
            }
        })
    }
})