import { Helmet } from 'react-helmet-async';

export default function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | EdTraining</title>
        <link rel="canonical" href="https://www.theedtraining.com/terms-and-conditions" />
      </Helmet>

      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms and Conditions</h1>
          
          <div className="space-y-6 text-slate-600">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Introduction and Acceptance</h2>
              <p>Welcome to EdTraining! These terms and conditions outline the rules and regulations for the use of EdMentor's Website, located at https://www.theedtraining.com/. By accessing this website we assume you accept these terms and conditions. Do not continue to use EdTraining if you do not agree to take all of the terms and conditions stated on this page.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Cookies</h2>
              <p>We employ the use of cookies. By accessing EdTraining, you agreed to use cookies in agreement with the EdMentor's Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">License and IP restrictions</h2>
              <p>Unless otherwise stated, EdMentor and/or its licensors own the intellectual property rights for all material on EdTraining. All intellectual property rights are reserved. You may access this from EdTraining for your own personal use subjected to restrictions set in these terms and conditions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Prohibited Actions</h2>
              <p>You must not:</p>
              <ul className="list-disc pl-5">
                <li>Republish material from EdTraining</li>
                <li>Sell, rent or sub-license material from EdTraining</li>
                <li>Reproduce, duplicate or copy material from EdTraining</li>
                <li>Redistribute content from EdTraining</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">User Comments</h2>
              <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. EdMentor does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of EdMentor,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Hyperlinking Policy</h2>
              <p>The following organizations may link to our Website without prior written approval: Government agencies, Search engines, News organizations, Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Content Liability</h2>
              <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Reservation of Rights & Link Removal</h2>
              <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Disclaimer</h2>
              <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury, limit or exclude our or your liability for fraud or fraudulent misrepresentation, or limit any of our or your liabilities in any way that is not permitted under applicable law.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
