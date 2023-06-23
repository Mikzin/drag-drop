async function addItem(newItem) {
  // Fetch the data from the server
  const response = await fetch(
    `https://inventory-353a7-default-rtdb.europe-west1.firebasedatabase.app/items.json`,
    {
      method: 'GET',
      body: JSON.stringify(),
    }
  );

  const responseData = await response.json();

  if (!response.ok) {
    const error = new Error(responseData.message || 'Failed to send request.');
    throw error;
  }

  // Update the data by adding the new item
  responseData.push(newItem);

  // Post the updated data back to the server
  const updateResponse = await fetch(
    `https://inventory-353a7-default-rtdb.europe-west1.firebasedatabase.app/items.json`,
    {
      method: 'PUT',
      body: JSON.stringify(responseData),
    }
  );

  const updateResponseData = await updateResponse.json();

  if (!updateResponse.ok) {
    const error = new Error(
      updateResponseData.message || 'Failed to send request.'
    );
    throw error;
  }

  return updateResponseData;
}

export { addItem };
