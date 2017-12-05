Page({
    data: {
        data: null,
    },
    onLoad: function() {
        // console.log(res.data);
        // this.data.data=e
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