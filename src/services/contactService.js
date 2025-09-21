

import { BASE_URL } from "./api";

// to submit the contact form

export const submitContact = async (contactData) =>{
    const res = await fetch (`${BASE_URL}/contact`, {
        method:"POST",
        headers: { "Content-type":"application/json"},
        body:JSON.stringify(contactData),
    });
    return await res.json();
};

   