var WINDOW_WIDTH;
var WINDOW_HEIGHT;


$( function() {
  var bigavatar = $( '#bigavatar' );
  var introText = $( '#introText' );
  WINDOW_WIDTH = $( window ).width();
  WINDOW_HEIGHT = $( window ).height();


  $( window ).resize( function() {
    console.log( arguments );
    WINDOW_WIDTH = $( window ).width();
    WINDOW_HEIGHT = $( window ).height();
    setBigAvatarPosition( bigavatar );
  } );
  $( '#introText' ).html( 'Helloworld' );

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log( '----------------')
    console.log( xmlHttp.responseText );
    $( '#introText' ).html( xmlHttp.responseText );
  }
  xmlHttp.open("POST",'http://localhost:3000/introtext',true);
  xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
  xmlHttp.send({ user_id : '0001', user_name : 'lance' });

} );

function setBigAvatarPosition( bigavatar ) {
    bigavatar.css( 'right', WINDOW_WIDTH * 0.2 );
    bigavatar.css( 'top', WINDOW_WIDTH * 0.2 );
    introText.css( 'right', WINDOW_WIDTH - parseInt( bigavatar.css( 'left' ) ) )
}