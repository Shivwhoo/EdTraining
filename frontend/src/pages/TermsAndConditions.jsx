import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | EdTraining</title>
        <link rel="canonical" href="https://www.theedtraining.com/terms-and-conditions" />
      </Helmet>

      {/* Removed bg-white so the global dot-grid texture shows through */}
      <div className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 relative">
            <h1 className="text-4xl md:text-6xl font-mono font-black text-[#1C1C1C] uppercase tracking-widest inline-block bg-[#FEF08A] px-6 py-4 border-4 border-[#1C1C1C] shadow-[8px_8px_0px_rgba(28,28,28,1)] -rotate-1 relative z-10">
              Terms & Conditions
            </h1>
            
            {/* Faux Red Stamp */}
            <div className="hidden md:flex absolute top-0 right-12 text-[#D32F2F] font-mono font-bold uppercase tracking-widest border-4 border-[#D32F2F] rounded-full w-32 h-32 items-center justify-center rotate-12 opacity-60 select-none pointer-events-none z-20 shadow-sm">
              <span className="-rotate-12 border-y-2 border-[#D32F2F] px-2">Official</span>
            </div>
          </div>
          
          {/* Main Document Body (Styled like a printed manual) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-[#FDFBF7] border-4 border-[#1C1C1C] p-8 md:p-16 shadow-[16px_16px_0px_rgba(28,28,28,1)] relative"
          >
            {/* Faux Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] rotate-1 backdrop-blur-sm shadow-sm z-10"></div>
            
            <div className="space-y-6 text-lg text-[#1C1C1C] font-serif leading-relaxed">
              <p className="font-mono font-bold uppercase tracking-wider text-xl mb-8 border-b-4 border-[#1C1C1C] pb-4">Welcome to EdTraining!</p>
              
              <p>These terms and conditions outline the rules and regulations for the use of EdTraining's Website, located at https://www.theedtraining.com</p>
              <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use EdTraining if you do not agree to take all of the terms and conditions stated on this page.</p>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#A7F3D0] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] rotate-1">Cookies</h2>
                <div className="space-y-4">
                  <p>The website uses cookies to help personalize your online experience. By accessing EdTraining, you agreed to use the required cookies.</p>
                  <p>A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.</p>
                  <p>We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.</p>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#A7F3D0] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] -rotate-1">License</h2>
                <div className="space-y-4">
                  <p>Unless otherwise stated, EdTraining and/or its licensors own the intellectual property rights for all material on EdTraining. All intellectual property rights are reserved. You may access this from EdTraining for your own personal use subjected to restrictions set in these terms and conditions.</p>
                  
                  <p className="font-mono font-bold uppercase tracking-wider mt-8 mb-4 border-b-2 border-dashed border-[#1C1C1C] pb-2 inline-block">You must not:</p>
                  <ul className="space-y-0 border-l-4 border-[#D32F2F] pl-6 ml-2 my-6">
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#D32F2F] font-bold mr-3 mt-1 leading-none">×</span> Copy or republish material from EdTraining</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#D32F2F] font-bold mr-3 mt-1 leading-none">×</span> Sell, rent, or sub-license material from EdTraining</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#D32F2F] font-bold mr-3 mt-1 leading-none">×</span> Reproduce, duplicate or copy material from EdTraining</li>
                    <li className="border-b border-transparent py-3 flex items-start"><span className="text-[#D32F2F] font-bold mr-3 mt-1 leading-none">×</span> Redistribute content from EdTraining</li>
                  </ul>
                  
                  <p className="mt-6 italic text-[#4A4A4A]">This Agreement shall begin on the date hereof.</p>
                  
                  <p>Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website. EdTraining does not filter, edit, publish or review Comments before their presence on the website. Comments do not reflect the views and opinions of EdTraining, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, EdTraining shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
                  <p>EdTraining reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.</p>
                  
                  <p className="font-mono font-bold uppercase tracking-wider mt-8 mb-4 border-b-2 border-dashed border-[#1C1C1C] pb-2 inline-block">You warrant and represent that:</p>
                  <ul className="space-y-0 border-l-4 border-[#1C1C1C] pl-6 ml-2 my-6">
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy.</li>
                    <li className="border-b border-transparent py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                  </ul>
                  
                  <p className="mt-6 bg-[#F4F4F0] p-4 border-2 border-[#1C1C1C]">You hereby grant EdTraining a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.</p>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#A7F3D0] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] rotate-1">Hyperlinking to our Content</h2>
                <div className="space-y-4">
                  <p className="font-mono font-bold uppercase tracking-wider mb-4 border-b-2 border-dashed border-[#1C1C1C] pb-2 inline-block">The following organizations may link to our Website without prior written approval:</p>
                  <ul className="space-y-0 border-l-4 border-[#1C1C1C] pl-6 ml-2 my-6">
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Government agencies;</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Search engines;</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> News organizations;</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                    <li className="border-b border-transparent py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                  </ul>
                  
                  <p className="mt-6">These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.</p>
                  
                  <p className="font-mono font-bold uppercase tracking-wider mt-8 mb-4 border-b-2 border-dashed border-[#1C1C1C] pb-2 inline-block">We may consider and approve other link requests from the following types of organizations:</p>
                  <ul className="space-y-0 border-l-4 border-[#1C1C1C] pl-6 ml-2 my-6">
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Commonly-known consumer and/or business information sources;</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Dot.com community sites;</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Associations or other groups representing charities;</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Online directory distributors;</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Internet portals;</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Accounting, law, and consulting firms; and</li>
                    <li className="border-b border-transparent py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Educational institutions and trade associations.</li>
                  </ul>
                  
                  <p className="mt-6">We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of EdTraining; and (d) the link is in the context of general resource information.</p>
                  <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</p>
                  <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to EdTraining. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
                  
                  <p className="font-mono font-bold uppercase tracking-wider mt-8 mb-4 border-b-2 border-dashed border-[#1C1C1C] pb-2 inline-block">Approved organizations may hyperlink to our Website as follows:</p>
                  <ul className="space-y-0 border-l-4 border-[#1C1C1C] pl-6 ml-2 my-6">
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> By use of our corporate name; or</li>
                    <li className="border-b border-dashed border-[#d1d5db] py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> By use of the uniform resource locator being linked to; or</li>
                    <li className="border-b border-transparent py-3 flex items-start"><span className="text-[#1C1C1C] font-mono font-bold mr-3 mt-1 leading-none">-</span> Using any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
                  </ul>
                  <p className="mt-6 italic text-[#D32F2F]">No use of EdTraining's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#A7F3D0] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] -rotate-1">Content Liability</h2>
                <p>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#A7F3D0] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] rotate-1">Reservation of Rights</h2>
                <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-mono font-bold text-[#1C1C1C] uppercase tracking-wider mb-6 bg-[#A7F3D0] inline-block px-3 py-1 border-2 border-[#1C1C1C] shadow-[2px_2px_0px_rgba(28,28,28,1)] -rotate-1">Removal of links from our website</h2>
                <div className="space-y-4">
                  <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.</p>
                  <p>We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
                </div>
              </section>

            </div>
          </motion.div>

          {/* Disclaimer Section (Styled as a distinct warning note attached to the bottom) */}
          <div className="mt-16 bg-[#FBCFE8] border-4 border-[#1C1C1C] p-8 shadow-[8px_8px_0px_rgba(28,28,28,1)] rotate-1 max-w-3xl mx-auto relative">
            {/* Faux Tape */}
            <div className="absolute -top-4 right-10 w-24 h-8 bg-white/60 border-2 border-dashed border-[#1C1C1C] -rotate-3 backdrop-blur-sm shadow-sm z-10"></div>
            
            <h2 className="text-2xl font-mono font-black text-[#1C1C1C] uppercase tracking-widest mb-6 underline decoration-wavy decoration-2 underline-offset-4">Disclaimer</h2>
            
            <div className="space-y-4 text-lg text-[#1C1C1C] font-serif leading-relaxed">
              <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
              <ul className="space-y-0 border-l-4 border-[#1C1C1C] pl-6 ml-2 my-4">
                <li className="border-b border-dashed border-[#1C1C1C]/30 py-2 flex items-start"><span className="text-[#1C1C1C] font-bold mr-3 leading-none">•</span> Limit or exclude our or your liability for death or personal injury;</li>
                <li className="border-b border-dashed border-[#1C1C1C]/30 py-2 flex items-start"><span className="text-[#1C1C1C] font-bold mr-3 leading-none">•</span> Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li className="border-b border-dashed border-[#1C1C1C]/30 py-2 flex items-start"><span className="text-[#1C1C1C] font-bold mr-3 leading-none">•</span> Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li className="border-b border-transparent py-2 flex items-start"><span className="text-[#1C1C1C] font-bold mr-3 leading-none">•</span> Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
              </ul>
              <p className="mt-6">The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.</p>
              <p className="font-bold border-t-2 border-[#1C1C1C] pt-4 mt-6">As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}