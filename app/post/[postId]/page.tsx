import type { Metadata } from "next";
import { PostDeepLinkLanding } from "@/components/post/PostDeepLinkLanding";

type PostPageProps = {
  params: Promise<{ postId: string }>;
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { postId } = await params;
  const canonical = `https://www.renuir.com/post/${encodeURIComponent(postId)}`;

  return {
    title: `Open Renuir post #${postId}`,
    description: "Open this lost and found post in Renuir.",
    alternates: {
      canonical,
    },
    openGraph: {
      title: `Open Renuir post #${postId}`,
      description: "Open this lost and found post in Renuir.",
      url: canonical,
      siteName: "Renuir",
      type: "website",
    },
    other: {
      "apple-itunes-app": `app-id=6758735828, app-argument=${canonical}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { postId } = await params;
  return <PostDeepLinkLanding postId={postId} />;
}
