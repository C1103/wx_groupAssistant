Page({
    data: {
        btn: false,
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