'use client';

import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const AgreementForm = () => {
  const [artistCompany, setArtistCompany] = useState('no');
  const [producerCompany, setProducerCompany] = useState('no');

  const [artistCompanyName, setArtistCompanyName] = useState('');
  const [producerLoanoutCompanyName, setProducerLoanoutCompanyName] = useState('');

  const handleArtistCompanyChange = (e) => {
    setArtistCompany(e.target.value);
  };

  const handleProducerCompanyChange = (e) => {
    setProducerCompany(e.target.value);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Imposta la dimensione del font e il colore del testo
    doc.setFontSize(10); // Dimensione del font
    doc.setTextColor(0, 0, 0); // Colore del testo (nero)
  
    // Aggiungi titolo
    doc.text("Generated Agreement", 10, 10);
    let verticalOffset = 20; // Offset verticale iniziale
  
    // Rimuovi i tag HTML e gestisci il testo a capo
    const lines = agreementText
      .replace(/<h2.*?>/g, '') // Rimuove il tag h2
      .replace(/<\/h2>/g, '') // Rimuove la chiusura del tag h2
      .replace(/<.*?>/g, '') // Rimuove tutti i tag HTML
      .split('\n'); // Divide il testo in righe
  
    lines.forEach(line => {
      // Controlla se l'aggiunta della riga supera il limite della pagina
      if (verticalOffset > doc.internal.pageSize.height - 10) { // 10 per il margine
        doc.addPage(); // Aggiungi una nuova pagina
        verticalOffset = 10; // Resetta l'offset verticale
      }
  
      // Aggiungi il testo
      const splitText = doc.splitTextToSize(line, 190); // Dividi il testo in base alla larghezza della pagina
      splitText.forEach(textLine => {
        doc.text(textLine, 10, verticalOffset); // Aggiungi il testo
        verticalOffset += 10; // Sposta verso il basso per la prossima linea
      });
    });
  
    // Salva il PDF
    doc.save('agreement.pdf');
  };   

  const [formValues, setFormValues] = useState({
    artistCompany: '',
    artistCompanyName: '',
    producerCompany: '',
    producerLoanoutCompanyName: '',
    effectiveDate: '',
    producerLegalName: '',
    producerProfessionalName: '',
    artistLegalName: '',
    artistProfessionalName: '',
    artistAddress: '',
    artistContactName: '',
    artistContactEmail: '',
    producerAddress: '',
    producerContactName: '',
    producerContactEmail: '',
    numberOfMasters: '',
    advance: '',
    royaltyPercent: '',
    compositionTitle: '',
    publishingSharePercent: '',
    governingLaw: ''
  });

  const [agreementText, setAgreementText] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    console.log(formValues)

  };

  const generateAgreement = () => {
    const {
      artistCompany,
      artistCompanyName,
      producerCompany,
      producerLoanoutCompanyName,
      effectiveDate,
      producerLegalName,
      producerProfessionalName,
      artistLegalName,
      artistProfessionalName,
      artistAddress,
      artistContactName,
      artistContactEmail,
      producerAddress,
      producerContactName,
      producerContactEmail,
      numberOfMasters,
      advance,
      royaltyPercent,
      compositionTitle,
      publishingSharePercent,
      governingLaw
    } = formValues;

    const agreementText = `
      <h2 class="text-[#000] text-[24px]">Generated Agreement</h2>
               <p>This agreement ("Agreement") dated as of ${effectiveDate} sets forth the material terms of the agreement between ${artistCompany === "yes" ? artistCompanyName : artistProfessionalName} ("Company" or "Artist") and ${producerCompany === "yes" ? producerLoanoutCompanyName : producerProfessionalName} ("Lender" or "Producer") for Producer's non-exclusive services in connection with the master recording(s) set forth below featuring the recorded performance(s) of the artist professionally known as ${artistProfessionalName} ("Artist") recorded in connection with and/or for possible inclusion on, among other things, Artist's upcoming release (the "Release") subject to Company's distribution/recording agreement ("Distribution Agreement") with a Distributor. Capitalized terms used herein and not specifically defined herein shall have the meaning(s) ascribed to them in the Distribution Agreement; in the event of any discrepancy, the definitions set forth in this Agreement shall be deemed controlling. Lender and Company agree to the following:</p>
      <div class="agreement-box">
        <table>
          <tr>
            <td>1. Artist</td>
            <td>${artistProfessionalName} p/k/a ${artistProfessionalName}</td>
          </tr>
          <tr>
            <td>2. Producer</td>
            <td>${producerProfessionalName} p/k/a ${producerProfessionalName}</td>
          </tr>
          <tr>
            <td>3. Artist Address</td>
            <td>Contact Name: ${artistContactName}<br>Contact Email: ${artistContactEmail}</td>
          </tr>
          <tr>
            <td>4. Producer Address</td>
            <td>Contact Name: ${producerContactName}<br>Contact Email: ${producerContactEmail}</td>
          </tr>
          <tr>
            <td>5. Composition(s) / Master(s)</td>
                           <td>${numberOfMasters} master recordings ("Master(s)") embodying Artist's featured performance of the musical composition(s) listed on Schedule 1 (the "Composition(s)" and each a "Composition") attached hereto and made a part hereof.</td>
          </tr>
          <tr>
            <td>6. Advance</td>
                           <td>Producer shall perform all services in connection with the Master(s) as are customarily performed by producers in the recording industry. The Master(s) shall be commercially and technically satisfactory to both Company and Distributor for the manufacture and sale of records.</td>
          </tr>
          <tr>
            <td>7. Royalty</td>
                           <td>Company shall pay you an aggregate all-in advance of ${advance} for ${numberOfMasters} Master(s), which such Advance shall be deemed fully recoupable against Producer's Royalty (as defined below). The Advance will be paid in full promptly following the complete execution of this Agreement.</td>
          </tr>
          <tr>
                           <td>8. Royalty</td>
                           <td>Company shall pay or shall instruct and cause Distributor to pay or otherwise allocate (pursuant to the irrevocable letter of direction annexed hereto and incorporated by reference herein as Exhibit B) a royalty to Lender in the amount per Master of ${royaltyPercent} of Net Artist Royalties (as defined in the "Producer Royalty Provisions", attached as Schedule 2 and made a part hereof) actually received by Company in connection with exploitations of the Masters hereunder on top-line USNRC net sales of records ("Producer's Royalty"). Producer's Royalty shall be calculated, determined, adjusted and reduced on the same basis (without regard to sales based escalations or Artist's overall recoupment status) as set forth in Exhibit A, and payment of Producer's Royalty shall be subject to the terms and conditions as embodied in the Producer Royalty Provisions and Exhibit A, as applicable. For the avoidance of doubt, in the event there is a discrepancy between the terms and conditions contained in Schedule 2 and the Distribution Agreement, the terms and conditions of the Distribution Agreement shall control. Producer's Royalty shall not be reduced by amounts payable to any third party producers or mixers who perform additional services with respect to the Master(s) unless such third parties were engaged by Producer, following satisfactory delivery and acceptance of the Master by Company and/or Distributor.</td>
                       </tr>
                       <tr>
                           <td>9. Controlled Composition</td>
                           <td>The parties acknowledge that the Composition(s) shall be owned and/or controlled in accordance with the ownership interests set forth on Schedule 1. In the event that any composition(s) which are wholly or partly written, owned or controlled by Lender, Producer, or Producer Personnel (hereafter defined) is embodied in the Master, Lender and Producer hereby irrevocably license (and shall use reasonable efforts to cause their and Producer Personnel's respective publishing designee(s) [each, a "Producer Publisher"] to license) their respective share(s), in and to the Composition(s) to Company, Artist, Distributor, and each of their respective designees, licensees, and assignees (sometimes referred to herein collectively as "Company's Designees") an irrevocable universe-wide first-use license under copyright to reproduce and exploit their respective share(s) in the Composition(s) as embodied on the Master at a rate equal to one hundred percent (100%) of the minimum statutory or prevailing rate in the United States and Canada, as applicable, as of the date of initial release of the Master(s) and without regard to so-called "caps" but otherwise pursuant, if applicable, to the so-called Controlled Composition clause contained in the Distribution Agreement Extracts. Further, Lender and/or Producer shall license and/or shall use reasonable efforts to cause their Producer Publisher(s) (and to cause Producer Personnel) to license to Company's Designees, a nonexclusive, worldwide and perpetual synchronization and other necessary use license(s), free of charge or royalty, solely for the purpose of reproducing Lender's and/or Producer's and/or Producer Personnel's share of any Composition in any promotional Video (as defined in the Distribution Agreement Extracts) and exhibiting, duplicating, manufacturing and distributing copies of such Video only in connection with promotional purposes and only in the event that Artist, any other co-writer's or publishing designees of the Composition do not receive any compensation for said promotional use. The foregoing is not intended to limit Lender's, Producer's, or any Producer Publisher's right to receive directly its respective share of publishing monies in connection with "monetized" promotional Videos (e.g., Videos exhibited on YouTube, Vimeo or Vevo). For the avoidance of doubt, each applicable writer / publisher shall exclusively administer his/her/its respective share of the applicable Composition(s) and to collect directly from the applicable sources only their respective share of income derived from the exploitation of the Composition(s)</td>
                       </tr>
                       <tr>
                           <td>10. Ownership of Master(s) / Grant of Rights</td>
                           <td>All results and proceeds of the services of Lender, Producer, and/or any third party furnished or engaged solely by Lender or Producer (hereinafter individually and collectively referred to as "Producer Personnel"), including the Master(s) (but excluding the Composition(s) to the extent of Lender's and/or Producer's interest therein and Lender and Producer hereby shall be deemed "works-for-hire" for Company within the meaning of the Copyright Act of 1976 (Title 17, U.S.C.), as amended, shall be subject to the provisions of this Agreement, and Lender shall cause any such Producer Personnel to be bound in writing by the terms hereof. If it is determined that the Master(s) do not so qualify, then the Master(s), together with all rights therein (other than the Composition(s)), shall be automatically assigned to Company and Company's Designees by this Agreement. For the avoidance of doubt, the parties hereto acknowledge that any co-producers of the Master(s) have a producer agreement with Artist that is separate and apart from this Agreement with Producer, which delineates payments and advances and royalties to such co-producer(s) and that such co-producer(s) shall not be considered "Producer Personnel" hereunder. Upon signature of this Agreement, Lender and Producer shall immediately transfer to Company all rights (including but not limited to copyright) in and to the Master(s) (excluding the Composition(s)). Lender and Producer further grant to Company and Company's Designees the right, throughout the universe and in perpetuity, to use Lender's name and Producer's professional name, and Producer's approved likeness and approved biographical material solely in the packaging and metadata of Records embodying the Master(s) and in all promotion and advertising therefor. We shall provide Lender for Lender's and/or Producer's approval any likeness, portrait or pictures of Producer or biographical material about Producer which we propose to use in connection therewith. We will not use any such material which Lender disapproves in writing within five (5) business days following the date on which such materials are received by Lender or Producer, in time for use within Distributor's production and release schedules. No inadvertent, non-repetitive failure to comply with this paragraph will constitute a breach of this Agreement provided that following written notice from Lender, Company cures and/or uses reasonable commercial efforts to cure or instruct Distributor or other applicable third parties to prospectively cure any such credit failure and (cure as promptly as possible with regard to DSP's) and Lender and Producer will not be entitled to injunctive relief to restrain the continuing use of any material used in contravention of this paragraph. Lender shall have the right to submit photographs and likenesses of, and biographical material concerning, Lender's submission of the same shall constitute Lender's and Producer's approval thereof. Lender shall cause Producer to waive any claims based on infringement of Producer's "moral rights", and understands that the Master(s) may be changed, altered, remixed, or coupled with any other recording(s) or other material in Company's and Distributor's sole discretion, subject to the terms and conditions of the Distribution Agreement. Lender and Producer shall have the right to request that Producer's credit be removed from the Master(s) if the Master(s) are materially altered in any way (other than for timing or formatting purposes) by giving Company written notice thereof. For avoidance of doubt, Producer is not an original author of the copyright underlying the Master(s) and shall not in any event claim any reversionary right under the United States Copyright Act Section 203, or otherwise.</td>
                       </tr>
                       <tr>
                           <td>11. Credit</td>
                           <td>With respect to the Master(s), Company shall accord, or shall instruct and use reasonable commercial efforts to cause Distributor to provide, credit to Producer as set forth on Schedule 1 on the labels, back cover, and in the liner notes of any record containing the Master(s) on metadata in connection with electronic transmissions, including any "single" embodying the Master(s) on the A-side, and in all print and consumer ads (including Billboard strip ads) placed or controlled by Company or Distributor of one-quarter (1/4) page or larger featuring the Master(s), provided, all other producers of the Master are credited the same. Company's inadvertent, non-repetitive failure to, or any failure by Distributor, to provide such credit shall not be deemed to be a material breach of this Agreement, provided that following written notice from Lender, Company uses reasonable commercial efforts to cure or instruct Distributor or other applicable third parties to prospectively cure any such credit failure and (cure as promptly as possible following the receipt of notice with regards to DSPs). In no event shall Lender or Producer be entitled to an injunction in connection with a breach of these credit provisions.</td>
                       </tr>
                       <tr>
                           <td>12. Samples</td>
                           <td>Lender and Producer will not "sample", "interpolate", or otherwise incorporate into ("Sample," "Sampling") the Master(s) or Composition(s) (if applicable), or permit any Producer Personnel to Sample any copyrighted or otherwise proprietary material ("Proprietary Material") belonging to any person, other than such material owned and/or supplied to Lender or Producer by Company or Artist for such purpose, unless approved by Company or Artist in writing. Lender shall advise us in writing of any such Proprietary Material solely incorporated by you and shall provide us with all information necessary to obtain appropriate permissions to use same, without restriction, on and in connection with the applicable Master(s). We shall have no obligation to accept any master recordings containing Proprietary Material, and our or Distributor's acceptance or use of same shall not relieve Lender and Producer of any obligations hereunder nor deprive us of any rights hereunder. Without limitation of Company's other rights: (a) in connection with any Approved Sample (as hereinafter defined), (i) any sums payable by or on behalf of Company or Company's Designees in connection with the clearance of Samples that have been disclosed to and approved by us in writing prior to commercial release of the applicable Master ("Approved Sample") shall be deemed additional recoupable recording costs, (ii) Lender and Producer shall be solely responsible for paying for an amount equal to any and all other recurring obligations and similar costs therefor (e.g., royalties or any contingency participation conveyed [whether expressed in royalty or penny-rate terms], etc.), multiplied by the Fraction (hereinafter defined), and (iii) any copyright ownership in the Composition that must be conveyed to a third party with respect to such Approved Sample shall be borne pro-rata with all writers; and (b) notwithstanding anything to the contrary contained herein, any sums payable (including, without limitation, record royalties) by or on behalf of Company or Company's Designees in connection with the clearance of Samples embodied by Lender, Producer, and/or Producer Personnel that have not been disclosed to and approved by us prior to commercial release of the applicable Master ("Undisclosed Sample") shall be deductible from any and all sums and/or interest due or accorded to Lender and/or Producer hereunder, and any copyright ownership in the Composition that must be conveyed to a third party with respect to such Undisclosed Sample shall be borne entirely by Lender, Producer, Producer Personnel and/or Producer Publisher, as applicable.</td>
                       </tr>
                       <tr>
                           <td>13. Indemnity / Governing Law / Venue</td>
                           <td>
                               (a) Each party hereto agrees to indemnify the other party's designees, licensee's & assigns (collectively, the "Indemnified Party") from all damages, liabilities, out-of-pocket costs, losses and expenses (including legal costs and actual and reasonable outside attorney's fees) arising out of or connected with any third party claim, demand, or action which is inconsistent with any of the warranties, representations, or covenants made by such indemnifying party in this Agreement provided such claim is reduced to a final, adverse, non-appealable judgment or settled with the indemnifying party's prior written consent. The indemnifying party will reimburse the Indemnified Party upon written demand for any payment made by the Indemnified Party at any time in respect of any such third-party claim, liability, damage or expense to which the foregoing indemnity relates. The Indemnified Party shall give the indemnifying party prompt written notice of any claim to which the foregoing indemnity applies, and the indemnifying party may participate in the defense of same with counsel of its choosing at its sole cost and expense; provided that the Indemnified Party's decision in connection with the defense of any such claim shall be final.
                               (b) Company may withhold payments due to Lender pending resolution of any claim related to Lender's foregoing indemnity obligation, but if Lender posts a surety bond from a company approved by Company in its reasonable discretion (in an amount related to Lender's and/or Producer's potential liability), Company will not withhold such payments. Pending the determination of any claim relating to Lender's foregoing indemnity obligation, unless Lender posts a bond in a form and amount acceptable to Company in Company's reasonable discretion, Company shall have the right to withhold from any sums due Lender hereunder an amount equal to Lender's potential liability pursuant to this paragraph. If as of the date twelve (12) months following the date such sums were initially withheld, no litigation on the claim has commenced and no settlement discussion are then taking place, then the sums so withheld shall be credited to your account (subject to Company's right to once again withhold if litigation subsequently is instigated).
                               (c) If either party hereto institutes any action, suit or proceeding based upon any matter, claim or controversy arising hereunder or relating hereto, such action shall be brought solely in the State of ${governingLaw} and shall be governed by ${governingLaw} and the parties hereto (and Lender shall cause Producer to) submit to the jurisdiction and venue of said court, provided that notwithstanding anything to the contrary in this paragraph, if Company or Artist is sued or joined (e.g. by joinder or impleader) in any other court or forum by a person, or entity other than Lender or Producer in respect of any matter that may give rise to a claim by or against Lender or Producer hereunder, Lender consents (and shall cause Producer to consent) to the jurisdiction of such court or forum over any such claim asserted against Lender or Producer.
                               (d) Regardless of the form in which any action hereunder is pursued, and without limitation of the right of either party hereunder to pursue other lawful methods of service of process, service of process on the respective party in writing and which is either delivered (a) by Express Mail, Federal Express or other express delivery service (receipt requested), or (b) via registered or certified mail, return receipt requested and received, at the respective address set forth above, shall be deemed for all purposes personal service upon such party under the ${governingLaw} Rules of Civil Procedure and the Federal Rules of Civil Procedure, respectively.
                           </td>
                       </tr>
                       <tr>
                           <td>14. Miscellaneous</td>
                           <td>
                               (a) Nothing contained herein shall be deemed to obligate Company or Company's Designees to embody any of the Master(s) on any Record or any other medium recorded, exploited or released by Company or Company's Designees.
                               (b) No party will be deemed to be in breach of any of such party's obligations hereunder unless and until the other party will have given written notice setting forth the nature of such breach and the breaching party will have failed to cure such breach within thirty (30) days after the effective date of such notice (reduced to fifteen [15] days with regard to payment obligations). In the event of any breach of this Agreement by Company, Lender's and Producer's sole remedy shall be an action at law for damages actually incurred, if any, and in no event shall Lender or Producer be entitled to seek equitable or other injunctive relief. It is expressly agreed that Lender is acting as an independent contractor and that nothing herein contained shall constitute a partnership, a joint venture, agency or employment relationship between Lender and Company.
                               (c) Company shall have the right, at its election, to assign any of its rights hereunder, in whole or in part, to any person or entity, provided Company shall remain primarily liable. Lender shall not have the right to assign any of Lender's or Producer's obligations or rights hereunder, absent the express consent of Company, except for the right to assign payment or the one-time right to assign this Agreement to an entity wholly owned by Producer (provided that Producer agrees to a customary personal inducement in connection with any such assignment).
                               (d) This Agreement supersedes all prior agreements between the parties pertaining to the subject matter hereof, whether verbal or written, and any further modification(s) to this Agreement shall not be binding unless in writing and signed by the parties hereto. This Agreement may be signed in any number of counterparts, each such counterpart being deemed to be an original instrument, but all of which shall constitute one document. Delivery of a signed counterpart of a signature page to this Agreement by facsimile or other electronic means shall be deemed effective as delivery of a manually executed original counterpart of this Agreement.
                               (e) The parties acknowledge that they have participated jointly in the negotiation and drafting of this Agreement and, in the event an ambiguity or question of intent or interpretation arises, this Agreement shall be construed consistent with the joint drafting of this Agreement by the parties and no presumption or burden of proof shall arise favoring or disfavoring any party by virtue of the authorship of any of the provisions of this Agreement. All notices to be given by either party hereunder shall be in writing and shall be delivered by hand or by United States certified mail, postage prepaid, return receipt requested, to the address of each party as first set forth above until notice of a new address shall be duly given, except that royalty statements and any payments due hereunder, shall be sent to you at such address by regular mail.
                               (f) Any waiver by either party of any term or condition of this Agreement shall not be deemed or construed as a waiver of such term or condition for the future, or of any subsequent breach thereof. All remedies, rights, undertakings, obligations and agreements contained in this Agreement shall be cumulative and one of them shall not be in limitation of any other remedy, right, undertaking, obligation or agreement of either party.
                               (g) EACH PARTY ACKNOWLEDGES AND AGREES THAT IT UNDERSTANDS THIS AGREEMENT AND HAS BEEN ADVISED BY THE OTHER PARTY OF THE SIGNIFICANT IMPORTANCE OF RETAINING AN INDEPENDENT ATTORNEY OF ITS CHOICE TO REVIEW THIS AGREEMENT ON ITS BEHALF. EACH PARTY HEREBY ACKNOWLEDGES AND AGREES THAT IT HAS HAD THE UNRESTRICTED OPPORTUNITY TO BE REPRESENTED BY AN INDEPENDENT ATTORNEY. IN THE EVENT OF A PARTY'S FAILURE TO OBTAIN AN INDEPENDENT ATTORNEY OR WAIVER THEREOF, SUCH PARTY HEREBY WARRANTS AND REPRESENTS THAT IT WILL NOT ATTEMPT TO USE SUCH FAILURE AND/OR WAIVER TO OBTAIN AN ATTORNEY AGAINST THE OTHER PARTY OR ANY OF THEIR SUCCESSORS.
                           </td>
                       </tr>
        </table>
      </div>
      
      <h2 class="text-[#000] text-[24px]">AGREED AND ACCEPTED:</h2>
               <p>${artistCompany === "yes" ? artistCompanyName : artistLegalName}</p>
               <div class="signature-line"></div>
               <p>Authorized signatory</p>
               <p>${producerCompany === "yes" ? producerLoanoutCompanyName : producerLegalName}</p>
               <div class="signature-line"></div>
               <p>Authorized signatory</p>
               ${producerCompany === "yes" ? `
               <h2>Inducement</h2>
               <p>To induce ${artistCompany === "yes" ? artistCompanyName : artistLegalName} ("Company") to enter into the foregoing agreement ("Agreement") with ${producerLoanoutCompanyName}, the undersigned hereby:</p>
               <ul>
                   <li>acknowledges that the undersigned understands and is familiar with all the terms and conditions of the Agreement;</li>
                   <li>assents to the execution of the Agreement and agrees to be bound by the terms and conditions thereof, including, without limitation, each and every provision of the Agreement that relates to the undersigned in any way, directly or indirectly, the services to be rendered thereunder by the undersigned and restrictions imposed upon the undersigned in accordance with the provisions of the Agreement, and hereby guarantees to Company the full and faithful performance of all the terms and conditions of the Agreement by the undersigned and Lender (including, without limitation, all representations, warranties and indemnification obligations set forth in the Agreement); and</li>
                   <li>acknowledges and agrees that Company shall be under no obligation to make any payments to the undersigned or otherwise, for or in connection with this inducement and for or in connection with the services rendered by the undersigned or in connection with the rights granted to Company thereunder and the fulfillment of the undersigned's obligations pursuant to the Agreement (except mechanical royalties and other publishing monies, if any).</li>
               </ul>
               <h2 class="text-[#000] text-[24px]">Agreed and Accepted:</h2>
               <div class="signature-line"></div>
               <p>${producerLegalName} p/k/a ${producerProfessionalName}</p>
               <div class="signature-line"></div>
               <p>(an authorized signatory)</p>
               ` : ""}
               <h2 class="text-[#000] text-[24px]">Schedule 1</h2>
               <p>List of Composition Ownership of Producer/Songwriter</p>
               <p>${producerCompany === "yes" ? producerLoanoutCompanyName : producerLegalName} f/s/o ${producerLegalName}<br>${producerAddress}</p>
               <p>The following shall confirm the writer/publisher split for ${producerLegalName} with respect to the Composition tentatively entitled "${compositionTitle}" performed by "${artistProfessionalName}" (the "Artist").</p>
               <table>
                   <tr>
                       <th>TITLE</th>
                       <th>AUTHOR</th>
                       <th>SHARE</th>
                   </tr>
                   <tr>
                       <td>${compositionTitle}</td>
                       <td>${producerLegalName}</td>
                       <td>${publishingSharePercent}%</td>
                   </tr>
               </table>
               <p>The Writers have collaborated in the creation of the musical composition set forth below ("Composition") and the Writers shall be deemed to be the authors of the Composition pursuant to and in accordance with the applicable copyright ownership percentages set forth below ("Applicable Percentages"). Accordingly, the Writers each agree to list the Writers as authors of the Composition and their Applicable Percentages and Publishing Companies on any and all documents relating to the Composition, including, without limitation, copyright registration forms and information that may be provided to music publishers and performing rights societies.</p>
               <h2 class="text-[#000] text-[24px]">Agreed to and Accepted:</h2>
               <p>${producerCompany === "yes" ? producerLoanoutCompanyName : producerLegalName} (If no Producer Loan Out Company is selected, leave empty)</p>
               <div class="signature-line"></div>
               <p>(an authorized signatory)</p>
               <p>${producerLegalName}</p>
               <div class="signature-line"></div>
               <p>(an authorized signatory)</p>
               <h2 class="text-[#000] text-[24px]">Schedule 2</h2>
               <p>Producer Royalty Provisions</p>
               <p>1. As used herein, "Net Artist Royalties" shall mean the gross revenues actually received by Artist and/or Distributor in connection with all commercial exploitations of the Master(s), less all documented, out-of-pocket costs and expenses actually paid by Artist and/or Distributor, or charged to Artist and/or Distributor, in connection with the Master(s), including, but not limited to recording costs, manufacturing costs, marketing costs, advertising costs, and promotion costs (collectively, the "Total Costs").</p>
               <p>2. Producer's Royalty shall be paid retroactively after Artist and/or Distributor recoups the Total Costs (excluding the any in-pocket advances paid to Artist and/or any third party rendering services in connection with the Master(s)) incurred in connection with the applicable Master(s) from the gross "all-in" royalties payable to Artist in connection with all exploitations of the Master(s), minus Producer's Royalty and the royalties payable to all third-party producers and mixers (other than Artist) rendering services with respect to the Master(s), and further subject to Distributor's recoupment of the Advance from Producer's Royalty. For the avoidance of doubt, the Advance shall only be recouped once.</p>
               <p>3. Producer's Royalty for Products that embody the Master(s) together with master recordings that are not the Master(s) shall be pro-rated by a fraction, the numerator of which is the number of royalty-bearing or fee-bearing Master(s) embodied thereon and the denominator of which is the number of royalty-bearing (or fee-bearing) master recordings (including the Master(s)) embodied thereon.</p>
               <p>4. Notwithstanding anything to the contrary contained herein, with respect to the release of any physical single record embodying no more than two (2) master recordings (including, without limitation, twelve-inch singles) (a "Single"), in the event the "A" side of any such Single shall embody a Master and the "B" side of such Single shall embody master recordings other than said Master, we shall nevertheless pay Producer's Royalty in respect of such Single as if both sides had embodied such Master. In the event that the "B" side of any such Single shall embody a Master and the "A" side of such Single shall embody a master recording other than said Master, no royalty shall be payable to Producer in connection with such exploitation of such Master on a "B" side, provided that such "A" side producer is entitled to similar "A" side protection.</p>
               <p>5. On exploitations of the Master(s) or the Product for which a percentage of net receipts, including without limitation so-called "flat fee" income, or the like, is payable pursuant to the Artist, Producer's Royalty will be equal to that portion of net receipts on such exploitations that is payable to Artist pursuant to the Distribution Agreement. On exploitations of audio-visual recordings embodying a Master or Masters, Producer's Royalty will be equal to fifty percent (50%) of the otherwise applicable Producer's Royalty. Notwithstanding anything to the contrary in this Agreement, Producer's Royalty in connection with a Master or Masters embodied in "MTV-style" music videos, or the like, will be payable prospectively after the recoupable production costs of the applicable video have been recouped.</p>
               <p>6. In the event Company or Artist receives or is credited with any so-called "Direct Monies" directly from third-parties other than Distributor (e.g., monies from SoundExchange) solely and directly attributable to the Master(s), Company will pay, or shall instruct such third party to pay, Lender its pro-rata share of such Direct Monies, which shall be the same percentage as Producer's Royalty. Company shall submit the irrevocable letter of direction in the form of Exhibit C attached hereto and incorporated herein by this reference as signed by Artist instructing SoundExchange to account directly to Lender or Producer its pro-rata share at the same time and subject to the same conditions pursuant to which SoundExchange accounts to Artist. In the event Company and/or Artist contract with a featured artist for the Master(s), Company and/or Artist shall obtain and submit a letter of direction in the form of Exhibit C in favor of the Producer. In the event that SoundExchange does not directly account to Lender for its share of Direct Monies, Company shall account for and pay Lender their share of SoundExchange Direct Monies pursuant to the terms of the "Accounting" paragraphs below, without regard to the recoupment status of Lender's/Producer's royalty account hereunder.</p>
               <p>7. Unless otherwise agreed in writing by Artist, Producer's Royalty shall be reduced by amounts payable to any third-party producers or mixers who perform additional services with respect to the Master(s).</p>
               <p>8. For avoidance of doubt, these provisions on this Schedule 2 shall continue to govern the terms and conditions of Producer's Royalty in the event the Master(s) are no longer distributed by Distributor.</p>
               <p>Accounting:</p>
               <p>Company shall use reasonable efforts to cause Distributor to pay to Lender royalties, fees and/or advances directly via an irrevocable letter of direction in substantially the form attached hereto as Exhibit B (or such form as required by Distributor). In the event that Distributor refuses or fails to pay royalties, fees, or advances directly to Lender, and following Lender's written notice to Company of such failure, Company shall send Lender statements regarding royalties, fees or advances payable to Lender within forty-five (45) days of Company's receipt thereof together with any payments due to Lender thereunder. Company shall have the right to deduct from any amounts payable to Lender hereunder solely such portion thereof as may be required to be deducted under the provisions of any applicable statute, regulation, treaty or other law, or under any applicable union or guild agreement, and Lender shall promptly execute and deliver to Company such forms and other documents as may be reasonably required by Company in connection therewith.</p>
                <p>Lender and Producer understand and agree that Company will be relying on statements provided to Company by Distributor. Accordingly, Lender shall be deemed to have consented to all royalty statements and all other accountings rendered by Company hereunder and each such royalty statement or other accounting shall be conclusive, final, and binding, shall constitute an account stated, and shall not be subject to any objection for any reason whatsoever unless specific objection in writing, stating the basis thereof, is given by Lender to Company by the date that is three (3) months prior to the date Company has to inspect the books of Distributor (the "Audit Period"). At any time within the Audit Period, Lender may, on reasonable notice to Company, appoint a certified public accountant to audit, at Lender's own expense, our books and records solely as they relate to the sale and other exploitation of the Master(s) (and related expenditures) solely for the purpose of verifying the royalties or credits due to Lender under this Agreement. Lender shall furnish Company with a copy of the audit report within thirty (30) days after the completion of the applicable audit. No accounting statement shall be subject to audit more than once and no more than one (1) audit shall be conducted in any calendar year. No action, suit, or proceeding of any nature in respect of any royalty statement or other accounting rendered hereunder may be maintained against Company unless such action, suit, or proceeding is commenced against Company in a court of competent jurisdiction by the date that is three (3) months prior to the date Company has to commence action against Distributor. Lender and Producer shall not have the right to audit the books and records of Distributor. Company shall credit Lender's account with Lender's pro rata share of any monies recovered by Company with respect to the Master(s) pursuant to any audit Company may elect to conduct of Distributor or claim against Distributor in connection with the Masters, or any recoveries or settlements with Distributor or any third party, after deduction "off-the-top" of any actual, out-of-pocket, third party, reasonable costs actually incurred directly as a result of such audit, claim or settlement (solely to the extent such costs have not been reimbursed by Distributor or such other third party). At Lender's written request Company shall promptly provide Lender with relevant portions of the audit report submitted to Distributor.</p>
`;

    setAgreementText(agreementText);
  };

  return (
    <div className="container mx-auto p-4 overflow-y-scroll h-[70vh] bg-white radius-[12px] p-4 agreementForm">
      <p className='text-[#1C0E0D]'>
        Does the artist have a company? If you have an artist company, corporation, or LLC, then select 'yes'. If not, select 'no'
      </p>
      <select name="artistCompany" value={artistCompany} onChange={handleInputChange}>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>

      {artistCompany === 'yes' && (
        <div id="artistCompanyNameInput">
          <p className='text-[#1C0E0D]'>What is the artist's company name?</p>
          <input
            type="text"
            name="artistCompanyName"
            placeholder="Enter artist company name"
            value={artistCompanyName}
            onChange={handleInputChange}
          />
        </div>
      )}

      <div>
        <p className='text-[#1C0E0D]'>
          Does the producer have a loan-out company? If you have a producer company, corporation, or LLC, then select 'yes'. If not, select 'no'
        </p>
        <select name="producerCompany" value={producerCompany} onChange={handleInputChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {producerCompany === 'yes' && (
        <div id="producerCompanyNameInput">
          <p className='text-[#1C0E0D]'>What is the producer's loan-out company name?</p>
          <input
            type="text"
            name="producerLoanoutCompanyName"
            placeholder="Enter producer's loan-out company name"
            value={producerLoanoutCompanyName}
            onChange={handleInputChange}
          />
        </div>
      )}

      <p className='text-[#1C0E0D]'>What is the effective date? This means the day of the contract, which would likely be today or sometime this week</p>
      <input type="date" name="effectiveDate" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the producer's legal name? This is your government name</p>
      <input type="text" name="producerLegalName" placeholder="Enter producer legal name" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the producer's professional name? In other words, what does the world know you as, which can be different from your legal name</p>
      <input type="text" name="producerProfessionalName" placeholder="Enter professional producer name" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the artist's legal name? This is your government name</p>
      <input type="text" name="artistLegalName" placeholder="Enter artist legal name" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the artist's professional name? In other words, what does the world know you as, which can be different from your legal name</p>
      <input type="text" name="artistProfessionalName" placeholder="Enter artist professional name" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the artist's address? Where should we send you payment / notice information</p>
      <input type="text" name="artistAddress" placeholder="Enter artist address" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the artist's contact name?</p>
      <input type="text" name="artistContactName" placeholder="Enter artist contact name" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the artist's contact email?</p>
      <input type="email" name="artistContactEmail" placeholder="Enter artist contact email" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the producer's address? Where should we send you payment / notice information</p>
      <input type="text" name="producerAddress" placeholder="Enter producer address" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the producer's contact name?</p>
      <input type="text" name="producerContactName" placeholder="Enter producer contact name" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the producer's contact email?</p>
      <input type="email" name="producerContactEmail" placeholder="Enter producer contact email" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>How many masters are being produced?</p>
      <input type="number" name="numberOfMasters" placeholder="Enter number of masters" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the advance amount? (Include currency symbol, e.g., $1000)</p>
      <input type="text" name="advance" placeholder="Enter advance amount" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the royalty percentage? (e.g., 5%)</p>
      <input type="text" name="royaltyPercent" placeholder="Enter royalty percentage" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the title of the composition?</p>
      <input type="text" name="compositionTitle" placeholder="Enter composition title" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the publishing share percent? (e.g., 50%)</p>
      <input type="text" name="publishingSharePercent" placeholder="Enter publishing share percent" onChange={handleInputChange} />

      <p className='text-[#1C0E0D]'>What is the governing law?</p>
      <select name="governingLaw" onChange={handleInputChange}>
        {['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'].map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
    
      <div>
        <button onClick={generateAgreement} className="flex items-center bg-[#473BF0] text-white px-4 py-4 rounded-[8px] transition duration-300 ease-in-out hover:bg-opacity-80 aggreementFormButton">
          <span className="text-[14px] mr-auto">Generate Agreement</span>
          <svg className="ml-2 w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m0 0l-4-4m4 4l-4 4" />
          </svg>
        </button>
      </div>

      <div>
        <button onClick={generatePDF} className="flex items-center border-1 bg-white text-white px-4 py-4 rounded-[8px] transition duration-300 ease-in-out hover:bg-opacity-80 mt-4 aggreementFormButtonOutline">
          <span className="text-[14px] mr-auto text-[#473BF0]">Export to PDF</span>
          <svg className="ml-2 w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m0 0l-4-4m4 4l-4 4" />
          </svg>
        </button>
      </div>

      <div
        id="agreement"
        className="mt-4 p-4 border border-gray-300 rounded bg-gray-50 text-[#000]"
        dangerouslySetInnerHTML={{ __html: agreementText }}
      />
    </div>
  );
};

export default AgreementForm;