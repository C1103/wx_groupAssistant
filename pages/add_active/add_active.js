Page({
    data: {
        btn: false,
    },
    goToImagePage: function() {
        wx.navigateTo({
            url: '../set_time/set_time',
        })
    },
    bindBtn: function() {
        console.log(1214);
        var that = this
        this.setData({
            btn: !that.data.btn
        });
        console.log(111);
    },
    onLoad: function() {
        console.log(222);
    }
})