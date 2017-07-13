$(document).ready(function() {
    
    //animation nav items
    
    $('nav a.animated').hover(
        function () {
            $(this).addClass('swing');
        },
        function () {
            $(this).removeClass('swing');
        });

    //owl carousel
    
    $(".owl-carousel").owlCarousel({
        loop: true,
        navText:false,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            769: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true
            }
        }
    });
    
    //feedback form

    $(document).ready(function () {
        var feedBack = $('#feedback_form');
        feedBack.append('<form id="form" method="post"></form>');
        var form = $('#form');
        form.append('<h1 class="lang" key="form caption">Feedback Form</h1>');
        form.append('<label for="name" class="lang" key="label name">Your Name:</label>');
        form.append('<input id="name" type="text" name="user">');
        form.append('<label for="msg" class="lang" key="label msg">Your Message:</label>');
        form.append('<textarea id="msg" rows="7" name="message"></textarea>');
        form.append('<input type="submit" id="submitForm" value="Send Message">');

        $('#feedback_form input[type="submit"]').click(function (e) {
            e.preventDefault();
        })
    });
    
    //translate with json
    
    var arrLang = {
        'ru' : {
            'section p': 'Избегал вами а картину стал простейшим равно которое: открывший только, нет — отвергает по eсли. Говорил умеет счастливой ни никакого говорил никакого счастливой заниматься',
            'item' : 'пункт',
            'section h1' : 'Задача организации, в особенности же начало повседневной.',
            'button first': 'Кнопка',
            'button second': 'Кнопка',
            'content h1': 'Разнообразный и богатый опыт постоянный количественный рост',
            'content p': 'Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. С друг.',
            'caption img': 'Название',
            'form caption': 'Свяжитесь с нами',
            'label name': 'Ваше имя',
            'label msg': 'Ваше сообщение'
        },
        'en' : {
            'section-p' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Alias autem consequuntur culpa, ipsam quis repudiandae?A impedit laborum, maiores nemo nihil officiis quia quibusdam.',
            'item' : 'item',
            'section h1' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            'button first': 'Lorem',
            'button second': 'Ipsum',
            'content h1': 'Accusantium doloremque ea eos error et harum inventore iure',
            'content p': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iusto mollitia officia quia reprehenderit. Aliquid aperiam atque et facilis illo maiores nam nihil, nisi, quas quis quos saepe suscipit voluptatem.',
            'caption img': 'Lorem ipsum',
            'form caption': 'Feedback Form',
            'label name': 'Your name',
            'label msg': 'Your message'
        }
    };
    $(function () {
        $('.translate').click(function () {
            var lang = $(this).attr('id');
            $('.lang').each(function (index, element) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            })
        })
    });
    
    //localstorage plugin
    
    $('#form').sisyphus({timeout: 1});
    
    //pixabayAPI
    
    var $photoContainer = $('#container_photo'),
        $videoContainer = $('#container_video');
    
    
    $('.send_request').click(function(e) {
        e.preventDefault();
        var $search = $('input[name="search"]:checked').val();
        console.log($search);
        switch ($search){
            case 'photo':
                var ajaxReq = $.ajax({
                    method: "GET",
                    url: "https://pixabay.com/api/",
                    data: {
                        key: "5744960-6f2f5fb7837004e1b3aa58195",
                        q: $('input[name="keyword"]').val()
                    },
                    dataType: "json"
                });
                break;
            case 'video':
                var ajaxReq = $.ajax({
                    method: "GET",
                    url: "https://pixabay.com/api/videos/",
                    data: {
                        key: "5744960-6f2f5fb7837004e1b3aa58195",
                        q: $('input[name="keyword"]').val()
                    },
                    dataType: "json"
                });
                break;
        }
    
    
        ajaxReq.done(function(msg) {
            console.log(msg);
            $photoContainer.html('');
            $videoContainer.html('');
            switch ($search){
                case 'photo':
                    var pics = msg.hits;
                    for (var i = 0; i < pics.length; i++) {
                        $photoContainer.append('<div class="block"><img src="'
                            + pics[i].webformatURL + '" alt=""></div>');
                    }
                    break;
                case 'video':
                    var videos = msg.hits;
                    for (var i = 0; i < videos.length; i++) {
                        $videoContainer.append('<div class="block"><video controls="controls" poster="' + videos[i].userImageURL + '">' +
                            '<source src="'+videos[i].videos.tiny.url+'" type=video/ogg; codecs="theora, vorbis">' +
                            '<source src="'+videos[i].videos.tiny.url+'" type=video/mp4; codecs="avc1.42E01E, mp4a.40.2">' +
                            '<source src="'+videos[i].videos.tiny.url+'" type=video/webm; codecs="vp8, vorbis">' +
                            '</video> </div>');
                    }
                    break;
            }
        });
    
        ajaxReq.fail(function(jqXHR, statusFail){
            console.log(statusFail);
        });
    });


    //nav menu media

    var topMenu = $('nav ul');
    $('button.top-nav-button').click(function () {
        if (topMenu.css('display') == 'none') {
            topMenu.css('display', 'block');
        } else {
            topMenu.css('display', 'none');
        }
    })
});





