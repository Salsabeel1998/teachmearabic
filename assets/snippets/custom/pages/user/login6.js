var SnippetLogin=function(){$("#m_login");var t=function(){$("#m_login_signin_submit").click(function(t){t.preventDefault();var e=$(this),
    a=$(".m-login__form");a.validate({rules:{
        firstName:{required:!0},
        lastName:{required:!0},
        email:{required:!0},
        confirmEmail:{required:!0},
        password:{required:!0},
        confirmPassword:{required:!0}}})
        ,a.valid()&&(e.addClass("m-loader m-loader--right m-loader--light").attr("disabled",!0),a.ajaxSubmit({url:"",success:function(t,i,n,r){setTimeout(function(){e.removeClass("m-loader m-loader--right m-loader--light").attr("disabled",!1),function(t,e,a){var i=$('<div class="m-alert m-alert--outline alert alert-'+e+' alert-dismissible" role="alert">\t\t\t<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\t\t\t<span></span>\t\t</div>');t.find(".alert").remove(),i.prependTo(t),mUtil.animateClass(i[0],"fadeIn animated"),i.find("span").html(a)}(a,"danger","Incorrect username or password. Please try again.")},2e3)}}))})};return{init:function(){t()}}}();jQuery(document).ready(function(){SnippetLogin.init()});