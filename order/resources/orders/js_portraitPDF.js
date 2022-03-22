//работает только для ориентации portrait
$(window).load(function(){
    // Высота страницы А4 по стандарту минус отступы сверху и снизу
    var a4_page_height_mm = 297 - 20 - 40;
    // Вычисляем высоту страницы разрешении клиента
    var a4_page_div = $('<div></div>');

    a4_page_div.css('height', a4_page_height_mm + 'mm');
    a4_page_div.insertAfter('body');
    var a4_page_height_px = a4_page_div.height();
    a4_page_div.remove();

    // Вычисляем размер содержимого приказа
    var a4 = $('div.a4');
    a4.css('height', 'auto');
    var content_height_px = $('body').height();
    var page_numbers = Math.ceil(content_height_px / a4_page_height_px);
    if (page_numbers > 1){
        console.log("Размер содержимого превышает размер страницы, делим на несколько страниц");
        var height_counter = 0;
        var hide_new_header = true;
        var page_break_div = $('<div></div>');
        page_break_div.css({
            'page-break-before':'always',
            // 'height':'20mm'
        });

        var page_numbers_without_bottom = Math.ceil((content_height_px - $('div.bottom').outerHeight() - $('div.comment').outerHeight()) / a4_page_height_px);
        var need_to_shift_middle_path = (page_numbers_without_bottom != page_numbers);

        if (need_to_shift_middle_path){
			console.log("Требуется перенос части текста приказа");
            var prevElement = $("div.middle div.body :last").prev();
            if (prevElement[0].tagName == "DIV") {
                page_break_div.insertAfter(prevElement);
            } else if (prevElement[0].tagName == "TD") {
                var previous = prevElement.parent().prev();
                var rowspan = previous.children()[0].getAttribute('rowspan');
                if (rowspan && rowspan >= 2) {
                    var table = previous.parents('table');
                    var header_rowspan = parseInt(table.find('td:first')[0].getAttribute('rowspan')) || 1;
                    var new_table = table.clone();
                    new_table.find('tbody tr:gt(' + (header_rowspan - 1) + ')').remove();
                    var new_tbody = new_table.find('tbody');

                    new_tbody.append(previous.clone());
                    var shift_row = previous.next().clone();
                    new_tbody.append(shift_row);
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
                } else {
                    previous = prevElement.parent();
                    var table = previous.parents('table');
                    var new_table = table.clone();
                    var new_tbody = new_table.find('tbody');
                    var header_rowspan = parseInt(table.find('td:first')[0].getAttribute('rowspan')) || 1;
                    new_tbody.find('tr:gt(' + (header_rowspan - 1) + ')').remove();
                    new_tbody.append(previous.clone());
                    previous.remove();

                    
                }
                if (hide_new_header){
                    for (var i = 0; i < header_rowspan; i++) {
                        $(new_tbody.children()[i]).css('visibility','hidden').find('td').empty();
                    }
                    new_table.css({
                        'border':'none',
                        'border-collapse': 'collapse'
                    }).find('tr').css({
                        'border':'1px solid #444',
                    });
                }
                $('.body').append(page_break_div.clone());
                $('.body').append(new_table);
            }
        }else{

        }

    }
	$('div.comment').hide();
});
