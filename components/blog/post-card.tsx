import Link from "next/link";
import { Card, CardContent } from "../ui/card";

export interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export function PostCard({ title, excerpt, date, readTime, slug }: PostCardProps) {
  return (
    <Card className="overflow-hidden hover:border-border/80 transition-colors border-border/40">
      <Link href={`/post/${slug}`} className="block">
        <div className="aspect-video bg-muted w-full relative">
          {/* Placeholder for Image */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            Image Placeholder
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 text-[13px] font-semibold tracking-wider uppercase text-muted-foreground mb-3">
            <time>{date}</time>
            <span>&bull;</span>
            <span>{readTime}</span>
          </div>
          <h3 className="font-display text-2xl font-medium leading-tight mb-2 text-primary">{title}</h3>
          <p className="text-foreground/80 line-clamp-2">{excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  );
}
