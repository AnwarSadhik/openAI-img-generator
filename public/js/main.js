function handleSubmit(e) {
    e.preventDefault();

    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if (prompt === '') {
        alert('Please add some text')
        return;
    }
    generateImgRequest(prompt, size)
}
async function generateImgRequest(prompt, size) {
    try {
        showSpinner();

        const response = await fetch('/openai/generateimg',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt,
                size,
            })
        })
        if (!response.ok) {
            removeSpinner();
            throw new Error('That image could not be generated');
          }

          const data = await response.json();

          const img = data.data

          document.querySelector('#image').src = img;
          removeSpinner();
    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
}
function showSpinner() {
    document.querySelector('.spinner').classList.add('show')
}
function removeSpinner() {
    document.querySelector('.spinner').classList.remove('show')
}
document.querySelector('#image-form').addEventListener('submit', handleSubmit)