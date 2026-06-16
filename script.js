function generatePreview() {

    const form = document.getElementById("teacherForm");
    const preview = document.getElementById("preview");

    const formData = new FormData(form);

    let html = `
        <h2>DCF Form Preview</h2>
        <table border="1" cellpadding="8" cellspacing="0" width="100%">
    `;

    for (let [key, value] of formData.entries()) {

        if(value instanceof File){
            value = value.name;
        }

        html += `
        <tr>
            <td><strong>${key}</strong></td>
            <td>${value}</td>
        </tr>
        `;
    }

    html += `
        </table>

        <br><br>

        <button onclick="window.print()">
            Print Form
        </button>
    `;

    preview.innerHTML = html;

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}
