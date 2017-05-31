require([
    'jquery',
    'pikaday'
],
    function($, Pikaday) {
        'use strict';

        $(function() {
            $('#programOfferForm').find('.add-pikaday').each(function() {
                // eslint-disable-next-line no-new
                new Pikaday({
                    field: this,
                    format: 'YYYY-MM-DD HH:mm:ss',
                    setDefaultDate: false,
                    showTime: true,
                    use24hour: false,
                    autoClose: false
                });
            });
        });
    }
);
