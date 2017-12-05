Page({
    data: {
        num: 0,
    },
    onLoad: function() {
        // if (this.data.num == 0) {
        //     this.data.num++;
        wx.navigateTo({
                url: './add_active'
            })
            // }
            // console.log(this.data.num)
    },
    onShow: function() {
        if (this.data.num != 0) {
            this.data.num--;
        } else {
            wx.navigateTo({
                url: '../index/index'
            })
        }
        console.log(this.data.num);
    },
    onHide: function() {

    }
})