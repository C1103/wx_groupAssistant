Page({
    data: {
        pictures: []
    },
    // goToActivePage: function(e) {
    //     var index = e.target.dataset.current;
    //     console.log(e.target.dataset.current);
    //     // wx.navigateTo({
    //     //     url: "../add_active/add_active?id='index'",
    //     // })
    // },
    onLoad: function() {
        var that = this;
        wx.setNavigationBarTitle({
            title: '选择模板'
        })
        wx.request({
            url: 'http://www.easy-mock.com/mock/5a1e246e365fb14a83207162/first_time/template',
            data: {},
            header: {
                'content-type': 'application.json'
            },
            success: function(res) {
                console.log(res.data.data.data);
                that.setData({
                        pictures: res.data.data.data,
                    })
                    // console.log(that.data.timeData_one);
            }
        });
    }
})