# 周末，让我们一起约嗨吧！


周末了，暖被窝把你亲密拥抱，软沙发与你零距离接触，电脑电视成为亲密伙伴
，吃吃睡睡成为你的美好享受。朋友，别宅在家里，群约助手带你一起happy。

<hr>

## 开发工具：
- 微信开发者工具
- 小程序开发文档：提供开发所需api
- iconfont矢量图标：提供小程序tabBar图标
- easy-mock：提供数据接口


<hr>

## 项目功能：
- 创建新的活动并保存，显示出来
- 活动页面的高度还原
- 设置活动开始结束时间，活动标题
- 列表式渲染数据
- 传参页面跳转
- 利用easy-mock实现从后台获取数据


## 项目展示
### 1.项目整体效果
![](https://user-gold-cdn.xitu.io/2017/12/16/1605fb0ce07b8e13?w=289&h=504&f=gif&s=1862344)
#### 关于数据储存
使用api `wx.setStorage`存储添加的活动，在添加活动时触事件，添加到缓存数据数组中去
然后在首页显示出来，在首页使用api `wx.getStorage`获取缓存数据，来以此展示首页内容。
部分代码如下

> 发起活动页面js

``` javascript
addActive: function(act) {
        wx.getStorage({
            key: 'actives',
            success: function(res) {
                wx.setStorage({
                    key: 'actives',
                    data: [...res.data, act],
                })
            },
            fail: function() {
                wx.setStorage({
                    key: 'actives',
                    data: [act],
                })
            }
        })
    },

```
> 首页js部分代码

``` javascript
onShow: function() {
        var that = this;
        wx.getStorage({
            key: 'actives',
            success: function(res) {
                console.log(res);
                that.setData({
                    activeInfo: res.data,
                    show: true,
                })
            }
        })
    }
```


### 2.首页前后显示效果
使用`wx:if="{{show==false}}" wx:elif="{{show==true}}`，当没有活动时在app.js中设置数据`show`为`false`，有时设置为`true`
来实现显示不同页面效果
![](https://user-gold-cdn.xitu.io/2017/12/16/1605fb5273071071?w=289&h=504&f=gif&s=129360)
> wxml代码如下

``` javascript
<view class="indexImg"  wx:if="{{show==false}}">
<image src="../../images/index.png" />
</view>

<view wx:elif="{{show==true}}">
<view class="start"><span>以下为历史记录</span></view>
<view class="info" wx:for="{{activeInfo}}">
    <image src="{{item.imgUrl}}"></image>
    <view class="active">
        <span class="title">{{item.active}}</span>
        <span>时间: {{item.startDatas}} {{item.startTimes}} - {{item.endTimes}}</span>
        <span>人数: 1人报名</span>
    </view>
</view>
<view class="start end"><span>没有更多了</span></view>
</view>
```


### 3.发起群约页面展示

使用页面跳转传递参数设置活动主题图片，输入活动标题，使用`picker`组件设置活动开始时间结束时间，
按钮设置采用三元运算符来给组件附加不同的样式，达到按钮状态不同时，显示不同。
![](https://user-gold-cdn.xitu.io/2017/12/16/1605fc2fc673e317?w=289&h=504&f=gif&s=900625)
> wxml部分代码如下

``` javascript
    <view class="page-bd_time page-flex">
        <image src="../../images/clock.png"></image>
        <text>开始时间</text>
        <span class="{{btn?'span-one_true':'span-one'}}">
        <picker mode="date" value="{{date}}" start="1978-01-01" end="2017-12-23" bindchange="bindStartDateChange">  
        <view class="picker">
        {{startDates}}  
        </view>  
        </picker> 
        </span>
        <span class="{{btn?'undispaly':'span-zero'}}"></span>
        <span class="{{btn?'undisplay':'span-two'}}">
        <picker mode="time" value="{{time}}" start="00:00" end="23:59" bindchange="bindStartTimeChange">  
        <view class="picker"> 
        {{startTimes}}
        </view>  
        </picker>
        </span>
    </view>
```


### 4.用户个人设置效果展示
高度还原原版效果，设置提醒时间，给每个`item`附加一个样式表现为红勾，当被选中时，采用数
据绑定设置样式`display`为`block`就显示出来了,提醒设置页面头部的tab也是同样的方法实现。
![](https://user-gold-cdn.xitu.io/2017/12/16/1605fd008588fc04?w=289&h=504&f=gif&s=112261)

> 页面代码展示

``` javascript
<view class="swiper-tab">
    <view class="swiper-tab-item {{currentTab==0?'active':''}}" data-current="0" bindtap="clickTab">默认提醒</view>
    <view class="swiper-tab-item {{currentTab==1?'active':''}}" data-current="1" bindtap="clickTab">全天提醒</view>
</view>

<swiper current="{{currentTab}}" bindchange="swiperTab" duration="300" height="800rpx">
    <swiper-item >
        <view class="swiper-item  {{chooseTapOne==index?'swiper-item-active':''}}" wx:for="{{timeData_one}}" data-current="{{index}}" bindtap="clickTimeOne">
            {{item}}
        </view>
    </swiper-item>
    <swiper-item>
        <view class="swiper-item {{chooseTapTwo==index?'swiper-item-active':''}}" wx:for="{{timeData_two}}" data-current="{{index}}" bindtap="clickTimeTwo" >{{item}}</view>
    </swiper-item>
</swiper>
```

### 总结
<hr>
在做项目工程中遇到最大的阻碍就是首页跳转到发起活动页面的跳转问题，使用下方tabBar跳转到页面并隐藏
下方的tabBar，最终解决方式是采用自定义tabBar或使用一个中间页面当做过度页面再跳转至发起活动页面

### 其他
如果对该项目有兴趣的，可以进入个人[github](https://github.com/C1103/wx_groupAssistant)获取源代码看看，
当然可以顺带给个star。


