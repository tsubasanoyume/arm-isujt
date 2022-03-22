$(window).load(function(){
    // Размер страницы а4 составляет 210 х 297 мм
    // Авто отступы (верх, низ, лево, право) == 10 мм 
    $('a4').height('auto');
    // вычисляем высоту контекста страницы в пикселях
    // Высота в миллиметрах (вычисленна методом подбора, по стандарту - 297 мм)
    var page_height_mm = '268mm';
    var temp_div = $('<div>').height(page_height_mm).insertAfter('body');
    var page_height_px = temp_div.outerHeight();
    if ($(".torder").hasClass("normalize1")) {
        page_print_height = 1008;
    } else {
        var page_print_height = page_height_px;  
    }
    
    // alert(page_height_px)
    temp_div.remove();

    var hide_new_header = true; // false - шапка таблицы дублируется, true - без шапки

    // ищем кол-во страниц док-та
    var doc_height = $('body').outerHeight();
    var pages_number = Math.ceil(doc_height / page_height_px);
    // смотрим, изменится ли кол-во страниц, если убрать подписи и футер
    // если нет, то часть текста приказа присутствует на последней страницы с подписями - все Ok
    // если кол-во тсраниц изменится (в частности у меньшится на одну)  -  значит включаем обработчик
    // на перенос части текста прикзаа на следующую страницу
    //upd: не перенос, а ужимание текста, чтобы он умещался на одной странице

    var sign_height = $('div.bottom').outerHeight() + $('div.comment').outerHeight();
    var new_page_size = doc_height - sign_height;
    var new_pages_number = Math.ceil(new_page_size / page_height_px);

    var page_number_fixed = (doc_height / page_height_px).toFixed(2);

    var prevElement = $("div.middle div.body :last").prev();

    var one_page_height_px = page_height_px;

    function resizeFont() {

        var h_sum = 0;
        $('.top').each(function(index, element){
            h_sum += $(element).outerHeight();
        });

        if (new_pages_number > 1) {
            page_height_px = page_height_px*new_pages_number;
        }

        //высота страницы без шапки
        var h_not_head = doc_height - h_sum;
        //высота страницы, к которой мы стремимся
        var h_not_head_target = page_height_px - h_sum;
        //процент уменьшения страницы
        var percent = h_not_head_target/h_not_head;
        if (percent > 1.30) {
            percent = 1.3;
            if ($(".torder").hasClass("normalize1")) {
                page_print_height = 1013;
            }
        }

        $(".express").css({"font-size": Math.floor(14 * percent)});
        $(".middle").css({"font-size":Math.floor(18 * percent), "padding-top":"0px"});
        $(".torder td").css({"font-size":Math.floor(12 * percent)});
        $(".bottom").css({"font-size":Math.floor(14.5 * percent)});
        $("div.signature img").css({"height": Math.floor(81*percent), "width":Math.floor(140*percent)});
        // $(".creates").css({"font-size":Math.floor(14 * percent)});

        $(".bottom :first").css({"padding-top":25});
        $(".comment").css({"padding-top":20});
    }

    if (prevElement[0].tagName == "TD") {
        if (new_pages_number !== pages_number){
            console.log('обработчик уменьшения шрифта1');
            resizeFont();
            pages_number = new_pages_number;
        }
        else {
            console.log('обработчик уменьшения шрифта2');
            if (page_number_fixed <= 1.30) {
                resizeFont();
                pages_number = pages_number;
            }
        }
    }
    // else if (prevElement[0].tagName == "DIV") {
    //     var page_break_div = $('<div>').css({
    //         'page-break-before':'always',
    //     });
    //     page_break_div.insertAfter(prevElement);
    // }
    else {
        console.log('все Ok');
    }

    if (pages_number > 1){
       //Задаем высоту div a4
       var one_page = 100; // 100%  - одна страница, 200% - две страницы и тд
       var correction = pages_number - 1; // поправочный коэфициент для отработки при печати (итого получим 201%, 302%, 403% и тд)
       var page_height = one_page * pages_number + correction;
       $("div.a4").css({
           'height': page_height + '%'
       });
    }
    //если страница одна, неоходимо прописать высоту контейнера 100%, чтобы нижний div правильно позиционировался
    else {
        $("div.a4").css({
            'height': '100%'
        });
    }
    $("div.comment").css({
       "position" : "absolute",
       "bottom" : "0px",
       "left" : "0px"
    });
    table_width = $.makeArray($('div.middle'))[0].clientWidth;
    var until_sign_div_height = $('div.top')[0].clientHeight + $('div.top')[1].clientHeight + $('div.top')[2].clientHeight + $('div.rzd').outerHeight() + $('div.indent').outerHeight();
    // alert(until_sign_div_height);
    // alert($('div.middle').outerHeight());
    var tr_sum = 0;
    $.makeArray($('tr')).forEach(function(entry) {
        tr_sum += entry.clientHeight;
        // alert(until_sign_div_height + tr_sum);
        if (until_sign_div_height + tr_sum >= page_print_height) {
            split_print_table = (page_print_height - (until_sign_div_height + tr_sum) + entry.clientHeight).toString();
            // alert(split_print_table);
            $("<tr><td class=\"div_for_print\"></td><td class=\"div_for_print\"></td><td class=\"div_for_print\"></td><td class=\"div_for_print\"></td><td class=\"div_for_print\"></td></tr>").insertBefore(entry);
            // console.log('huyaks')
            entry.previousElementSibling.style.height = split_print_table;
            // console.log(entry.previousElementSibling);
            until_sign_div_height = entry.clientHeight;
            tr_sum = 0;
        }
        
        // console.log(entry);
    });
    // alert($('div.a4').outerHeight())
    // console.log($('div.middle').outerHeight())
    // console.log($('tr'))
    // console.log($('div.rzd').outerHeight())
    window.print();
    window.close();
});
