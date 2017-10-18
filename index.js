jQuery.fn.setLeftNav =function(opts){
    return this.each(function(){
        $($(this).children(opts.clickHead).get(0)).attr("id","open").next().slideDown().siblings("dd").slideUp();
        $(opts.clickHead).on("click",function () {
            $(opts.upList).stop();
            $(this).siblings("dt").removeAttr("id");
            if($(this).attr("id")=="open"){
                $(this).removeAttr("id").siblings("dd").slideUp();
            }else{
                $(this).attr("id","open").next().slideDown().siblings("dd").slideUp();
            }
        });
    })
}
