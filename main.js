
(function closeSettings() {
    ('details').on('mouseover'.function() {
    (this).attr('open', true);
    }).on('mouseout', function() {
    (this).attr('open', false);
    }).on('click', function(e) {
    e.preventDefault();
    })
    });