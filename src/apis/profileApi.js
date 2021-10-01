const BASE_URL = "http://127.0.0.1:8000/crm/";
const id = sessionStorage.getItem("userId");
const accountEndpoint = BASE_URL + "useraccounts/" + id + "/";
const profileEndpoint = BASE_URL + "userprofiles/" + id + "/";

async function getUserProfile() {
    const requestOptions = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        mode: "cors",
    };
    let accountResponse = await fetch(accountEndpoint, requestOptions);
    let profileResponse = await fetch(profileEndpoint, requestOptions);
    var accountData = await accountResponse.json();
    let profileData = await profileResponse.json();
    accountData.organisation = profileData.organisation;
    accountData.role = profileData.role;
    accountData.phone = profileData.phoneNumber;
    accountData.image = profileData.image;
    return accountData;
}

async function getProfileIcon() {
    const requestOptions = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        mode: "cors",
    };
    let profileResponse = await fetch(profileEndpoint, requestOptions);
    return profileResponse.json();
}

async function updateProfile(user) {
    const form = new FormData();
    form.append("id", id);
    form.append("url", profileEndpoint);
    form.append("userAccount", accountEndpoint);
    form.append("first_name", user.firstName);
    form.append("last_name", user.lastName);
    form.append("email", user.email);
    form.append("organisation", user.organisation);
    form.append("role", user.role);
    form.append("phoneNumber", user.phone);
    if (user.image !== null) form.append("image", user.image);
    const requestOptions = {
        method: "PATCH",
        headers: {},
        mode: "cors",
        body: form,
    };
    await fetch(accountEndpoint, requestOptions);
    await fetch(profileEndpoint, requestOptions);
    return { success: true };
}

async function getCustomFields() {
    const endpoint = profileEndpoint + "fields/";
    const requestOptions = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        mode: "cors",
    };
    const fields = await fetch(endpoint, requestOptions);
    return fields.json();
}

async function updateCustomFields(fields) {
    const endpoint = profileEndpoint + "fields/";
    for (var field of fields) {
        field.userAccount = id;
    }
    const requestOptions = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
            fields: fields,
        }),
    };
    await fetch(endpoint, requestOptions);
}

module.exports = {
    getUserProfile,
    getProfileIcon,
    updateProfile,
    getCustomFields,
    updateCustomFields,
};
