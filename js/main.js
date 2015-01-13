$( document ).ready(function() {

	$( "#outer" ).on( "click", ".player", function() {
		//Remove previously added 'selected' class and add 'selected' to current
		$(".player").removeClass( "selected" )
		$(this).addClass( "selected" )
		//Get Player ID + Name
		var playerId = $(this).attr("id");
		var playerName = $(this).find(".name").html();
		//Build Form
		$('.none').hide();
		$('.details .name').html(playerName);
		$('.details').data("playerId", playerId);
		$('.details').show();
	});

	$(".givePoints").click(function(event) {
		var playerId = $( ".details" ).data( "playerId" );
		$.post( "ajax.php", { action: "addPoints", playerId: playerId} );
		$.get( "ajax.php", { action: "getLeaderboard", }, function( data ) {
			$( ".leaderboard" ).html( data );
			$(".player#"+playerId).addClass( "selected" );
		});

	});
});

var autoReload = setInterval(function () {
	var playerId = $( ".details" ).data( "playerId" );
	$.get( "ajax.php", { action: "getLeaderboard", }, function( data ) {
		$( ".leaderboard" ).html( data );
		$(".player#"+playerId).addClass( "selected" );
	});
}, 10000); // refresh every 10000 milliseconds / 10 seconds