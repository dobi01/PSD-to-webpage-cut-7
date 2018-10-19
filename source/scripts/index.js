import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';

window.onload = function() {

  function formatPrice(price) {
    let string = price.toString();
    return price = string.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  // SLIDERS
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

  // RADIO INPUTS
  let countFree = $( ".table__data-wrapper:contains('Wolne')" ).length,
      countSale = $( ".table__data-wrapper:contains('Promocja')" ).length;

  $('#span-free').html('(' + countFree + ')');
  $('#span-sale').html('(' + countSale + ')');
  
  // STYLE TABLE DATA
  $( ".table__data-wrapper:contains('Sprzedane')" ).css( "background", "#b2b2b2" );

  $.each( $('.table__data--red'), function( index, value ) {
    let text = $(this).text();
    if ( text ) {
      $(this).prev().css({ 
        "text-decoration" : "line-through",
        "color" : "#adadad" 
      });
      text = formatPrice(text);
      $(this).html(text + ' zł');
    }
  });

  $.each( $('.table__data--black'), function( index, value ) {
    let text = $(this).text();
    text = formatPrice(text);
    $(this).html(text + ' zł');
  });

}

