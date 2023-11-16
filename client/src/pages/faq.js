import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer,  MDBDropdownMenu, MDBCollapse } from "mdb-react-ui-kit";
import './pages.css'
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function FAQ() {
  return (
    <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Question #1 Cancellation">
          <strong>Cancellation Policy</strong> Let's convey that emergencies may happen,
          however the teacher as a freelancer is counting on the working schedule to happen.
          Therefore the following cancellation policy must be followed: Classes need to be 
          cancelled with a 24 prior notice. No last minute situation like "I feel asleep" mostly 
          when there are reminders. Classes with no proper justification and last minute 
          cancellation will be considered attended. <code>.Courses</code>, get already a bundle and 
          discount given that is a share space, therefore the class not attended is considered given 
          unless it is cancelled by the teacher due to a holiday or special event.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Question #2 Platforms">
          <strong>Platforms used</strong> 
          <ul>
            <li>Zoom</li>
            <li>Meet</li>
            <li>Discord</li>
            </ul> <code>Talk to the teacher</code>, get a link prior to your lesson.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Question #3 Waiting times">
          <strong>15 max </strong> Depending on class length.
          The waiting time is 15 minutes and the class is considered attended.
           <code>.Make sure</code> to communicate any issues with due time.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="Question #4 Material & HW">
          <strong>Register & Log in </strong> to your account to have
          access to your class material, your schedule and you payment.
           <code>.Make sure</code> to check the material and return the homework sheet completed.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="Question #5 ">
          <strong>Register & Log in </strong> to your account to have
          access to your class material, your schedule and you payment.
           <code>.Make sure</code> to check the material and return the homework sheet completed.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>

  );
}