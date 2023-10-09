document.addEventListener('DOMContentLoaded', function () {
    const textContent = document.getElementById('textContent');
    const addTextBtn = document.getElementById('addTextBtn');
    const imageInput = document.getElementById('imageInput');
    const addImageBtn = document.getElementById('addImageBtn');
    const videoUrl = document.getElementById('videoUrl');
    const addVideoBtn = document.getElementById('addVideoBtn');
    const previewContent = document.getElementById('previewContent');

    addTextBtn.addEventListener('click', function () {
        const text = textContent.value;
        previewContent.innerHTML += `<p>${text}</p>`;
        textContent.value = '';
    });

    addImageBtn.addEventListener('click', function () {
        const imageUrl = imageInput.value;
        previewContent.innerHTML += `<img src="${imageUrl}" alt="Image">`;
        imageInput.value = '';
    });

    addVideoBtn.addEventListener('click', function () {
        const videoUrlValue = videoUrl.value;
        previewContent.innerHTML += `<iframe width="560" height="315" src="${videoUrlValue}" frameborder="0" allowfullscreen></iframe>`;
        videoUrl.value = '';
    });
});
