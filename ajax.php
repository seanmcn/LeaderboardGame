<?php
require_once("database.php");

$action = (isset($_REQUEST['action']) ? $_REQUEST['action'] : 0);
$playerId = (isset($_REQUEST['playerId']) ? $_REQUEST['playerId'] : 0);

/* Quick switch to see what function we should call based off REQUEST['action'] */
switch($action) {
	case "addPoints":
		addPoints($playerId);
		break;
	case "getLeaderboard":
		getLeaderboard();
		break;
}

function addPoints($playerId) {
	global $db;
	$sql = "UPDATE players SET score=score+5 WHERE id=$playerId";
	if ($db->query($sql) === TRUE) {
	    return TRUE;
	} else {
	    return FALSE;
	}
}

/* Returns the current leadboard for AJAX Call */
function getLeaderboard() {
	global $db;
	
	$result = $db->query("SELECT * FROM players ORDER BY score DESC");
	while($player = $result->fetch_object()) { ?>
		<div class="player" id="<?php echo $player->id;?>">
			<span class="name"><?php echo $player->name;?></span>
			<span class="score"><?php echo $player->score;?></span>
		</div>
	<?php } //end while
}