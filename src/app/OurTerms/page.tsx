import React from 'react';

export default function Terms() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4 text-center">Our Terms</h1>
            <div className="shadow-2xl bg-red-950 rounded-lg p-6">
                <p className="mb-4 font-bold">ALL ITEMS ARE SOLD AS IS:</p>
                <p className="mb-4">
                    Please verify the condition, completeness, measurements, style, color, type, brand, etc. to ensure that you know what you are buying.
                </p>

                <p className="mb-4 font-bold">PRICES ARE SUBJECT TO CHANGE WITHOUT NOTICE:</p>
                <p className="mb-4">
                    Our prices are subject to change and we can only honor quoted prices till the end of the day.
                </p>

                <p className="mb-4 font-bold">RETURNS:</p>
                <p className="mb-4">
                    Returns must be accompanied by a receipt within two (2) weeks of the date of purchase. Product must be returned in the original condition. The packaging must remain intact.
                </p>

                <p className="mb-4 font-bold">
                    RETURNS WILL BE SUBJECT TO A 50% RESTOCKING FEE
                    <br />
                    *ON OUT OF STOCK ITEMS*
                    <br />
                    NO RETURNS ON SPECIAL ORDERS
                </p>

                <p className="mb-4 font-bold">HOLDING ITEMS:</p>
                <p className="mb-4">
                    Purchased items should be taken at the time of purchase. We will however hold items for up to 7 days. A storage fee of $10.00 per day item/pallet will be added after the 7 days. After 14 days, the items will be considered abandoned.
                </p>

                <p className="mb-4 font-bold">JACOB&apos;S SUPPLY DELIVERIES:</p>
                <p className="mb-4">
                    Call the store at 734-224-0978 for details.
                </p>

                <p className="mb-4 font-bold">BUYER IS RESPONSIBLE TO SECURE LOAD:</p>
                <p className="mb-4">
                    We can and will offer loading assistance however it is not our responsibility.
                </p>
            </div>
        </div>
    );
}
