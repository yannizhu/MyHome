/**
 * Created by Administrator on 2015/5/14.
 */
var sceneObject={
    init:function(){
        this._enterCar();
        this._enterInvitation();
    },
    /*---------------------------------�ƶ��Ļ鳵------------------------------*/
    _enterCar:function(){
        initCar();
        /* �鳵���Ŵ��ڴ�С�ı� */
        $(window).resize(function(){
            setCarPosition();
        })
    },
    /*---------------------------------�������뺯------------------------------*/
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
/*---------------------------------�ƶ���С��-------------------------------*/
function initCar(){
    var $home=$(".home");
    setCarPosition();
   setTimeout(function(){
        $home.fadeIn();
    },6500)
}
/* �鳵λ�ö�λ�ͻ������� */
function setCarPosition(){
    var $car=$(".car"),
        wWidth=$(window).width(),/* �ĵ���� */
        wHeight=$(window).height(),/* ���ڸ߶� */
        carWidth=$car.width(),/* �鳵��� */
        carHeight=$car.height();/* �鳵�߶� */
    $car.css({top:wHeight-carHeight-100});
    $car.animate({left:wWidth-carWidth+100},8000).fadeOut();
}

$(function(){
    sceneObject.init();
})