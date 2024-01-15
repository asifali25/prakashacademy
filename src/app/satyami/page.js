const { default: SatyamIti } = require("@/component/satyamiti/SatyamIti");

export const metadata = {
  metadataBase: new URL("https://prakashacademy.net"),
  title: "Prakash Academy | Satyam ITI ",
  description:
    "Satyam ITI coaching center is the best ITI classes in Hapur . We are providing all best ITI classes near by me.",
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
    title: "Prakash Academy | BIR TIKENDRAJIT UNIVERSITY",
    description:
      "Satyam ITI coaching center is the best ITI classes in Hapur . We are providing all best ITI classes near by me.",
    images: "/og-image.png",
  },
};

function SatyamI() {
  return (
    <>
      <SatyamIti></SatyamIti>
    </>
  );
}

export default SatyamI;
