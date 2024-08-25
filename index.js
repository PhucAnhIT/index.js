const express = require('express');
const app = express();

app.get('/video.mp4', (req, res) => {
    const videoUrl = 'https://i-cant.online/video.mp4';
    res.redirect(videoUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
