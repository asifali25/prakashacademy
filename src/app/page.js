import SectionOne from "@/component/section-one/SectionOne";
import Service from "@/component/serviceprovide/Service";
import AdmissionGuidance from "@/component/admission_guidance/AdmissionGuidance";
import Coaching from "@/component/coaching/Coaching";
import WhyUs from "@/component/whyus/WhyUs";
import Query from "@/component/query/Query";
import FAQ from "@/component/faq/FAQ";

export default function Home() {
  return (
    <>
      <SectionOne></SectionOne>
      <Service></Service>
      <AdmissionGuidance></AdmissionGuidance>
      <Coaching></Coaching>
      <WhyUs></WhyUs>
      <Query></Query>
      <FAQ></FAQ>
    </>
  );
}
