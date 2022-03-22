$(window).load(function(){
    // Размер страницы а4 составляет 210 х 297 мм
    // Авто отступы (верх, низ, лево, право) == 10 мм 
    $('a4').height('auto');
    // вычисляем высоту контекста страницы в пикселях
    // Высота в миллиметрах (вычисленна методом подбора, по стандарту - 297 мм)
    var page_height_mm = '268mm';
    var temp_div = $('<div>').height(page_height_mm).insertAfter('body');
    var page_height_px = temp_div.outerHeight();
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

    function resizeFont() {

        var h_sum = 0;
        $('.top').each(function(index, element){
            h_sum += $(element).outerHeight();
        });

        //высота страницы без шапки
        var h_not_head = doc_height - h_sum;
        //высота страницы, к которой мы стремимся
        var h_not_head_target = page_height_px - h_sum;
        //процент уменьшения страницы
        var percent = h_not_head_target/h_not_head;

        //$(".express").css({"font-size": Math.floor(14 * percent)});
        //$(".middle").css({"font-size":Math.floor(18 * percent), "padding-top":"0px"});
        //$(".torder td").css({"font-size":Math.floor(12 * percent)});
        //$(".bottom").css({"font-size":Math.floor(14.5 * percent)});
        $("div.signature img").css({"height": Math.floor(81*percent), "width":Math.floor(140*percent)});
        // $(".creates").css({"font-size":Math.floor(14 * percent)});

        $(".bottom :first").css({"padding-top":25});
        $(".comment").css({"padding-top":20});
    }

    if (prevElement[0].tagName == "TD") {
        if (new_pages_number !== pages_number){
            console.log('обработчик уменьшения шрифта');
            resizeFont();
            pages_number = new_pages_number;
        }
        else {
            console.log('обработчик уменьшения шрифта');
            if (page_number_fixed <= 1.30) {
                resizeFont();
                pages_number = pages_number - 1;
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
    //window.print();
    //window.close();
});
