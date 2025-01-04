import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { type simpleProjectCard } from "lib/interface";
import { client, urlFor } from "lib/sanity";
import { PortableText } from "@portabletext/react";

export const revalidate = 30; // revalidate cache every hour

const fetchProjects = async (): Promise<simpleProjectCard[]> => {
  const query = `*[_type=='project'] | order(_createdAt desc){
  ...,                  
  "currentSlug": slug.current,
  showcaseVideoFile
}`;

  const data = await client.fetch<simpleProjectCard[]>(query);
  return data;
};

export default async function Projects() {
  const data: simpleProjectCard[] = await fetchProjects();

  console.log("data", data);
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 flex items-center justify-between"></div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((post: simpleProjectCard, idx) => {
          return (
            <Link
              key={idx}
              href={`/project/${post.currentSlug}`}
              className="group"
            >
              <Card className="h-full items-center overflow-hidden rounded-lg shadow-lg transition-shadow duration-200 group-hover:shadow-xl">
                <Image
                  className="h-[200px] w-full rounded-t-lg object-cover transition-transform group-hover:scale-105"
                  height={500}
                  width={500}
                  alt=""
                  src={urlFor(post?.siteImage)?.url() ?? ""}
                />
                <CardContent className="mt-5 flex flex-col">
                  <CardTitle className="group-hover:text-primary">
                    {post.name}
                  </CardTitle>
                  <p className="mt-2 line-clamp-1 text-sm text-gray-600 dark:text-gray-300">
                    {post.techDescription}
                  </p>
                  <PortableText
                    value={post?.description}
                    // components={/* optional object of custom components to use */}
                  />
                  {post?.tags?.length > 0 && (
                    <div className="mt-2">
                      <h2 className="text-lg font-bold">Tags</h2>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {post?.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="transition-transform group-hover:scale-105"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* <Button asChild variant="default" className="w-full">
                    <Link href={`/project/${post.currentSlug}`}>Read More</Link>
                  </Button> */}
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
