$(window).load(function(){
    // Размер страницы а4 составляет 210 х 297 мм
    // Авто отступы (верх, низ, лево, право) == 10 мм 
    $('a4').height('auto');
    // вычисляем высоту контекста страницы в пикселях
    // Высота в миллиметрах (вычисленна методом подбора, по стандарту - 297 мм)
    var page_height_mm = '268mm';
    var temp_div = $('<div></div>').height(page_height_mm).insertAfter('body');
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

    var sign_height = $('div.bottom').outerHeight() + $('div.comment').outerHeight();
    var new_page_size = doc_height - sign_height;
    var new_pages_number = Math.ceil(new_page_size / page_height_px);


    
    if (new_pages_number !== pages_number){
        console.log('обработчик переноса');
        var prevElement = $("div.middle div.body :last").prev();
        var page_break_div = $('<div></div>').css({
            'page-break-before':'always',
        });

        if (prevElement[0].tagName == "DIV") {
            page_break_div.insertAfter(prevElement);
        } else if (prevElement[0].tagName == "TD") {
            var previous = prevElement.parent().prev();
            var rowspan = previous.children()[0].getAttribute('rowspan');
            if (rowspan && rowspan >= 2) {
                var table = previous.parents('table');
                var header_rowspan = parseInt(table.find('td:first')[0].getAttribute('rowspan')) || 1;
                var new_table = table.clone();
                var clone_row = previous.clone();
                var shift_row = previous.next().clone();
                var new_tbody = new_table.find('tbody')
                                         .empty()
                                         .append(clone_row)
                                         .append(shift_row);

                for (var i = 2; i <= rowspan; i++) {
                    previous.next().remove();
                }
                previous.remove();
                if (rowspan > 2){
                    for (var i = 3; i <= rowspan; i++) {
                        shift_row = shift_row.next().clone();
                        new_tbody.append(shift_row);
                    } 
                }
                clone_row.find('td').each(function(index, td) {
                    var nth_index = index + 1;
                    var width = table.find('tr:nth-child(' + (header_rowspan + 1) + ') td:nth-child(' + nth_index +  ')').width();
                    $(td).width(width);
                });
            } else {
                previous = prevElement.parent();
                var table = previous.parents('table');
                var new_table = table.clone();
                var clone_row = previous.clone();
                var new_tbody = new_table.find('tbody')
                                         .empty()
                                         .append(clone_row);

                previous.remove();
                new_tbody.find('tr:nth-child(1) td').each(function(index, td) {
                    var nth_index = index + 1;
                    var width = table.find('tr:first td:nth-child(' + nth_index +  ')').width();
                    $(td).width(width);
                });
            }
            

            new_table.addClass('page_break');
            $('.body').append(page_break_div.clone());
            $('.body').append(new_table);

        }

    } else {
        console.log('все Ok');
    }
    if (pages_number > 1){
        //Задаем высоту div a4 
        var one_page = 100; // 100%  - одна страница, 200% - две страницы и тд
        var correction = pages_number - 1; // поправочный коэфициент для отработки при печати (итого получим 201%, 302%, 403% и тд)
        var page_height = one_page * pages_number  + correction
        $("div.a4").css({
            'height': page_height + '%'
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
