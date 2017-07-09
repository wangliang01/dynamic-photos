<template>
    <div class="photos">
        <swiper :options="swiperOption" ref="mySwiper" class="mySwiper">
            <!-- slides -->
            <swiper-slide class="page1 page">
                <div class="imgWrapper">
                    <img :src="require('../assets/imgs/photo1.jpg')" alt="" class="ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"/>
                </div>
                <div class="background"></div>
            </swiper-slide>
            <audio src="./static/mp3/paomo.mp3" autoplay="true" class="audio" loop="true">
              您的浏览器不支持 audio 标签。
            </audio>
            <swiper-slide class="page2 page">
                <div class="imgWrapper">
                    <img :src="require('../assets/imgs/photo2.jpg')" alt="" class="ani" swiper-animate-effect="lightSpeedIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"/>
                </div>
                <div class="background"></div>
            </swiper-slide>
            <swiper-slide class="page3 page">
                <div class="imgWrapper">
                    <img :src="require('../assets/imgs/photo3.jpg')" alt="" class="ani" swiper-animate-effect="flip" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"/>
                </div>
                <div class="background"></div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!--  <div class="swiper-button-prev" slot="button-prev"></div>
   <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>
<script>
import {
    swiper,
    swiperSlide
} from 'vue-awesome-swiper'
export default {
    name: 'carrousel',
    data() {
        return {
            swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3500,
                direction: 'vertical',
                effect: 'slide',
                grabCursor: true,
                setWrapperSize: true,
                // autoHeight: true,
                // paginationType:"bullets",
                // pagination : '.swiper-pagination',
                paginationClickable: true,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                // scrollbar:'.swiper-scrollbar',
                mousewheelControl: true,
                observeParents: true,
                paginationHide: true,
                scrollbarHide: true,
                loop: true,
                nInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
                    swiperAnimateCache(swiper); //隐藏动画元素 
                    swiperAnimate(swiper); //初始化完成开始动画
                },
                onSlideChangeEnd: function(swiper) {
                        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                    }
                    // if you need use plugins in the swiper, you can config in here like this
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                    // debugger: true,
                    // swiper callbacks
                    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                    // onTransitionStart(swiper){
                    //   console.log(swiper)
                    // },
                    // more Swiper configs and callbacks...
                    // ...
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        this.$nextTick(() => {
                console.log(this.swiper)
            })
            // you can use current swiper instance object to do something(swiper methods)
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            // console.log('this is current swiper instance object', this.swiper)
            // this.swiper.slideTo(3, 1000, false)
    }
}
</script>
<style>
.page {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.page1 {
    background-size: cover;
    background-image: url(../assets/imgs/bg1.jpg);
}

.background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    z-index: -1;
}

.page2 {
    background-size: cover;
    background-image: url(../assets/imgs/bg1.jpg);
}

.page3 {
    background-size: cover;
    background-image: url(../assets/imgs/bg1.jpg);
}

.mySwiper {
    width: 100%;
    height: 100%;
}
.audio {
  display: block;
  position: absolute;
  z-index: 2;
}
.imgWrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  transform: translate3d(-50%, -50%, 0);
}
.imgWrapper img{
  width: 100%;
  /*height: 280px;*/
}
</style>
