import emailjs from '@emailjs/browser';

export const sendEmail = async (data) => {
    let templateParams = {
        fName: data.firstName,
        lName: data.lastName,
        email: data.email,
        phone: data.phoneNumber,
        businessName: data.businessName || "NA",
        businessWebsite: data.businessWebsite || "NA",
        message: data.message,
    };
    await emailjs.send(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, templateParams, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
}