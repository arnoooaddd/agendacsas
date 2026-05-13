import { useParams } from "react-router-dom";
import SeoLandingPage from "@/components/SeoLandingPage";
import NotFound from "@/pages/NotFound";
import { seoPages } from "./seoPagesData";

interface Props { slug?: string }

const SeoPageRoute = ({ slug: slugProp }: Props) => {
  const params = useParams();
  const slug = slugProp ?? params.slug ?? "";
  const data = seoPages[slug];
  if (!data) return <NotFound />;
  return <SeoLandingPage {...data} />;
};

export default SeoPageRoute;
