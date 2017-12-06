Page({
    data: {
        num: 0,
    },
    onLoad: function() {
        // if (this.data.num == 0) {
        //     this.data.num++;


        // }
        // console.log(this.data.num)
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