import SectionOne from "@/component/section-one/SectionOne";
import Service from "@/component/serviceprovide/Service";
import AdmissionGuidance from "@/component/admission_guidance/AdmissionGuidance";
import Coaching from "@/component/coaching/Coaching";
import WhyUs from "@/component/whyus/WhyUs";
import Query from "@/component/query/Query";
import FAQ from "@/component/faq/FAQ";

export const metadata = {
  metadataBase: new URL("https://prakashacademy.net"),
  title: "Prakash Academy | Home",
  description:
    "Prakash Academy Provide Greate Coaching and Carrier Guidance in Laxmi Nagar Delhi",
  keywords: [
    "Best Coaching",
    "Coaching Center at Laxmi Nagar",
    "MBA",
    "LLB",
    "ITI",
    "Admission Guide",
    "Admission Guidance",
    "Carrier Guide",
  ],
  authors: [{ name: "Mahendra Kumar" }],
  openGraph: {
    title: "Prakash Academy",
    description:
      "Prakash Academy Provide Greate Coaching and Carrier Guidance in Laxmi Nagar Delhi",
    images: "/og-image.png",
  },
};

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
