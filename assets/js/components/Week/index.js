function weekComponent(data = []) {
    let listString = ''

    for(let i = 0; i < data.length; i++) {
        listString += dayComponent(data[i]);
    }

    const weekHTML = `
        <div class="week">
            ${listString}
        </div>
    `;

    return weekHTML;
}