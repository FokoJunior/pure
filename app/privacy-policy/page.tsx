import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy | Pure Work Spaces',
    description: 'Privacy & Cookies Policy for Pure Work Spaces Ltd.',
}

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-background text-foreground">
            <section className="py-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-2">Privacy &amp; Cookies Policy</h1>
                <p className="text-sm text-foreground/50 mb-12">Effective date: 4 June 2026</p>

                <div className="space-y-10 text-foreground/80 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
                        <p>
                            Pure Work Spaces respects your privacy and is committed to protecting personal information. This Privacy &amp; Cookies Policy explains how we collect, use, and protect your information when you interact with us, whether through our Website or in connection with our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">2. Who We Are</h2>
                        <p className="mb-3">We are Pure Work Spaces Ltd, a specialist commercial cleaning company based in Oxford, UK. Our contact details are:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Address: Prama House, 267 Banbury Road, Oxford OX2 7HT</li>
                            <li>Email: <a href="mailto:hello@pureworkspaces.uk" className="text-primary hover:underline">hello@pureworkspaces.uk</a></li>
                            <li>Telephone: <a href="tel:07300864523" className="text-primary hover:underline">07300 864 523</a></li>
                            <li>Company number: 16957784</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">3. Information We Collect</h2>
                        <p className="mb-3">We may collect and process the following types of personal information:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><span className="font-medium text-foreground">Contact information:</span> your name, email address, telephone number and company name when you complete contact forms, request site assessments or communicate with us.</li>
                            <li><span className="font-medium text-foreground">Service details:</span> information about your property, site or cleaning requirements when requesting quotes or services.</li>
                            <li><span className="font-medium text-foreground">Usage information:</span> details of your interactions with our Website, such as IP address, browser type, pages visited and referring website. This may be collected automatically through cookies and analytics tools.</li>
                            <li><span className="font-medium text-foreground">Communications:</span> records of emails, phone calls or messages between you and us.</li>
                        </ul>
                        <p className="mt-3">We do not intentionally collect special categories of personal data (e.g., health or sensitive information) unless you voluntarily provide it as part of your service requirements.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">4. How We Collect Information</h2>
                        <p className="mb-3">We collect information in several ways:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><span className="font-medium text-foreground">Directly from you:</span> when you fill out forms on our Website, send us an email, call us or otherwise contact us.</li>
                            <li><span className="font-medium text-foreground">Automatically:</span> through cookies and similar technologies when you browse the Website (see Section 10 – Cookies).</li>
                            <li><span className="font-medium text-foreground">From service providers:</span> we may receive limited data from analytics or marketing providers to understand Website performance and campaign effectiveness.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">5. How We Use Your Information</h2>
                        <p className="mb-3">We may use your personal information to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>respond to enquiries and provide quotations;</li>
                            <li>arrange site visits and deliver cleaning services;</li>
                            <li>manage customer relationships and contracts;</li>
                            <li>administer our operations, including record‑keeping and billing;</li>
                            <li>monitor and improve our Website and services;</li>
                            <li>send relevant service updates or marketing communications (you can opt out at any time);</li>
                            <li>comply with legal or regulatory obligations.</li>
                        </ul>
                        <p className="mt-3">We do not sell or rent your personal information to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">6. Lawful Basis for Processing</h2>
                        <p className="mb-3">Under the UK General Data Protection Regulation (GDPR), we rely on one or more of the following lawful bases to process personal information:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><span className="font-medium text-foreground">Legitimate interests:</span> for example, providing quotations, responding to enquiries and maintaining client relationships. We balance our interests with your privacy rights.</li>
                            <li><span className="font-medium text-foreground">Contractual necessity:</span> processing necessary to enter into and perform contracts with our clients.</li>
                            <li><span className="font-medium text-foreground">Consent:</span> where you have given consent, such as signing up for marketing communications. You may withdraw consent at any time.</li>
                            <li><span className="font-medium text-foreground">Legal obligations:</span> where processing is necessary to comply with laws or regulatory requirements (e.g., tax or accounting records).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">7. Sharing Your Information</h2>
                        <p className="mb-3">We may share personal information with trusted third parties who provide services to us, such as:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Website hosting and IT providers that enable our Website and communication systems to operate;</li>
                            <li>Analytics providers that help us analyse Website traffic and performance;</li>
                            <li>Service management platforms or scheduling tools used to organise site visits and manage contracts;</li>
                            <li>Professional advisers (e.g., accountants, legal advisers) where necessary for compliance.</li>
                        </ul>
                        <p className="mt-3">We require all third‑party service providers to respect the security of your personal data and to process it only for specified purposes and in accordance with our instructions. We do not allow our third‑party providers to use your personal data for their own marketing.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">8. International Transfers</h2>
                        <p>
                            We primarily store data within the United Kingdom. Should we transfer personal information outside the UK or European Economic Area, we will ensure appropriate safeguards are in place to protect your data, such as standard contractual clauses or binding corporate rules.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">9. Data Retention</h2>
                        <p>
                            We will retain your personal information only for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting or reporting requirements. Generally this means keeping enquiry records for up to six years after our last contact, unless a longer retention period is required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">10. Cookies and Tracking Technologies</h2>
                        <p className="mb-3">Our Website may use cookies and similar technologies to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>remember your preferences and settings;</li>
                            <li>enable Website functionality;</li>
                            <li>analyse Website traffic and usage patterns;</li>
                            <li>support marketing campaigns.</li>
                        </ul>
                        <p className="mt-3">You can manage or disable cookies through your browser settings. However, disabling cookies may affect the functionality of the Website. For more information about cookies, please contact us using the details in Section 2.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">11. Marketing Communications</h2>
                        <p>
                            We may send occasional updates about our services by email or other electronic means. You can opt out of receiving marketing communications at any time by following the unsubscribe instructions in the message or by contacting us at{' '}
                            <a href="mailto:hello@pureworkspaces.uk" className="text-primary hover:underline">hello@pureworkspaces.uk</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">12. Your Rights</h2>
                        <p className="mb-3">Under data‑protection law, you have a number of rights, including the right to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>access the personal data we hold about you;</li>
                            <li>rectify inaccurate or incomplete data;</li>
                            <li>erase your data where it is no longer necessary for the purposes collected (the &quot;right to be forgotten&quot;);</li>
                            <li>restrict or object to the processing of your data in certain circumstances;</li>
                            <li>data portability in some situations (receive a copy of your data in a structured, commonly used format);</li>
                            <li>withdraw consent where processing is based on consent (this does not affect the lawfulness of processing before withdrawal);</li>
                            <li>lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe your rights have been violated.</li>
                        </ul>
                        <p className="mt-3">To exercise any of these rights, please contact us using the details above. We may need to verify your identity before fulfilling your request.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">13. Data Security</h2>
                        <p>
                            We take appropriate technical and organisational measures to protect personal information from unauthorised access, accidental loss, misuse or disclosure. These measures include secure servers, access controls, encryption of data in transit and staff training. While we strive to protect your personal information, no method of transmission over the internet is completely secure and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">14. Children&apos;s Privacy</h2>
                        <p>
                            Our services and Website are not directed at individuals under 18 years of age. We do not knowingly collect personal data from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so we can delete it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">15. Changes to This Privacy &amp; Cookies Policy</h2>
                        <p>
                            We may update this Policy from time to time. The latest version will always be available on our Website and will supersede previous versions. We encourage you to review this page periodically to stay informed about how we handle your personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">16. Contact Us</h2>
                        <p className="mb-3">For questions or concerns about this Privacy &amp; Cookies Policy, please contact us at:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Email: <a href="mailto:hello@pureworkspaces.uk" className="text-primary hover:underline">hello@pureworkspaces.uk</a></li>
                            <li>Telephone: <a href="tel:07300864523" className="text-primary hover:underline">07300 864 523</a></li>
                            <li>Address: Prama House, 267 Banbury Road, Oxford OX2 7HT</li>
                        </ul>
                    </section>

                </div>
            </section>
        </main>
    )
}
