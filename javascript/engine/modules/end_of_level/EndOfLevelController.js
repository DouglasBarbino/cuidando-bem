define(["text!../assets/html/end_of_level/endOfLevel.html","text!../assets/html/end_of_level/scoreItemTemplate.html"],function(e,t){function f(t){$(t).append(e),$(".goToMenu").click(function(){a=!1,n.changeScreen(6)}),$(".playAgain").click(function(){var e=require("CuidandoBem");e.restartLevel()})}function l(e){if(!a){$(r).show();for(i=0;i<e.length;i++){var n=e[i],f=$($(t)[0]),l=$(u,f),c=$(o,f);l.html(n.score),c.html(n.title),$(s).append(f)}a=!0}}function c(){$(s).empty(),$(r).hide(),a=!1}var n=require("Stage"),r="#endOfLevel",s="#scoreList",o=".title",u=".score",a=!1;return{init:f,show:l,close:c}});