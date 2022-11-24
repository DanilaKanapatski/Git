const userContainer = document.getElementById("user");

const getUser = () => {
  return fetch("https://randomuser.me/api/").then((res) => res.json());
};

const renderLoading = () => {
  userContainer.innerHTML = "Loading...";
};

const renderError = () => {
  userContainer.innerHTML = "Error...";
};

(async () => {
  try {
    renderLoading();

    const {
      results: [user],
    } = await getUser();

    renderUser(user);
  } catch (err) {}
})();