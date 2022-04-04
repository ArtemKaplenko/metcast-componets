function dayComponent(element = {}) {
    const dayHTML = `
        <div class='day'>
            <div>${element.day}</div>
            <div>${element.date}</div>
            <div>
                <img src="${element.img}" alt="погода" />
            </div>
            <div>${element.temp}</div>
        </div>
    `;

    return dayHTML;
}   