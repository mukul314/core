/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce, once) {
  Drupal.behaviors.blockFilterByText = {
    attach: function attach(context, settings) {
      var $input = $(once('block-filter-text', 'input.block-filter-text'));
      var $table = $($input.attr('data-element'));
      var $filterRows;

      function filterBlockList(e) {
        var query = e.target.value.toLowerCase();

        function toggleBlockEntry(index, label) {
          var $label = $(label);
          var $row = $label.parent().parent();
          var textMatch = $label.text().toLowerCase().includes(query);
          $row.toggle(textMatch);
        }

        if (query.length >= 2) {
          $filterRows.each(toggleBlockEntry);
          Drupal.announce(Drupal.formatPlural($table.find('tr:visible').length - 1, '1 block is available in the modified list.', '@count blocks are available in the modified list.'));
        } else {
          $filterRows.each(function (index) {
            $(this).parent().parent().show();
          });
        }
      }

      if ($table.length) {
        $filterRows = $table.find('div.block-filter-text-source');
        $input.on('keyup', debounce(filterBlockList, 200));
      }
    }
  };
  Drupal.behaviors.blockHighlightPlacement = {
    attach: function attach(context, settings) {
      if (settings.blockPlacement && $('.js-block-placed').length) {
        once('block-highlight', '[data-drupal-selector="edit-blocks"]', context).forEach(function (container) {
          var $container = $(container);
          $('html, body').animate({
            scrollTop: $('.js-block-placed').offset().top - $container.offset().top + $container.scrollTop()
          }, 500);
        });
      }
    }
  };
})(jQuery, Drupal, Drupal.debounce, once);