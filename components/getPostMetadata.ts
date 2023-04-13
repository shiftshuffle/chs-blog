import fs from 'fs'
import matter from "gray-matter";
import { PostMetadata } from '@/components/PostMetadata';
const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));
  const posts = markdownPosts.map((FileName) => {
    const fileContents = fs.readFileSync(`posts/${FileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: FileName.replace(".md", "")
    }
  })
  return posts
}
export default getPostMetadata