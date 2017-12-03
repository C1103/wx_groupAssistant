Page({
    data: {
        btn: false,
        imgUrl: '../../images/pic6.png',
        timeSetOne: '',
        timeSetTwo: '',
        moreBtn: false
    },
    showMore: function() {
        console.log(this.data.moreBtn);
        var that = this;
        this.setData({
            moreBtn: !that.data.moreBtn
        });
    },
    bindBtn: function() {
        // console.log(1214);
        var that = this
        this.setData({
            btn: !that.data.btn
        });
        // console.log(111);
    },
    onLoad: function(options) {
        if (options.pageTitleImg) {
            this.setData({
                imgUrl: options.pageTitleImg
            })
        }
        var that = this;
        wx.getStorage({
            key: 'setTimeOne',
            success: function(res) {
                console.log(res)
                if (res.data.length > 0) {
                    that.setData({
                        timeSetOne: res.data,
                    })
                }
            }
        })
        wx.getStorage({
            key: 'setTimeTwo',
            success: function(res) {
                console.log(res)
                if (res.data.length > 0) {
                    that.setData({
                        timeSetTwo: res.data,
                    })
                }
            }
        })
    }
})