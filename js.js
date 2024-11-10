document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('mutebtn');
    const muteDiv = document.getElementById('mutediv');

    const fourBtn = document.getElementById('a');
    const f1Btn = document.getElementById('F1');
    const f2Btn = document.getElementById('F2');
    const f3Btn = document.getElementById('F3');
    const f4Btn = document.getElementById('F4');
    const camsDiv = document.getElementById('cams');
    const iframes = document.querySelectorAll('#cams iframe');
    const e = iframes[0];
    const z = iframes[1];
    const d = iframes[2];
    const v = iframes[3];

    function resetIframes() {
        camsDiv.classList.remove('alle', 'full-cam');
        e.style.display = 'none';
        z.style.display = 'none';
        d.style.display = 'none';
        v.style.display = 'none';
    }

    toggleBtn.addEventListener('click', function() {
        toggleBtn.classList.toggle('active');

        if (toggleBtn.classList.contains('active')) {
            muteDiv.style.display = 'block';
            toggleBtn.value = 'Unmute';  
        } else {
            muteDiv.style.display = 'none';
            toggleBtn.value = 'Mute'; 
        }
    });

    fourBtn.addEventListener('click', function() {
        resetIframes();  
        camsDiv.classList.add('alle'); 
        e.style.display = 'block';
        z.style.display = 'block';
        d.style.display = 'block';
        v.style.display = 'block';
    });

    f1Btn.addEventListener('click', function() {
        resetIframes(); 
        camsDiv.classList.add('full-cam'); 
        e.style.display = 'block';
    });

    f2Btn.addEventListener('click', function() {
        resetIframes();  
        camsDiv.classList.add('full-cam'); 
        z.style.display = 'block';
    });

    f3Btn.addEventListener('click', function() {
        resetIframes();  
        camsDiv.classList.add('full-cam');
        d.style.display = 'block';
    });

    f4Btn.addEventListener('click', function() {
        resetIframes(); 
        camsDiv.classList.add('full-cam');
        v.style.display = 'block';
    });
});


function dus() {
    const iframes = document.querySelectorAll('#cams iframe');
    const e = iframes[0];
    const z = iframes[1];
    const d = iframes[2];
    const v = iframes[3];

    e.src = document.getElementById('dus').getAttribute('data-cam1')
    z.src = document.getElementById('dus').getAttribute('data-cam2')
    d.src = document.getElementById('dus').getAttribute('data-cam3')
    v.src = document.getElementById('dus').getAttribute('data-cam4')
}
function langenfeld() {
    const iframes = document.querySelectorAll('#cams iframe');
    const e = iframes[0];
    const z = iframes[1];
    const d = iframes[2];
    const v = iframes[3];

    e.src = document.getElementById('langenfeld').getAttribute('data-cam1')
    z.src = document.getElementById('langenfeld').getAttribute('data-cam2')
    d.src = document.getElementById('langenfeld').getAttribute('data-cam3')
    v.src = document.getElementById('langenfeld').getAttribute('data-cam4')
}