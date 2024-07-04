document.addEventListener('DOMContentLoaded', function () {
    // Sample JSON response
    const jsonResponse = {
        "id": 12345,
        "items": {
            "burger": 2,
            "fries": 1,
            "soda": 3
        }
    };
    // Populate the order ID
    document.getElementById('orderId').textContent = jsonResponse.id;
    // Populate the items list
    const itemsList = document.getElementById('itemsList');
    for (const [item, quantity] of Object.entries(jsonResponse.items)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${item} - `;
        const quantitySpan = document.createElement('span');
        quantitySpan.textContent = quantity;
        listItem.appendChild(quantitySpan);
        itemsList.appendChild(listItem);
    }
});
 