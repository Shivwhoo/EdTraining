import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | EdTraining</title>
        <link rel="canonical" href="https://www.theedtraining.com/privacy-policy" />
      </Helmet>

      {/* Removed bg-white to let the global dot-grid texture show through */}
      <div className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-6xl font-mono font-black text-[#1C1C1C] uppercase tracking-widest inline-block bg-[#FBCFE8] px-6 py-4 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(28,28,28,1)] rotate-1 relative z-10">
              Privacy Policy
            </h1>
            
            {/* Faux Data/Secure Stamp */}
            <div className="hidden md:flex absolute top-0 left-12 text-[#1C1C1C] font-mono font-bold uppercase tracking-widest border-4 border-[#1C1C1C] rounded-full w-32 h-32 items-center justify-center -rotate-12 opacity-30 select-none pointer-events-none z-20 shadow-sm">
              <span className="rotate-12 border-y-2 border-[#1C1C1C] px-2">Secure</span>
            </div>
          </div>
          
          {/* Main Document Body */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-[#FDFBF7] border-4 border-[#1C1C1C] p-8 md:p-16 shadow-[16px_16px_0px_rgba(28,28,28,1)] relative"
          >
            {/* Faux Tape */}
            <div className="absolute -top-4 right-1/4 w-32 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] -rotate-2 backdrop-blur-sm shadow-sm z-10"></div>
            
            <div className="space-y-6 text-lg text-[#1C1C1C] font-serif leading-relaxed">
              
              <div className="bg-[#FEF08A] border-2 border-[#1C1C1C] p-6 mb-10 shadow-[4px_4px_0px_rgba(28,28,28,1)] -rotate-1">
                <p className="mb-4 font-bold">EdTraining website is owned by EdMentor, which is a data controller of your personal data.</p>
                <p className="mb-4">We have adopted this Privacy Policy, which determines how we are processing the information collected by EdTraining, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using EdTraining website.</p>
                <p>We take care of your personal data and undertake to guarantee its confidentiality and security.</p>
              </div>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#A7F3D0] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] rotate-1">
                  Personal information we collect
                </h2>
                <p>When you visit the EdTraining, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as “Device Information.” Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.</p>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#FEF08A] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] -rotate-1">
                  Why do we process your data?
                </h2>
                <div className="space-y-4">
                  <p>Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.</p>
                  <p>You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features. For example, you won’t be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via <a href="mailto:help@theedtraining.com" className="font-mono font-bold bg-[#FEF08A] px-1 border-2 border-transparent hover:border-[#1C1C1C] transition-all whitespace-nowrap">help@theedtraining.com</a>.</p>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#FBCFE8] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] rotate-1">
                  Your rights
                </h2>
                <p className="font-mono font-bold uppercase tracking-wider mb-4 border-b-2 border-dashed border-[#1C1C1C] pb-2 inline-block">If you are a European resident, you have the following rights related to your personal data:</p>
                <ul className="space-y-0 border-l-4 border-[#1C1C1C] pl-6 ml-2 my-6">
                  <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> The right to be informed.</li>
                  <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> The right of access.</li>
                  <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> The right to rectification.</li>
                  <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> The right to erasure.</li>
                  <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> The right to restrict processing.</li>
                  <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> The right to data portability.</li>
                  <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> The right to object.</li>
                  <li className="border-b border-transparent py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Rights in relation to automated decision-making and profiling.</li>
                </ul>
                <div className="space-y-4">
                  <p>If you would like to exercise this right, please contact us through the contact information below.</p>
                  <p>Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information might be transferred outside of Europe, including Canada and the United States.</p>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#A7F3D0] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] -rotate-1">
                  Links to other websites
                </h2>
                <p>Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.</p>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#FEF08A] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] rotate-1">
                  Information security
                </h2>
                <p>We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.</p>
              </section>

              {/* Special Legal Clauses styled as red-marked annotations */}
              <div className="mt-16 grid md:grid-cols-2 gap-8 border-t-4 border-dashed border-[#1C1C1C] pt-12">
                <section className="bg-[#F4F4F0] border-l-8 border-[#D32F2F] p-6 shadow-sm">
                  <h2 className="text-xl font-mono font-bold text-[#D32F2F] uppercase tracking-wider mb-3">
                    No refund policy
                  </h2>
                  <p className="font-serif">We do not offer refunds for any services provided. We appreciate your understanding.</p>
                </section>

                <section className="bg-[#F4F4F0] border-l-8 border-[#D32F2F] p-6 shadow-sm">
                  <h2 className="text-xl font-mono font-bold text-[#D32F2F] uppercase tracking-wider mb-3">
                    Shipping Not Applicable
                  </h2>
                  <p className="font-serif">Shipping is not applicable to the services we provide.</p>
                </section>
              </div>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#FBCFE8] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] -rotate-1">
                  Changes to This Privacy Policy
                </h2>
                <p>We understand that privacy is important. Therefore, we may update our Privacy Policy periodically. Any changes will be promptly posted on this page, so you can stay informed about how we handle your personal information.</p>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#A7F3D0] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] rotate-1">
                  Legal disclosure
                </h2>
                <p>We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.</p>
              </section>

              <section className="mt-12 bg-[#1C1C1C] text-[#FDFBF7] p-8 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(254,240,138,1)] rotate-1">
                <h2 className="text-2xl font-mono font-bold uppercase tracking-wider mb-4 text-[#FEF08A]">
                  Contact information
                </h2>
                <p className="font-serif">If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to <a href="mailto:help@theedtraining.com" className="font-mono font-bold bg-[#FEF08A] text-[#1C1C1C] px-2 py-0.5 border-2 border-transparent hover:border-[#FDFBF7] transition-all inline-block mt-2 md:mt-0 md:ml-2">help@theedtraining.com</a>.</p>
              </section>

            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}