import dynamic from "next/dynamic";

const SwaggerUI = dynamic<{
  url: string;
  docExpansion: string;
}>(() => import("swagger-ui-react"), { ssr: false });

const SwaggerWrapper = ({ url }: { url: string }) => (
  <div dir="ltr">
    <SwaggerUI docExpansion="none" url={url} />
  </div>
);

export default SwaggerWrapper;
