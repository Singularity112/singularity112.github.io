const servicesTemplate = `
        <div class="container services-container">
            <div class="services-row">
                <div class="services-col">
                    <div class="services-item">
                    <div class="remove-service-item" onclick="removeServiceItem(this)">
                        удалить
                    </div>
                        <div class="services-image">
                            <img src="https://via.placeholder.com/350x150" onclick="setupImageChanger(this)">
                        </div>
                        <div class="services-title" onclick="setupTextChanger(this)" contenteditable="true">
                            Заголовок
                        </div>
                        <div class="services-description" onclick="setupTextChanger(this)" contenteditable="true">
                            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="services-add" onclick="addService(this)">
        Добавить услугу
    </div>
`;

function addService(item) {
    $(item).parents('.block-item').find('.services-row').append(`
    <div class="services-col">
        <div class="services-item">
            <div class="remove-service-item" onclick="removeServiceItem(this)">
                удалить
            </div>
            <div class="services-image">
                <img src="https://via.placeholder.com/350x150" onclick="setupImageChanger(this)">
            </div>
            <div class="services-title" onclick="setupTextChanger(this)" contenteditable="true">
                Заголовок
            </div>
            <div class="services-description" onclick="setupTextChanger(this)" contenteditable="true">
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском
            </div>
        </div>
    </div>
    `);
}

function removeServiceItem(that) {
    $(that).parents('.services-col').remove();
}