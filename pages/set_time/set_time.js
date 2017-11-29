Page({
    data: {
        currentTab: 0,
        chooseTapOne: 0,
        chooseTapTwo: 0,
        timeData_one: [],
        timeData_two: []
    },
    swiperTab: function(e) {
        this.setData({
            currentTab: e.detail.current,
            // activeIndex: e.detail.current
        });
    },
    clickTab: function(e) {
        // active 加到当前的也好 X
        // 状态改变 data binding 值
        var index = e.target.dataset.current;
        console.log(index);
        this.setData({
            // activeIndex: index,
            currentTab: index
        });
        // console.log('clicktab');
    },
    clickTimeOne: function(e) {
        var index = e.target.dataset.current;
        console.log(index);
        this.setData({
            chooseTapOne: index,
        })
    },
    clickTimeTwo: function(e) {
        var index = e.target.dataset.current;
        console.log(index);
        this.setData({
            chooseTapTwo: index,
        })
    },
    onLoad: function() {
        wx.setNavigationBarTitle({
            title: '提醒设置'
        })
        var that = this;
        wx.request({
            url: 'http://www.easy-mock.com/mock/5a1e246e365fb14a83207162/first_time/Time',
            data: {},
            header: {
                'content-type': 'application.json'
            },
            success: function(res) {
                console.log(res.data.data);
                that.setData({
                        timeData_one: res.data.data.time_one,
                        timeData_two: res.data.data.time_two,
                    })
                    // console.log(that.data.timeData_one);
            }
        });
    }


})