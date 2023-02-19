import React from "react";
import SectionTitle from "../../shared/SecTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    const secData = {
        title: "to contact",
        subtitle:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, iusto!",
    };
    return (
        <section className="w-full max-w-7xl mx-auto px-3 xs:px-5 sm:px-8 md:px-8 xl:px-0 mb-24">
            <SectionTitle title={secData.title} subtitle={secData.subtitle} />

            <div className="grid grid-cols-1 gap-y-10 sm:gap-y-0 sm:grid-cols-2 justify-center items-center w-full max-w-2xl mx-auto">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;
