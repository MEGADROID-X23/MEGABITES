require('dotenv').config();

function makePayment() {
        var handler = PaystackPop.setup({
            key:'pk_test_9a405a8f0a4c3466321f8b340bb805b7041e6792', // Replace with your PayStack public key
            email: 'customer@example.com', // Replace with the customer's email address
            amount: 5000 *100, // Replace with the amount to be paid in kobo
            currency: 'NGN', // Replace with the currency code (e.g. NGN for Naira)
            ref: '', // Replace with a unique reference for the order
            metadata: {
                custom_fields: [
                    {
                        display_name: "Mobile Number",
                        variable_name: "mobile_number",
                        value: "+2348012345678" // Replace with the customer's mobile number
                    }
                ]
            },
            callback: function(response) {
                // Handle the payment success
                alert('Your order has been successful, thanks and enjoy your meal!');
            },
            onClose: function() {
                // Handle the payment window closed
            }
        });
        handler.openIframe();
}
