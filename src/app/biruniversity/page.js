import Bir from "@/component/bir/Bir";

export const metadata = {
  metadataBase: new URL("https://prakashacademy.net"),
  title: "Prakash Academy | BIR TIKENDRAJIT UNIVERSITY ",
  description:
    "Bir Tikendrajit University, Manipur is established by the Manipur Government as an Act No. 9 of 2020 and under us2(f) of UGC act 1956.",
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
      "Bir Tikendrajit University, Manipur is established by the Manipur Government as an Act No. 9 of 2020 and under us2(f) of UGC act 1956.",
    images: "/og-image.png",
  },
};

function BirUniversity() {
  return (
    <>
      <Bir></Bir>
    </>
  );
}

export default BirUniversity;
