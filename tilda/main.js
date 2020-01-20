let blockArray = [];

function openModal(id) {
    $(`#${id}`).addClass('active');
}

function closeModals(){
    $('.modal').removeClass('active');
}

function saveChanges() {
    $('.block-item').each(function() {
        const id = $(this).data('block-id');
        blockArray[id] = this.innerHTML;
    });
}

function addBlock(template) {
    saveChanges();
    blockArray.push(template);
    closeModals();
    render();
}

function removeBlock(elem) {
    saveChanges();
    const parent = $(elem).parents('.block-item');
    blockArray.splice($(parent).data('block-id'), 1);
    render();
}

function render() {
    $('#compiled').html('');
    blockArray.forEach((template, index) => {
        const beforeTemplate = `<div class="block-item" id="block-item-${index}" data-block-id="${index}">`;
        const afterTemplate = `
            <div class="removeBlock" onclick="removeBlock(this)">
                удалить блок
            </div>
            <div class="up updownItem" onclick="moveBlock(this, 'up')">
                вверх
            </div>
            <div class="down updownItem" onclick="moveBlock(this, 'down')">
                вниз
            </div>
        </div>`;
        $('#compiled').append(beforeTemplate + template + afterTemplate);
    });
}

let currentElement = null;

function setupTextChanger(element) {
    currentElement = element;
    $('#text-changer-modal').find('input, select').each(function() {
        const property = $(this).data('html-style') ? $(this).data('html-style') : $(this).data('style');
        currentStyle = getComputedStyle(currentElement)[property];

        $(this).val(currentStyle);
    });
    closeModals();
    openModal('text-changer-modal');
}

function changeTextStyle(changer) {
    const style = $(changer).data('style');

    styleObj = {};
    styleObj[style] = $(changer).val();
    
    $(currentElement).css(styleObj);
}

function setupImageChanger(element) {
    currentElement = element;
    closeModals();
    openModal('image-changer-modal');

    $('#image-changer-modal input').val($(currentElement).attr('src'));
}

function changeImage(changer) {
    $(currentElement).attr('src', $(changer).val());
    closeModals();
}

function moveBlock(that, position) {
    saveChanges();
    closeModals();

    const blockId = $(that).parents('.block-item').data('block-id');
    if (position == 'up' && blockId != 0) {
        const buf = blockArray[blockId - 1];
        blockArray[blockId - 1] = blockArray[blockId];
        blockArray[blockId] = buf;
    } else if (position == 'down' && blockId != blockArray.length - 1) {
        const buf = blockArray[blockId + 1];
        blockArray[blockId + 1] = blockArray[blockId];
        blockArray[blockId] = buf;
    }
    render();
}