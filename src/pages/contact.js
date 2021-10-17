import React from 'react'
import ContactForm from '../components/ContactForm'
import Section from '../components/Section'
import Seo from '../components/SEO'

const ContactPage = () => {
    return (
        <>
            <Seo title="Contact" />
            <Section>
                <h2>Contact</h2>
                <ContactForm />
            </Section>
        </>
    )
}

export default ContactPage
