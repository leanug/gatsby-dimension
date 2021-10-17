import React from 'react'
import styled from 'styled-components'

const ContactForm = () => (
    <Wrapper>
        <form 
            name="Contact Form" 
        >   
            <div className="columns">
                <div>
                    <label>Name
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Name"
                        />
                    </label>
                </div>
                <div>
                    <label>Email
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email"
                        />
                    </label>
                </div>
            </div>
            <label>Message
            <textarea 
                placeholder="Message" 
                name="message" 
                rows="5" 
            ></textarea>
            </label>
            <button 
                aria-label="Send message" 
                className="button bg-dark" 
                type="submit"
            >
                Send Message
            </button>
        </form>
    </Wrapper>
)

const Wrapper = styled.div`
    .columns {
        display: flex;
        
        div:first-of-type {
            margin-right: 1rem;
        }

        div:last-of-type {
            margin-left: 1rem;
        }
    }

    label {
        display: block;
        font-size: 1.4rem;
        letter-spacing: 0.2rem;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
    }

   .info-data > p {
        display: flex;
    }

    p:not(:last-child) {
        margin-bottom: 3rem;
    }

    input[type=text],
    input[type=email],
    textarea {
        background-color: transparent;
        border: 1px solid var(--clr-psi);
        border-radius: 0.5rem;
        color: var(--clr-psi);
        font-size: 1.6rem;
        margin-top: 1.4rem;
        padding: 1.5rem;
        transition: var(--transition);
        width: 100%;

        &:focus {
            background-color: rgba(255,255,255,0.05);
        }
    }

    .button {
        cursor: pointer;
        font-family: var(--secondary-font);
        font-size: 1.4rem;
        letter-spacing: 0.2rem;
        padding: 1.4rem 3rem;
        margin-top: 0.5rem;
    }
`

export default ContactForm;