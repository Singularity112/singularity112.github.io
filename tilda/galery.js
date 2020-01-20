const galleryTemplate = `
    <div class="container">
        <div class="gallery-container">
            <div class="small-col" onclick="prev(this);">
                <
            </div>
            <div class="col gallery-images">
                <div class="remove-service-item" onclick="removeSlideImage(this)">
                    удалить
                </div>
                <img src="https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png" onclick="setupImageChanger(this)" class="active" data-img="0">
                <img src="https://s11.stc.all.kpcdn.net/share/i/12/10896223/inx960x640.jpg" onclick="setupImageChanger(this)" data-img="1">
                <img src="https://lentachel.ru/netcat_files/Image/foto/2019/08/19/kotiki.jpg" onclick="setupImageChanger(this)" data-img="2">
            </div>
            <div class="small-col" onclick="next(this);">
                >
            </div>
        </div>
        <div class="slider-pagintaion-cont">
            <div class="slider-pagination">
                <div class="pag-item active" data-img="0" onclick="changeSlide(this, 0)"></div>
                <div class="pag-item" data-img="1" onclick="changeSlide(this, 1)"></div>
                <div class="pag-item" data-img="2" onclick="changeSlide(this, 2)"></div>
            </div>
        </div>
    </div>
    <div class="addSlide" onclick="addSlide(this);">
        Добавить слайд
    </div>
`;

function next(that) {
    let number = $(that).parents('.gallery-container').find('img.active').attr('data-img');
    const itemNumber = $(that).parents('.gallery-container').find('.gallery-images img').length;
    if (number == itemNumber - 1) {
        number = 0;
    } else {
        number++;
    }

    changeSlide(that, number);
}

function changeSlide(that, number) {
    $(that).parents('.container').find('.gallery-images img').removeClass('active');
    $(that).parents('.container').find(`.gallery-images img[data-img="${number}"]`).addClass('active');

    $(that).parents('.container').find('.pag-item').removeClass('active');
    $(that).parents('.container').find(`.pag-item[data-img="${number}"]`).addClass('active');
}

function prev(that) {
    let number = $(that).parents('.gallery-container').find('img.active').attr('data-img');
    const itemNumber = $(that).parents('.gallery-container').find('.gallery-images img').length;
    if (number == 0) {
        number = itemNumber - 1;
    } else {
        number--;
    }

    changeSlide(that, number);
}

function addSlide(that) {
    $(that).parents('.block-item').find('.gallery-images').append(`
        <img src="https://s11.stc.all.kpcdn.net/share/i/12/10896223/inx960x640.jpg" onclick="setupImageChanger(this)"
        data-img="${$(that).parents('.block-item').find('.gallery-images img').length}">
    `);

    $(that).parents('.block-item').find('.slider-pagination').append(`
        <div class="pag-item" data-img="${$(that).parents('.block-item').find('.gallery-images img').length -1}"
        onclick="changeSlide(this, ${$(that).parents('.block-item').find('.gallery-images img').length - 1})"></div>
    `);
}

function removeSlideImage(that) {
    $(that).parents('.gallery-images').find('img.active').remove();
    recalculate(that);
}

function recalculate(that) {
    $(that).parents('.block-item').find('.slider-pagination').html('');
    $(that).parents('.gallery-images').find('img').each(function(index) {
        $(this).attr('data-img', index);
        $(this).parents('.block-item').find('.slider-pagination').append(`
            <div class="pag-item" data-img="${index}"
            onclick="changeSlide(this, ${index})"></div>
        `);
    });
    changeSlide(that, 0);
}