import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Terms of Service | Pure Work Spaces',
    description: 'Terms of Service for Pure Work Spaces Ltd.',
}

export default function TermsOfServicePage() {
    return (
        <main className="bg-background text-foreground">
            <section className="py-20 px-6 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
                <p className="text-sm text-foreground/50 mb-12">Effective date: 4 June 2026</p>

                <p className="text-sm text-foreground/60 mb-10 p-4 bg-primary/5 rounded-lg border border-border/50">
                    These documents are not legal advice and should be reviewed by a qualified solicitor before publication.
                </p>

                <div className="space-y-10 text-foreground/80 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                        <p>
                            These Terms of Service (&quot;Terms&quot;) govern your use of the Pure Work Spaces website located at pureworkspaces.uk (&quot;Website&quot;). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">2. About Us</h2>
                        <p>
                            Pure Work Spaces Ltd (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) is a company registered in England and Wales, company number 16957784. We provide specialist, contract‑led commercial cleaning services for businesses in Oxfordshire and Swindon. Our registered office address is Prama House, 267 Banbury Road, Oxford OX2 7HT. You can contact us by email at{' '}
                            <a href="mailto:hello@pureworkspaces.uk" className="text-primary hover:underline">hello@pureworkspaces.uk</a> or by phone on{' '}
                            <a href="tel:07300864523" className="text-primary hover:underline">07300 864 523</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">3. Use of the Website</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium text-foreground mb-1">Informational use only.</h3>
                                <p>The Website provides information about our commercial cleaning services and allows you to request site assessments or quotations. It does not create a binding contract for services; all quotes are subject to written agreement.</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground mb-1">Accuracy of information.</h3>
                                <p>You must ensure that all information you supply through forms or otherwise is accurate and up‑to‑date. You must not impersonate another person or provide false details.</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground mb-1">Prohibited behaviour.</h3>
                                <p>You agree not to:</p>
                                <ul className="list-disc pl-6 mt-2 space-y-1">
                                    <li>use the Website in any way that violates applicable laws or regulations;</li>
                                    <li>transmit malware, viruses or any harmful code;</li>
                                    <li>collect or harvest information from the Website for unsolicited marketing; or</li>
                                    <li>interfere with or disrupt the security or availability of the Website.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
                        <p>
                            All content on the Website—including text, graphics, logos and images—is owned by or licensed to Pure Work Spaces and is protected by intellectual‑property laws. You may view, download and print individual pages for your personal use only. You must not reproduce, modify, distribute or create derivative works from any content without our written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">5. Links to Third‑Party Sites</h2>
                        <p>
                            The Website may contain links to third‑party websites (for example WhatsApp or booking tools). These links are provided for your convenience. We do not control and are not responsible for the content, policies or practices of such sites. Access to any third‑party sites is at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">6. Disclaimers and Limitation of Liability</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium text-foreground mb-1">No warranty.</h3>
                                <p>We strive to provide accurate and up‑to‑date information about our services, but we do not warrant that the Website will be error‑free or available at all times. The Website is provided on an &quot;as‑is&quot; basis.</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-foreground mb-1">Limitation of liability.</h3>
                                <p>To the maximum extent permitted by law, we exclude all liability for any loss or damage (whether direct, indirect or consequential) arising out of or in connection with your use of the Website. Nothing in these Terms excludes liability for death or personal injury caused by negligence or for fraud.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">7. Indemnity</h2>
                        <p>
                            You agree to indemnify and hold Pure Work Spaces harmless from any claim, demand, loss or damages (including legal fees) arising from your violation of these Terms or your misuse of the Website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">8. Governing Law and Jurisdiction</h2>
                        <p>
                            These Terms and any dispute arising from them are governed by the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction over any dispute arising in connection with these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to These Terms</h2>
                        <p>
                            We may update these Terms from time to time. The updated Terms will be posted on this page with a revised &quot;effective date&quot;. Your continued use of the Website after changes have been posted constitutes your acceptance of the revised Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at{' '}
                            <a href="mailto:hello@pureworkspaces.uk" className="text-primary hover:underline">hello@pureworkspaces.uk</a>{' '}
                            or write to us at Prama House, 267 Banbury Road, Oxford OX2 7HT.
                        </p>
                    </section>

                </div>
            </section>
        </main>
    )
}
