<?php
$videoUrl = 'https://i-cant.online/video.mp4';
header('Content-Type: video/mp4');
readfile($videoUrl);
exit;
?>
