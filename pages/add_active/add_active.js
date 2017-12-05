Page({
    data: {
        inputValue: '',
        startDates: '2017-12-01',
        startTimes: '12:00',
        endDates: '2017-12-08',
        endTimes: '12:00',
        btn: false,
        imgUrl: '../../images/pic6.png',
        timeSetOne: '',
        timeSetTwo: '',
        moreBtn: false
    },
    bindInput: function(e) {
        console.log(e.detail.value);
        this.setData({
            inputValue: e.detail.value,
        });
    },
    bindSaveData: function() {
        var activeData = { startDatas: this.data.startDates, startTimes: this.data.startTimes, endDatas: this.data.endDates, endTimes: this.data.endTimes, active: this.data.inputValue, imgUrl: this.data.imgUrl };
        wx.showLoading({
            title: '加载中',
        })
        wx.setStorage({
            key: 'activeData',
            data: activeData,
            success: function() {
                wx.hideToast();
            }
        })
        console.log(activeData);
        wx.redirectTo({
            url: '../active_detail/active_detail',
        })
    },
    bindStartTimeChange: function(e) {
        console.log("谁哦按")
        this.setData({
            startTimes: e.detail.value
        })
    },
    //  点击日期组件确定事件  
    bindStartDateChange: function(e) {
        console.log(e.detail.value)
        this.setData({
            startDates: e.detail.value
        })
    },
    bindEndTimeChange: function(e) {
        console.log("谁哦按")
        this.setData({
            endTimes: e.detail.value
        })
    },
    //  点击日期组件确定事件  
    bindEndDateChange: function(e) {
        console.log(e.detail.value)
        this.setData({
            endDates: e.detail.value
        })
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