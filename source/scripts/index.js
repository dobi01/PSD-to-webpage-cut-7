import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';

window.onload = function() {

  function formatPrice(price) {
    let string = price.toString();
    return price = string.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  $.each( $('.slider'), function( index, value ) {

    let inputMax = $(this).find('[data-name="max"]'),
        inputMin = $(this).find('[data-name="min"]');

    const data = $(this).find('[data-name]'),
          min = inputMin.data('min'),
          max = inputMax.data('max'),
          currentMin = inputMin.data('current-min'),
          currentMax = inputMax.data('current-max'),
          step = data.data('step'),
          currentArray = [currentMin, currentMax];

    $(this).slider({
      range: true,
      min: min,
      max: max,
      values: currentArray,
      step: step,
      slide: function( event, ui ) {
        $(inputMin).val( formatPrice(ui.values[ 0 ]) );
        $(inputMax).val( formatPrice(ui.values[ 1 ]) );
      }
    })
  });

}

