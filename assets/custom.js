/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */
 var fadebool = false;
	

  $(document).ready(function(){
    
     $(".lang-switch").change(function(){
       var tmp_path = "";
       if($current_url_path != "" && $current_url_path != "/" ){
         tmp_path = $current_url_path;
       }
       var selectedLanguage = $('.lang-switch option:selected').val();
       switch(selectedLanguage) {
         case "FR":
           window.location = "https://maisonducaftan.myshopify.com/fr"+tmp_path;
           break;
         case "ENG":
           window.location = "https://maisonducaftan.myshopify.com"+tmp_path;
           break;
         case "ES":
           window.location = "https://maisonducaftan.myshopify.com/es"+tmp_path;
           break;  
         default:  
       }
  	})
      
      
   
     
      
      
  });

    $(document).ready(function(){
      
    $(".scroll-top").click(function() {
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
        return false;
    });
      
      //adding watching customers script
    
     

      function randomCustomers() {
         $("#customers_view label").text(Math.floor(Math.random() * 15));
      }
      
      setInterval(randomCustomers,3000);
            
});
      
function hideSwatchelemnt(type) {
    bool = false;
  if (type == "mat") {
      $('[data-name="Material"]').parent().css( "display", "none" );
      bool = true;
  }else if(type == "size"){
      //$('[data-name="Material"]').parent().css( "display", "none" );
  }
  while (bool == false) {
    hideSwatchelemnt(type)
  }
}





// I know that the code could be better.
// If you have some tips or improvement, please let me know.

$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen      
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
})

