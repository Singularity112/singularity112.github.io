var navLink = {
    props: ['text', 'href'],
    template: '<div class = "nav-item"><a :href = "href">{{text}}</a></div>'
};

new Vue({
    el: '#nav',
    components: {
        'nav-link' : navLink
    }
});

var btn = {
    props: ['text', 'href'],
    template: '<div class = "header-btn"><a :href = "href">{{text}}</a></div>'
};

new Vue({
    el: '#header-title',
    components: {
        'btn' : btn
    }
});

var sect = {
    props: ['img', 'title', 'text'],
    template:
    '<div class = "sec-main d-flex ai-center">' +
        '<div class = "col">' +
            '<img :src = "img" class = "sec-img">' +
        '</div>' +
        '<div class = "col">' +
            '<div class = "section-text">' +
                '<div class = "sec-title">' +
                    '{{title}}' +
                '</div>' +
                '<div class = "sec-desc">' +
                    '<pre>{{text}}</pre>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>'
};

var sectreverse = {
    props: ['img', 'title', 'text'],
    template:
    '<div class = "sec-main d-flex ai-center sec-reverse">' +
    '<div class = "col">' +
    '<div class = "section-text reverse">' +
    '<div class = "sec-title">' +
    '{{title}}' +
    '</div>' +
    '<div class = "sec-desc">' +
    '<pre>{{text}}</pre>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class = "col">' +
    '<img :src = "img" class = "sec-img">' +
    '</div>' +
    '</div>'
}

new Vue({
    el: '#main-content',
    components: {
        'sect' : sect,
        'sectreverse': sectreverse
    }
});

var footerApp = new Vue({
   el: '#footer',
    data: {
       cols: [
           {
               title: 'Product',
               items: [
                   {text: 'Web app'},
                   {text: 'Download'},
                   {text: 'Inspecting features'},
                   {text: 'Collaboration features'},
                   {text: 'Roadmap'},
                   {text: 'Integrations'},
                   {text: 'Open Source'},
                   {text: 'Pricing'},
                   {text: 'Changelog'},
                ]
           },

           {
               title: 'SUPPORT',
               items: [
                   {text: 'Help Center'},
                   {text: 'Upvote a feature'},
                   {text: 'Report a bug'},
                   {text: 'Server status'},
                   {text: 'Licenses'}
               ]
           },

           {
               title: 'COMPANY',
               items: [
                   {text: 'Blog'},
                   {text: 'Jobs'},
                   {text: 'Handbook'},
                   {text: 'Contact us'}
               ]
           },

           {
               title: 'Resources',
               items: [
                   {text: 'Guacamole UI kit'},
                   {text: 'Photoshop tutorials'},
                   {text: 'Sketch tutorials'},
                   {text: 'Web Design Report'}
               ]
           }
       ],
        socials: [
            { social: 'fa fa-instagram' },
            { social: 'fa fa-facebook' },
            { social: 'fa fa-twitter' }
        ]
    }
});
