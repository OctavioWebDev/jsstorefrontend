import React from 'react';
import Banner from '@/components/Banner';

export default function Terms() {
    return (
        <>
            <article className="max-w-3xl mx-auto px-4 py-12 bg-slate-900 rounded-3xl mt-10 mb-10 shadow-2xl text-white">
                <h1 className="text-4xl font-bold mb-8 text-center">Our Terms</h1>
                <div className="prose prose-lg">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">ALL ITEMS ARE SOLD AS IS</h2>
                        <p className="mb-4 leading-relaxed">
                            Please verify the condition, completeness, measurements, style, color, type, brand, etc. to ensure that you know what you are buying.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">PRICES ARE SUBJECT TO CHANGE WITHOUT NOTICE</h2>
                        <p className="mb-4 leading-relaxed">
                            Our prices are subject to change and we can only honor quoted prices till the end of the day.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">RETURNS</h2>
                        <p className="mb-4 leading-relaxed">
                            Returns must be accompanied by a receipt within two (2) weeks of the date of purchase. Product must be returned in the original condition. The packaging must remain intact.
                        </p>
                        <p className="font-semibold mb-2">
                            RETURNS WILL BE SUBJECT TO A 50% RESTOCKING FEE
                        </p>
                        <p className="font-semibold mb-2">
                            *ON OUT OF STOCK ITEMS*
                        </p>
                        <p className="font-semibold mb-4">
                            NO RETURNS ON SPECIAL ORDERS
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">HOLDING ITEMS</h2>
                        <p className="mb-4 leading-relaxed">
                            Purchased items should be taken at the time of purchase. We will however hold items for up to 7 days. A storage fee of $10.00 per day item/pallet will be added after the 7 days. After 14 days, the items will be considered abandoned.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">JACOB'S SUPPLY DELIVERIES</h2>
                        <p className="mb-4 leading-relaxed">
                            Call the store at 734-224-0978 for details.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">BUYER IS RESPONSIBLE TO SECURE LOAD</h2>
                        <p className="mb-4 leading-relaxed">
                            We can and will offer loading assistance however it is not our responsibility.
                        </p>
                    </section>
                </div>
            </article>
            <Banner />
        </>
    );
}
