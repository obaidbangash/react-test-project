export const getContacts = async (accessToken, page) => {
  if (!accessToken) return;

  try {
    let res = await fetch(`https://api-im.chatdaddy.tech/contacts`, {
      // fetch(`https://api-im.chatdaddy.tech/contacts?page='${page}'`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    let result = await res.json();
    console.log("page====", page);
    console.log("result", result);
    return result?.contacts;
  } catch (error) {
    return [];
  }
};

export const addContact = (contact) => {
  return [];
};

export const delecteContact = (id) => {
  return [];
};

export const updateContact = (id, contact) => {
  return [];
};
