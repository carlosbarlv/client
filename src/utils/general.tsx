// Keeping all of Carlos' logic to format menu options since we need
// to discuss how this will be returned from the API.
export const formatMenuOptions = (rawOptions: any = []) => {
  const parents = rawOptions.filter((data: any) => {
    if (data.PADRE === '01') {
      data.name = data.NAME;
      data.id = data.ID;
    }

    return data.PADRE === '01';
  });

  return parents.map((data: any) => {
    if (getChildren(rawOptions, data.ID)) {
      data.children = getChildren(rawOptions, data.ID);
    }

    return data;
  });
};

const getChildren = (dataJSON: any, idActividad: any) => {
  return dataJSON.filter((data: any) => {
    if (data.PADRE === idActividad) {
      data.name = data.NAME;
      data.id = data.ID;
      if (getChildren(dataJSON, data.ID).length > 0) {
        data.children = getChildren(dataJSON, data.ID);
      }
    }

    return data.PADRE === idActividad;
  });
};
