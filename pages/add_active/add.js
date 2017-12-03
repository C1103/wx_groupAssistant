Page({
    onLoad: function() {
        wx.navigateTo({
            url: './add_active'
        })
    },
    onShow: function() {
        console.log(8989);
        wx.navigateTo({
            url: '../index/index'
        })
    }
})