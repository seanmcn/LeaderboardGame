<?php
require_once("database.php"); 
require_once("header.php");

$result = $db->query("SELECT * FROM players ORDER BY score DESC");
?>
	<div class="leaderboard">
		<?php while($player = $result->fetch_object()) { ?>
			<div class="player" id="<?php echo $player->id;?>">
				<span class="name"><?php echo $player->name;?></span>
				<span class="score"><?php echo $player->score;?></span>
			</div>
		<?php } ?>
	</div>
	<div class="none">Click a player to select</div>
	
	<div class="details">
		<div class="name"></div>
		<input type="button" class="givePoints" value="Give 5 points">
	</div>
<?php require_once("footer.php"); ?>