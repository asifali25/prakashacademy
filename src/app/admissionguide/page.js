import AdmissionGuide from "@/component/admissionguide/AdmissionGuide";

export const metadata = {
  metadataBase: new URL("https://prakashacademy.net"),
  title: "Prakash Academy | Admission Guide",
  description:
    "Welcome to Prakash Academy! We are excited about your interest in joining our educational community",
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
    title: "Prakash Academy | Admission Guide",
    description:
      "Welcome to Prakash Academy! We are excited about your interest in joining our educational community",
    images: "/og-image.png",
  },
};

function AdmissionGuidance() {
  return (
    <>
      <AdmissionGuide></AdmissionGuide>
    </>
  );
}

export default AdmissionGuidance;
