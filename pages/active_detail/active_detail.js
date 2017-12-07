Page({
    data: {
        data: null,
        userInfo: {}
    },
    onLoad: function() {
        // console.log(res.data);
        // this.data.data=e
        wx.setNavigationBarTitle({
            title: '群约详情'
        })
        var that = this;
        wx.getStorage({
            key: 'activeData',
            success: function(res) {
                // console.log(res);
                that.setData({
                    data: res.data,
                })
            }
        })

    }
})