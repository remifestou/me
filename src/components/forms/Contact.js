import React from 'react'
import NetlifyForm from 'react-netlify-form'

function ContactForm() {
  return (
    <NetlifyForm name='Contact_Form' data-netlify="true">
        <input type="hidden" name="form-name" value="Contact_Form" />
        {({ loading, error, success }) => (
            <div>
                {loading &&
                    <div>Loading...</div>
                }
                {error &&
                    <div>Your information was not sent. Please try again later.</div>
                }
                {success &&
                    <div>Thank you for contacting us!</div>
                }
                {!loading && !success &&
                <div className="contact-form w-full max-w-lg mt-24">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-black-100 text-xs font-bold mb-2"
                                htmlFor="grid-first-name">
                                Prénom
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" name="first-name" type="text" placeholder="Jane" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-black-100 text-xs font-bold mb-2"
                                htmlFor="grid-last-name">
                                Nom
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-black-100 text-xs font-bold mb-2"
                                htmlFor="grid-password">
                                Adresse e-mail
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" name="e-mail" placeholder="jane.doe@gmail.fr" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-black-100 text-xs font-bold mb-2"
                                htmlFor="grid-password">
                                Message
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32" id="grid-password" name="message" placeholder="hey, comment tu vas ..." />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="button -default">
                        Envoyer
                    </button>
                </div>
                }
            </div>
        )}
    </NetlifyForm>
  )
}

export default ContactForm
