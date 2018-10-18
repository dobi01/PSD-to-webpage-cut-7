import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';

window.onload = function() {

  function handleSlider($slider, min, max, currentValues, step) {

    let children = $slider.find('[data-name]'),
        inputMax,
        inputMin;

    $.each(children, function( index, value ) {
      $(value).data('name') == "min" ? inputMin = value : inputMax = value;
    });

    return ( $slider.slider({
      range: true,
      min: min,
      max: max,
      values: currentValues,
      step:  step,
      slide: function( event, ui ) {
        $(inputMin).val( ui.values[ 0 ]);
        $(inputMax).val( ui.values[ 1 ] );
      }
    })
    );
  }

  handleSlider($('#slider-area'), 25, 120, [35, 75], 5);
  handleSlider($('#slider-price'), 190000, 350000, [ 190000, 250000 ], 20000);
  handleSlider($('#slider-rooms'), 1, 4, [1, 3], 1);

}

