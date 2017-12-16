Page({
    data: {
        activeInfo: [],
        show: false,
    },
    onLoad: function() {
        wx.clearStorage();
    },
    onShow: function() {
        var that = this;
        wx.getStorage({
            key: 'actives',
            success: function(res) {
                console.log(res);
                that.setData({
                    activeInfo: res.data,
                    show: true,
                })
            }
        })
    }
})