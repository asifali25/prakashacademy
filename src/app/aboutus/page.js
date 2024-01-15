import AboutusPage from "@/component/aboutus_page/AboutusPage";

export const metadata = {
  metadataBase: new URL("https://prakashacademy.net"),
  title: "Prakash Academy | About Us",
  description:
    "Welcome to Prakash Academy, where education meets experience! With a rich legacy spanning three decades",
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

function AboutUs() {
  return (
    <>
      <AboutusPage></AboutusPage>
    </>
  );
}

export default AboutUs;
