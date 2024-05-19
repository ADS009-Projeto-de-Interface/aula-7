const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Deseja realmente limpar o seu formulário?', 'danger')
  })
}

// Testimonial
$(document).ready(function(){
  $(".testimonial .indicators li").click(function(){
    var i = $(this).index();
    var targetElement = $(".testimonial .tabs li");
    targetElement.eq(i).addClass('active');
    targetElement.not(targetElement[i]).removeClass('active');
            });
            $(".testimonial .tabs li").click(function(){
                var targetElement = $(".testimonial .tabs li");
                targetElement.addClass('active');
                targetElement.not($(this)).removeClass('active');
            });
        });
$(document).ready(function(){
    $(".slider .swiper-pagination span").each(function(i){
        $(this).text(i+1).prepend("0");
    });
});