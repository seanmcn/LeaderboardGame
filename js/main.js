$.ajaxSetup({ cache: false });
$( document ).ready(function() {
	$( "#outer" ).on( "click", ".player", function() {
		//Remove previously added 'selected' class and add 'selected' to current
		$(".player").removeClass( "selected" )
		$(this).addClass( "selected" )
		//Get Player ID & Player name
		var playerId = $(this).attr("id");
		var playerName = $(this).find(".name").html();
		//Build and show .details div
		$('.none').hide();
		$('.details .name').html(playerName);
		$('.details').data("playerId", playerId);
		$('.details').show();
	});

	$(".givePoints").click(function(event) {

		var playerId = $( ".details" ).data( "playerId" );

		$.post( "ajax.php", { action: "addPoints", playerId: playerId} );

		//Updating the score displayed manually for better speed than reloading entire leaderboard
		var score = $("#"+playerId+" .score").html();
		var newScore = parseInt(score) + 5;
		$("#"+playerId+" .score").html(newScore);

		//Using tinysort to sort my manual updating.
		var NodeList = document.querySelectorAll("div.player");
		tinysort.defaults.order = 'desc';
		tinysort(NodeList,'span.score');

	});
});

/* Auto updates the leaderboard every 10 seconds */
var autoReload = setInterval(function () {
	var playerId = $( ".details" ).data( "playerId" );
	$.get( "ajax.php", { action: "getLeaderboard", }, function( data ) {
		$( ".leaderboard" ).html( data );
		$(".player#"+playerId).addClass( "selected" );
	});
}, 10000); // refresh every 10000 milliseconds / 10 seconds