Page({
    data: {
        num: 0,
    },
    onLoad: function() {
    },
    onShow: function() {
        this.data.num++;
        if (this.data.num % 2 == 0) {
            wx.switchTab({
                url: '../index/index'
            });
        } else {
            wx.navigateTo({
                url: './add_active'
            })
        }
    },
    onHide: function() {
    }
})