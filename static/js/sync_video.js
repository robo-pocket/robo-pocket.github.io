// sync video play
function controlVideoFunction(videoClass) {
    return function() {
        const videos = document.querySelectorAll(videoClass);
        let userClicked = false;

        function resetAndPlayAllVideos() {
            videos.forEach(video => {
                video.pause();
                video.currentTime = 0;
                video.play();
            });
        }

        function hideSteps() {
            method_name_begin = document.getElementById($(this).attr('id') + '_begin');
            method_name_end = document.getElementById($(this).attr('id') + '_end');
            method_name_begin.style.display = 'inline';
            method_name_end.style.display = 'none';
        }

        function displaySteps() {
            method_name_begin = document.getElementById($(this).attr('id') + '_begin');
            method_name_end = document.getElementById($(this).attr('id') + '_end');
            method_name_begin.style.display = 'none';
            method_name_end.style.display = 'inline';
        }

        videos.forEach(video => {
            video.addEventListener('focus', () => {
                userClicked = true;
              });

            video.addEventListener('play', function() {
                if (userClicked) {
                    userClicked = false;
                    resetAndPlayAllVideos();
                };
            });
            
            video.addEventListener('playing', hideSteps);
            video.addEventListener('ended', displaySteps);
        });
    };
}

document.addEventListener("DOMContentLoaded", controlVideoFunction('.block-sorting'));
document.addEventListener("DOMContentLoaded", controlVideoFunction('.seasoning-pouring'));
document.addEventListener("DOMContentLoaded", controlVideoFunction('.towel-folding'));
document.addEventListener("DOMContentLoaded", controlVideoFunction('.snack-bagging'));
document.addEventListener("DOMContentLoaded", controlVideoFunction('.distributed-block-sorting'));