/**
 * Created by Administrator on 2017/9/19.
 */
//tab
$(".navigator").on("click","li",function(e){
    $(this).addClass("active").siblings().removeClass("active");
    $(".content>li").eq($(this).index()).addClass("active").siblings().removeClass("active")
})