/**
 * Created by Administrator on 2015/6/8.
 */
var briefArr=['��ã��ҵ����ֽ���С��','�������Ǹ��Ի�...'];
$brief1=$("#brief1");
$brief2=$("#brief2");
$(function(){
   /*briefArr.forEach(
       function(item){

           clearTimeout();
       }
   )*/


    function briefFadeIn(obj){
        obj.fadeIn("slow");
    }
    function briefFadeOut(obj){
        obj.fadeOut("slow");
    }

});
var sceneObject = {
    init: function(){
       // this._enterCar();
       // this._enterInvitation();
        this._enterAlbum();
       // this._enterWall();
     //   this._addBlessing();
       // this._searchAddress();
    },
    /*---------------------------------�ƶ��Ļ鳵------------------------------*/
    _enterCar: function(){
        initCar();

        /* �鳵���Ŵ��ڴ�С�ı� */
        $(window).resize(function(){
            setCarPosition();
        })
    },
    /*---------------------------------�������뺯------------------------------*/
    _enterInvitation: function(){
        var $home = $(".home"), /* ��ҳ */
            $toInvitation = $("#to-invitation"), /* ���뺯��ť */
            $invitation = $(".invitation"), /* ���뺯ģ�� */
            $invitationCt = $(".invitation-content"), /* ���뺯���� */
            $inviteReturn = $("#invite-return");

        $toInvitation.click(function(){
            $home.fadeOut(); /* ������ҳ */
            $invitation.fadeIn();
            $invitationCt.animate({"top": "0"},function(){
                $inviteReturn.fadeIn();
            });
        })

        /* ���뺯�е�����ذ�ť */
        $inviteReturn.click(function(){
            $invitationCt.css({"top": "-540px"});
            $invitation.fadeOut(function(){
                $inviteReturn.fadeOut();
                $home.fadeIn(600);
            });
        })
    },
    /*---------------------------------�������------------------------------*/
    _enterAlbum: function(){
        var// $home = $(".home"), /* ��ҳ */
            $toPicture = $("#to-picture"),
            $pictureWall = $(".picture-wall"),
            $movePerson=$("#movePerson"),
            timer;

        $toPicture.click(function(){
            $movePerson.fadeOut(function(){/* ������ҳ */
                $movePerson.fadeOut();
                $pictureWall.fadeIn(); /* ��ʾ��� */
                autoPicWall();
                timer = setInterval(autoPicWall,6000); /* ��Ƭ�Զ����� */
            });
        })

        /* �����Ƭǽ�з��ذ�ť */
        $("#picture-return").click(function(){
            clearInterval(timer); /* ������ҳʱ���ѭ�� */
            picPage = 0; /* ������ʾͼƬΪ0��Ҳ������һ�ν���ʱ�ִ�0��ʼ */
            $pictureWall.fadeOut(function(){
                $movePerson.fadeIn();
            })
        })
    },
    /*---------------------------------����ף��ǽ-------------------------------*/
    _enterWall: function(){
        var $home = $(".home"),
            $uEnter = $("#to-wall"); /* ����ף��ǽ��ť */


        $uEnter.click(function(){
            $home.hide();
            setTimeout(scene6,400); /* ����ף��ǽ�������� */
        })
    },
    /*---------------------------------���ף����-------------------------------*/
    _addBlessing: function(){
        var $home = $(".home"),
            $sevenDiv = $(".seven-content div"),
            $clickMe = $(".clickMe"),
            $mask = $(".mask"),
            $popBox = $(".pop-box"),
            $write = $("#write"),
            $uSure = $("#uSure"),
            $sevenContent = $(".seven-content");

        /* �϶�ף����Ƭ */
        draggableNote();

        /* ������ף�� */
        $clickMe.click(function(){
            $write.val("��������ף����~");
            $mask.fadeIn();
            $popBox.animate({top: "50%"});
        })

        /* ��ȡ����ʱ */
        $write.focus(function(){
            var _val = $(this).val();
            if(_val == "��������ף����~"){
                $(this).val("");
            }
        })
        /* ��ʧ����ʱ */
        $write.blur(function(){
            var _val = $(this).val();
            if(_val.length == 0){
                $(this).val("��������ף����~");
            }
        })

        /* ȷ�����ף���� */
        $uSure.click(function(){
            var _writeVal = $write.val(),
                _randomNum = Math.ceil(Math.random()*6);

            if(_writeVal != "��������ף����~"){
                var _div = '<div class="note-'+_randomNum+'">'+_writeVal+'</div>';
                $sevenContent.append(_div); /* �������ף������˱�ǩ��ӵ�β�� */
                defineSevenDiv($sevenContent.find("div:last"));
                $popBox.animate({top: "-300px"},function(){
                    $mask.fadeOut();
                    draggableNote(); /* ���϶���Ƭ��������ӵı�ǩ�����϶����� */
                });
            }else{
                alert("������ף���");
            }
        })

        /* ף��ǽ�з�����ҳ */
        $("#blessing-return").click(function(){
            $(".seven-box").fadeOut(function(){
                $home.fadeIn();
            })
        })
    },
    /*---------------------------------�鿴�����ַ-------------------------------*/
    _searchAddress: function(){
        var $home = $(".home"),
            $toAddress = $("#to-address"); /* �����ַ���� */
        $address = $(".address"), /* �����ַͼ */
            $addressReturn = $("#address-return");

        $toAddress.click(function(){
            $home.fadeOut();
            $address.fadeIn();
        })

        /* �����ַ������ҳ */
        $addressReturn.click(function(){
            $address.fadeOut();
            $home.fadeIn();
        })
    }
}


/*---------------------------------�ƶ���С��-------------------------------*/
function initCar(){
    var $home = $(".home"); /* ��ҳ */
    setCarPosition();
    setTimeout(function(){
        $home.fadeIn();
    },6500);
}

/* �鳵λ�ö�λ�ͻ������� */
function setCarPosition(){
    var $car = $(".car"),
        wWidth = $(window).width(), /* �ĵ���� */
        wHeight = $(window).height(), /* ���ڸ߶� */
        carWidth = $car.height(), /* �鳵��� */
        carHeight = $car.height(); /* �鳵�߶� */
    $car.css({top:wHeight - carHeight - 100});
    $car.animate({left: wWidth - carWidth + 100},8000).fadeOut();
}


/*---------------------------------ͼƬǽ-------------------------------*/
var  picPage = 0, /* ��ǰ�ǵڼ���ͼƬ�Ŵ����С */
    picLeft, /* ͼƬ��߾��� */
    picTop; /* ͼƬ�ϲ���λ���� */

/* �Զ��Ŵ���СͼƬ���� */
function autoPicWall(){
    var $pictureWallPic = $(".picture-wall div"),
        $own = $pictureWallPic.eq(picPage),
        isBig = $own.hasClass("bigCenter"), /* �Ŵ�ʱ�����class */
        hasClassPicRow = $own.hasClass("picRow"); /* �ж�ͼƬ���еģ����ǿ���ڸߣ� */

    /* ����ͼƬ�Ŵ� */
    becomeBig($own,hasClassPicRow);

    /* ��2��ͼƬ�Զ���С */
    setTimeout(function(){becomeSmall($own,hasClassPicRow);},3000);

    /* ��֤��ǰ�Ŵ�ͼƬΪͼƬ�ܸ����ڣ�Ҳ����˵�������ͼƬ */
    if(picPage < $pictureWallPic.length - 1){
        picPage++;
    }else if(picPage == $pictureWallPic.length - 1){ /* �����ǰͼƬΪ���һ��ͼƬ�����ִӵ�һ��ͼƬ��ʼ��ʾ */
        picPage = 0;
    }

}

/* ͼƬ��󷽷� */
function becomeBig($own,hasClassPicRow){
    var $mask = $(".mask"),
        pictureWallWidth = $(".picture-wall").width(),
        pictureWallHeight = $(".picture-wall").height();

    picLeft = $own.css("left"); /* ԭʼ���Զ�λleftֵ */
    picTop = $own.css("top"); /* ԭʼ���Զ�λtopֵ */
    $own.toggleClass("bigCenter"); /* ��ӷŴ��class���� */
    $mask.fadeIn();

    /* ͼƬΪ��ͼƬ��Ҳ���ǿ�ȴ��ڸ߶� */
    if(hasClassPicRow){
        for(var i = 120; i < 720; i+=20){
            $own.find("img").animate({"width": i+"px", "height": i/1.5+"px"},2);
            $own.animate({"left": (pictureWallWidth-i)/2+"px", "top": (pictureWallHeight-i/1.5)/2+"px"},2);
        }
    }else{
        for(var i = 80; i < 480; i+=20){
            $own.find("img").animate({"width": i+"px", "height": i*1.5+"px"},2);
            $own.animate({"left": (pictureWallWidth-i)/2+"px", "top": (pictureWallHeight-i*1.5)/2+"px"},2);
        }
    }
}

/* ͼƬ��С���� */
function becomeSmall($own,hasClassPicRow){
    var $mask = $(".mask"),
        pictureWallWidth = $(".picture-wall").width(),
        pictureWallHeight = $(".picture-wall").height();

    if(hasClassPicRow){
        for(var i = 720; i >= 120; i-=40){
            $own.find("img").animate({"width": i+"px", "height": i/1.5+"px"},2);
            /* ͼƬ��С������λ�� */
            $own.animate({"left": (pictureWallWidth-i)/2+"px", "top": (pictureWallHeight-i/1.5)/2+"px"},2);
        }
    }else{
        for(var i = 480; i >= 80; i-=40){
            $own.find("img").animate({"width": i+"px", "height": i*1.5+"px"},2);
            /* ͼƬ��С������λ�� */
            $own.animate({"left": (pictureWallWidth-i)/2+"px", "top": (pictureWallHeight-i*1.5)/2+"px"},2);
        }
    }

    /* ͼƬ��С������λ�ú󣬻ص�ԭʼλ�� */
    $own.animate({"left": picLeft, "top": picTop},400,function(){
        $mask.fadeOut(); /* �������ֲ� */
        $own.toggleClass("bigCenter"); /* ȥ���Ŵ��class���� */
    });
}



/*---------------------------------ף��ǽ���붯��-------------------------------*/
var colCount = 4, /* ������ */
    rowCount = 4, /* ������ */
    $sixBox;
function scene6(){
    $sixBox = $(".six-box"); /* ������box */
    $sixBox.fadeIn();
    /* ɢ�� */
    scatter();
    setTimeout(together,100); /* ���þۺ� */
    setTimeout(scene7,2000); /* ������߳��� */
}

/* ����ͼƬ�ۺ� */
function together(){
    var  $sixDiv = $sixBox.find("div"), /* ����������С��div */
        sixDivWidth = $sixDiv.width(), /* ����������С��div�Ŀ�� */
        sixDivHeight = $sixDiv.height(), /* ����������С��div�ĸ߶� */
        sixBoxWidth = $sixBox.width(), /* ��������� */
        sixBoxHeight = $sixBox.height();/* �������߶� */

    $sixDiv.each(function(){
        var _index = $(this).index(),
            col = _index%colCount, /* �ڼ��� */
            row = Math.floor(_index/rowCount), /* �ڼ��� */
            cssLeft = sixBoxWidth/2 - colCount/2*sixDivWidth + col*sixDivWidth, /* left��ֵ */
            cssTop = sixBoxHeight/2 - rowCount/2*sixDivHeight + row*sixDivHeight, /* top��ֵ */
            divLeft = -col*sixDivWidth, /* ������λ�Ŀ�� */
            divTop = -row*sixDivHeight; /* ������λ�ĸ߶� */
        $(this).animate({"left": cssLeft,"top": cssTop-100},800);
    })
}

/* ����ͼƬɢ�� */
function scatter(){
    var  $sixDiv = $sixBox.find("div"), /* ����������С��div */
        sixDivWidth = $sixDiv.width(), /* ����������С��div�Ŀ�� */
        sixDivHeight = $sixDiv.height(), /* ����������С��div�ĸ߶� */
        sixBoxWidth = $sixBox.width(), /* ��������� */
        sixBoxHeight = $sixBox.height();/* �������߶� */
    $sixDiv.each(function(){
        var _index = $(this).index(),
            col = _index%colCount, /* �ڼ��� */
            row = Math.floor(_index/rowCount), /* �ڼ��� */
            cssLeft = (col-1)*(sixBoxWidth+sixDivWidth)- sixDivWidth, /* �������ˮƽ����СΪ���Ӵ�С����������Ŀ�� */
            cssTop = (row-1)*(sixBoxHeight+sixDivHeight)- sixDivWidth, /* �������ˮƽ����СΪ���Ӵ�С����������Ŀ�� */
            divLeft = -col*sixDivWidth, /* ������λ�Ŀ�� */
            divTop = -row*sixDivHeight; /* ������λ�ĸ߶� */
        $(this).css({"left": cssLeft,"top": cssTop, "background-position": divLeft+"px "+divTop+"px"})
    })
}



/*---------------------------------ף��ǽ����ҳ------------------------------*/
function scene7(){
    var $sevenDiv = $(".seven-content div"),
        $sevenBox = $(".seven-box");

    $sixBox.hide();
    $sevenBox.fadeIn(1000);
    $sevenDiv.each(function(){
        defineSevenDiv($(this));
    })
}

/* ����ף������ֽλ�ú���ת�Ƕ� */
function defineSevenDiv($own){
    var _obj = defineRandom();
    $own.css({"transform":"rotate("+_obj.rotate+"deg)"}); /* ���������תֵ */
    $own.animate({left: _obj.left+"px",top: _obj.top+"px"}); /* ����Ų� */
}

/* �������left��top����תֵ */
function defineRandom(){
    var randomLeft = Math.floor(680*(Math.random())) + 30, /* ͼƬleftֵ */
        randomTop =  Math.floor(400*Math.random()) + 30, /* ͼƬtopֵ */
        randomRotate = 20 - Math.floor(40*Math.random()); /* ͼƬ��ת�Ƕ� */
    return {
        left: randomLeft,
        top: randomTop,
        rotate:randomRotate
    }
}

/* �϶�ͼƬ */
function draggableNote(){
    $(".seven-content div").draggable({
        containment: $(".seven-content"),
        zIndex: 2700,
        start: function(){
            $(this).css({"transform":"rotate(0deg)","cursor": "crosshair"}); /* ��ʼ�϶�ͼƬ��תΪ0�������ʽ�ı� */
        },
        stop: function(){
            var _obj = defineRandom();
            $(this).css({"transform":"rotate("+_obj.rotate+"deg)","cursor": "pointer"}); /* ֹͣ�϶�����תΪ����� */
        }
    })
}

$(function(){
    sceneObject.init();
})
