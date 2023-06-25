async function addItem(newItem) {
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

  responseData.push(newItem);

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

async function fetchData(data, images) {
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
  data.value = responseData;

  for (let i = 0; i < images.value.length; i++) {
    data.value[i].image = images.value[i];
  }

  return data;
  // console.log(data.value[1].image, images.value[1]);
}

export { addItem, fetchData };
