
/* 헤더 상단2 */
function bb(num) {
    $('.dot_2').eq(num-1).css({'background-color' : 'rgb(34, 138, 34)', 'color': 'rgb(253, 248, 248)'})
    $('.dot_2').eq(num-2).css({'background-color' : 'white', 'color' : '#000'})
    $('.dot_2').eq(num-3).css({'background-color' : 'white', 'color' : '#000'})
    $('.dot_2').eq(num-4).css({'background-color' : 'white', 'color' : '#000'})
    $('.dot_2').eq(num-5).css({'background-color' : 'white', 'color' : '#000'})
}


/* 헤더 상단3 */
function aa(num) {
    $('.dot_3').eq(num-1).css({'color' : '#000', 'font-weight': '900'})
    $('.dot_3').eq(num-2).css({'color' : '#929292', 'font-weight': '800'})
    $('.dot_3').eq(num-3).css({'color' : '#929292', 'font-weight': '800'})
    $('.dot_3').eq(num-4).css({'color' : '#929292', 'font-weight': '800'})
    $('.dot_3').eq(num-5).css({'color' : '#929292', 'font-weight': '800'})
}

/* 요일별 */

function cc(num) {
    $('.dot_1').eq(num-1).css({'color' : 'green', 'font-weight': '900'})
    $('.dot_1').eq(num-2).css({'color' : '#000', 'font-weight': '500'})
    $('.dot_1').eq(num-3).css({'color' : '#000', 'font-weight': '500'})
    $('.dot_1').eq(num-4).css({'color' : '#000', 'font-weight': '500'})
    $('.dot_1').eq(num-5).css({'color' : '#000', 'font-weight': '500'})
    $('.dot_1').eq(num-6).css({'color' : '#000', 'font-weight': '500'})
    $('.dot_1').eq(num-7).css({'color' : '#000', 'font-weight': '500'})
    $('.dot_1').eq(num-8).css({'color' : '#000', 'font-weight': '500'})


}


function dd() {

    $('.dot4').eq(0).css({'border-bottom': '0'})
    $('.dot4').eq(1).css({'border': '1px solid #929292'})
    $('.dot4').eq(1).css({'border-left': '0'})

    $('#man_box').css({'visibility' : 'visible'})
    $('#woman_box').css({'visibility' : 'hidden'})

}

function ee() {

    $('.dot4').eq(1).css({'border-bottom': '0'})
    $('.dot4').eq(0).css({'border': '1px solid #929292'})

    $('#woman_box').css({'visibility' : 'visible'})
    $('#man_box').css({'visibility' : 'hidden'})

}

        
