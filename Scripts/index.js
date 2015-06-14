/**
 * Created by Administrator on 2015/5/14.
 */
var sceneObject={
    init:function(){
        this._enterCar();
        this._enterInvitation();
    },
    /*---------------------------------移动的婚车------------------------------*/
    _enterCar:function(){
        initCar();
        /* 婚车随着窗口大小改变 */
        $(window).resize(function(){
            setCarPosition();
        })
    },
    /*---------------------------------进入邀请函------------------------------*/
    _enterInvitation:function(){
        var $home=$(".home"),
            $toInvitation=$("#to-invitation"),
            $invitation=$(".invitation"),
            $invitationCt=$(".invitation-content"),
            $inviteReturn = $("#invite-return");
        $toInvitation.click(function(){
            $home.fadeOut();
            $invitation.fadeIn();
            $invitationCt.animate({"top":"0"},function(){
                $inviteReturn.fadeIn();
            })
        });
        $inviteReturn.click(function(){
           $invitationCt.css({"top":"-540px"});
            $invitation.fadeOut(function(){
                $inviteReturn.fadeOut();
                $home.fadeIn(600);
            });
        });
    }

}
/*---------------------------------移动的小车-------------------------------*/
function initCar(){
    var $home=$(".home");
    setCarPosition();
   setTimeout(function(){
        $home.fadeIn();
    },6500)
}
/* 婚车位置定位和滑动方法 */
function setCarPosition(){
    var $car=$(".car"),
        wWidth=$(window).width(),/* 文档宽度 */
        wHeight=$(window).height(),/* 窗口高度 */
        carWidth=$car.width(),/* 婚车宽度 */
        carHeight=$car.height();/* 婚车高度 */
    $car.css({top:wHeight-carHeight-100});
    $car.animate({left:wWidth-carWidth+100},8000).fadeOut();
}

$(function(){
    sceneObject.init();
})