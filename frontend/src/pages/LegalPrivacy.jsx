import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | EdTraining</title>
        <link rel="canonical" href="https://www.theedtraining.com/privacy-policy" />
      </Helmet>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Ownership</h2>
              <p>The EdTraining website is owned by EdMentor, which is a data controller of your personal data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Personal information collected</h2>
              <p>When you visit the website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as "Device Information." Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Why we process your data</h2>
              <p>Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Optionality Statement</h2>
              <p>You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website's features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Your rights</h2>
              <p>If you are a European resident, you have the following rights related to your personal data:</p>
              <ul className="list-disc pl-5">
                <li>The right to be informed.</li>
                <li>The right of access.</li>
                <li>The right to rectification.</li>
                <li>The right to erasure.</li>
                <li>The right to restrict processing.</li>
                <li>The right to data portability.</li>
                <li>The right to object.</li>
                <li>Rights in relation to automated decision-making and profiling.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">International transfer</h2>
              <p>Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you, or otherwise to pursue our legitimate business interests listed above. Please note that your information might be transferred outside of Europe, including Canada and the United States.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Links to other websites</h2>
              <p>Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Information security</h2>
              <p>We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">No Refund Policy</h2>
              <p>All sales are final. We maintain a strict no refund policy on all our subscription models and courses. Pay only for what you use on a flexible basis. Shipping is not applicable as all services are delivered digitally.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Changes to this policy</h2>
              <p>We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting on the website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Legal disclosure</h2>
              <p>We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Contact information</h2>
              <p>If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to help@theedtraining.com.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
