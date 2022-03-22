$(window).load(function(){
    // Размер страницы а4 составляет 210 х 297 мм
    // Авто отступы (верх, низ, лево, право) == 10 мм 
    $('a4').height('auto');
	
    // вычисляем высоту контекста страницы в пикселях
    // Высота в миллиметрах (вычисленна методом подбора, по стандарту - 297 мм)
    var page_height_mm = '297mm';
    
   
    var temp_div = $('<div>').height(page_height_mm).insertAfter('body');
    var page_height_px = temp_div.outerHeight();
    temp_div.remove()

    if ($(".torder").hasClass("normalize1")) {
        page_print_height = 1008;
    } else {
        var page_print_height = page_height_px;  
    }
     
    // alert(page_height_px)
    // если нет, то часть текста приказа присутствует на последней страницы с подписями - все Ok
    // если кол-во тсраниц изменится (в частности у меньшится на одну)  -  значит включаем обработчик
    // на перенос части текста прикзаа на следующую страницу
    //upd: не перенос, а ужимание текста, чтобы он умещался на одной странице

    // var sign_height = $('div.bottom').outerHeight() + $('div.comment').outerHeight();
	// console.log(sign_height)
    // var new_page_size = doc_height - sign_height;
    // var new_pages_number = Math.ceil(new_page_size / page_height_px);

    // var page_number_fixed = (doc_height / page_height_px).toFixed(2);

    // var prevElement = $("div.middle div.body :last").prev();

    // var one_page_height_px = page_height_px;
    var doc_height = $('body').outerHeight();
    var pages_number = Math.ceil(doc_height / page_height_px);
    var percent = page_height_px/doc_height;
    
    var pages_number_loc = Math.ceil(doc_height / page_height_px);
	

	if (Math.floor(percent) == 1){
        percent = 0.72
    }
	
	if (Math.floor(0.6605882352941177 * 1000) / 1000 == 0.66) {
		console.log("Приказ по участкам")
		percent = percent - 0.1
    }
	
	var coeff_for_comment = 0.0
    
    if (doc_height > 1300){
        coeff_for_comment = 30.78
    }else if (doc_height > 1150 && doc_height < 1300){
        coeff_for_comment = 13.14
    }else{
        coeff_for_comment = 3.04
    }
	coeff_for_comment = 30.78

    function resizeFont() {

        $('.top').each(function(index, element){
        });
       
        

        
        $(".oao").css({"font-size": Math.floor(18 * percent)});
        $(".name").css({"font-size": Math.floor(18 * percent)});
        $(".t_order").css({"font-size": Math.floor(18 * percent)});
        $(".flo").css({"font-size": Math.floor(18 * percent)});
    
        $(".rzd").css({"height": 5 * percent});
    

        $(".express").css({"font-size": Math.floor(12 * percent)});
        $(".express_reg").css({"font-size": Math.floor(12 * percent)});

        $(".middle").css({"font-size":Math.floor(16 * percent), "padding-top":"0px"});
        $(".middle_ord_uch").css({"font-size":Math.floor(16 * percent), "padding-top":"0px"});

        $(".torder td").css({"font-size":Math.floor(12 * percent)});
        $(".bottom").css({"font-size":Math.floor(14.5 * percent)});
    
        $(".bottom :first").css({"padding-top":25});
        
        var px_com = (doc_height/coeff_for_comment).toString()+"px";
       
        $(".comment").css({"padding-top": px_com});
        $(".comment").css({"font-size": Math.floor(12 * percent)});
        
        }
        console.log("Нужно привести к одной странице")
        resizeFont();
        window.print();
        
});
